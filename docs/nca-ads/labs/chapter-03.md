---
id: chapter-03
title: "第 3 章实验：Dask 多 GPU 工作流"
description: "dask-cudf、分区配置、洗牌优化实验"
sidebar_position: 3
---

# 实验：Dask 多 GPU 工作流

:::note 预计用时
20 分钟
:::

## 实验目标

- 掌握 LocalCUDACluster 的配置
- 理解 blocksize 和 device_memory_limit 的区别
- 能优化洗牌 OOM 问题

## 练习 1：搭建多 GPU 集群

```python
from dask_cuda import LocalCUDACluster
from dask.distributed import Client
import dask_cudf

cluster = LocalCUDACluster(device_memory_limit="0.8")
client = Client(cluster)
print(client)
```

## 练习 2：分区配置实验

```python
# 读取数据并设置分区大小
ddf = dask_cudf.read_parquet("data/*.parquet", blocksize="256MB")
ddf = ddf.repartition(npartitions=32)

result = ddf.groupby("key").agg({"value": "sum"}).persist()
print(result.compute())
```

:::tip
如果遇到洗牌 OOM，减小分区大小（增加 npartitions）+ 启用 device_memory_limit 溢出。
:::

## 关键要点

:::info 本章记忆锚点
Dask 可在单 GPU 上以外存模式运行。blocksize 控制摄入分区大小，device_memory_limit 是溢出阈值。洗牌 OOM 要减小分区而非增大。
:::
