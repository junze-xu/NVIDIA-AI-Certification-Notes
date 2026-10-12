---
id: chapter-09
title: "第 9 章实验：GPU 内存管理"
description: "RMM 池分配器、OOM 排查、溢出配置实验"
sidebar_position: 9
---

# 实验：GPU 内存管理

:::note 预计用时
15 分钟
:::

## 实验目标

- 掌握 RMM 池分配器的配置
- 理解 GPU OOM 的排查流程
- 能配置 dask-cuda 溢出

## 练习 1：RMM 池分配器

```python
import rmm

# 启用池分配器
rmm.reinitialize(pool_allocator=True, initial_pool_size=2**30)  # 1GB 池

# 此后 RAPIDS 操作将使用池分配
import cudf
df = cudf.DataFrame({'a': range(1000000)})
```

## 练习 2：dask-cuda 溢出配置

```python
from dask_cuda import LocalCUDACluster

cluster = LocalCUDACluster(device_memory_limit="0.8")  # 80% GPU 内存阈值
```

:::tip
GPU OOM 时首先减小分区大小（增加 npartions）。碎片化 OOM 用 RMM 池。大数据集用 dask-cuda 溢出。
:::

## 关键要点

:::info 本章记忆锚点
RMM 池预保留大块内存加速分配。OOM 首要修复：减小分区大小。统一内存用于一次性溢出，生产用显式溢出。
:::
