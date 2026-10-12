---
id: chapter-03
title: "第 3 章：Dask 与多 GPU 工作流 — 速查表"
description: "dask-cudf、LocalCUDACluster、惰性求值"
sidebar_position: 3
---

# Dask 与多 GPU 工作流 — 速查表

## 核心对象

| 对象 | 说明 |
|------|------|
| `dask_cudf.DataFrame` | 由 Dask 任务图协调的分区 cudf.DataFrame 集合 |
| `LocalCUDACluster` | 单机上为每个 GPU 启动一个 worker |
| 任务图 | 惰性构建，`.compute()` 或 `.persist()` 时才执行 |

## 决策矩阵

| 场景 | 最佳选择 |
|------|----------|
| 数据轻松装入单 GPU VRAM | 单 GPU cuDF |
| 超出单 GPU VRAM（外存） | dask_cudf + LocalCUDACluster |
| 需要真正多 GPU 横向扩展 | dask_cudf + LocalCUDACluster（多 GPU） |
| 无 GPU / 数据极小 | CPU pandas |

:::tip
Dask **不是**必须多 GPU — 可在单 GPU 上以外存模式运行。
:::

## 关键参数

| 参数 | 控制 | 设置位置 |
|------|------|----------|
| `blocksize` / `chunksize` | 摄入时分区大小 | 读取函数调用 |
| `device_memory_limit` | GPU→主机内存溢出阈值 | LocalCUDACluster 配置 |
| `npartitions` | DataFrame 分区数 | `repartition(npartitions=...)` |

## 惰性求值流程

1. 构建操作（filter、groupby、merge）→ 仅构建任务图
2. `.compute()` → 执行图，返回本地结果
3. `.persist()` → 执行图，结果保留在 workers 上

## 多 GPU 连接/洗牌

- GPU worker 间使用 UCX 通信（可用时 NVLink，否则 TCP 回退）
- 洗牌 OOM 修复：**减小**分区大小 + 启用 `device_memory_limit` 溢出

:::caution
更大的分区不能让洗牌 OOM 变好 — 恰恰相反！
:::

## 快速命令

```python
from dask_cuda import LocalCUDACluster
from dask.distributed import Client
import dask_cudf

cluster = LocalCUDACluster(device_memory_limit="0.8")
client = Client(cluster)
ddf = dask_cudf.read_parquet("data/*.parquet", blocksize="256MB")
ddf = ddf.repartition(npartitions=32)
result = ddf.groupby("key").agg({"value": "sum"}).persist()
result.compute()
```
