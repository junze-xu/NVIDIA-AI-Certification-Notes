---
id: chapter-04
title: "第 4 章实验：I/O 与 GPU 流水线"
description: "Parquet 下推、压缩格式对比、流水线监控实验"
sidebar_position: 4
---

# 实验：I/O 与 GPU 流水线

:::note 预计用时
15 分钟
:::

## 实验目标

- 掌握 Parquet 列裁剪和谓词下推
- 理解压缩编解码的取舍
- 能识别 I/O 瓶颈

## 练习 1：谓词下推对比

```python
import cudf

# 无下推（全量读取后再过滤）- 慢
df = cudf.read_parquet("data/large.parquet")
df_filtered = df[df['amount'] > 1000]

# 有下推（读取时直接过滤）- 快
df_fast = cudf.read_parquet(
    "data/large.parquet",
    columns=['id', 'amount'],
    filters=[('amount', '>', 1000)]
)
```

## 练习 2：压缩格式性能对比

将同一数据集分别保存为 Snappy、LZ4、GZIP、ZSTD 压缩的 Parquet 文件，对比读取速度。

:::tip
Snappy 解码最快但压缩比低；ZSTD 压缩比高但解码慢。吞吐关键选 Snappy。
:::

## 关键要点

:::info 本章记忆锚点
列查询用 Parquet + 列裁剪 + 下推。全量读再过滤浪费 I/O。解码速度：Snappy > LZ4 > GZIP > ZSTD。
:::
