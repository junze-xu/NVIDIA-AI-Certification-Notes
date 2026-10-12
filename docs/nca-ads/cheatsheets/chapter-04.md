---
id: chapter-04
title: "第 4 章：I/O 与 GPU 流水线 — 速查表"
description: "Parquet、ORC、CUDA 下推、压缩编解码"
sidebar_position: 4
---

# I/O 与 GPU 流水线 — 速查表

## 文件格式吞吐对比

| 格式 | 布局 | 列裁剪 | 谓词下推 | GPU 读取速度 |
|------|------|--------|----------|-------------|
| CSV | 行 | 否 | 否 | 最慢 |
| Parquet | 列式 | 是 | 是 | 快，窄投影最佳 |
| ORC | 列式 | 是 | 是 | 与 Parquet 相当 |

:::tip
查询触及不到 50% 列时，列式格式大幅胜出。CSV 不支持下推。
:::

## 下推语法

```python
# Parquet 列 + 谓词下推
cudf.read_parquet(path, columns=['id','amount'], filters=[('amount','>',1000)])

# ORC stripe + 列裁剪
cudf.read_orc(path, columns=['id','amount'], stripes=[0,1])
```

在 `read_parquet()` **之后**再过滤 ≠ 谓词下推，浪费 I/O。

## 压缩编解码权衡

| 编解码 | 解码速度 | 压缩比 | 适用场景 |
|--------|----------|--------|----------|
| Snappy | 最快 | 较低 | 吞吐关键、频繁热读 |
| LZ4 | 很快 | 较低 | 低延迟流水线 |
| GZIP | 较慢 | 较高 | 存储敏感、不频繁读 |
| ZSTD | 中—慢 | 高 | 平衡比/速度 |

## 执行模型选择

| 场景 | 选择 |
|------|------|
| 装入单 GPU 内存 | 单 GPU cuDF |
| 超出单 GPU，装入节点多 GPU | Dask-cuDF |
| 已有 Spark SQL/DataFrame 任务 | Spark RAPIDS Accelerator |
| 大规模 ML 训练/推理 | cuML / cuGraph |

:::caution
Spark RAPIDS ≠ 用 cuDF 重写任务 — 关键是"无代码重写"。
:::

## 监控信号

| 信号 | 瓶颈类型 | 修复方向 |
|------|----------|----------|
| 低 GPU 利用率 + 长读取等待 | I/O 受限 | 格式/下推/压缩 |
| 持续高 GPU 利用率 | 计算受限 | 内核/算法/批大小 |
