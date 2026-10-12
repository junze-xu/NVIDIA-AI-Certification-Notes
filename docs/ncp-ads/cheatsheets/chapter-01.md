---
id: chapter-01
title: "第 1 章：GPU/CPU 架构与 CUDA-X 数据科学栈 — 速查表"
description: "cuDF/cuML/cuGraph、SIMT、PCIe 传输瓶颈、NGC RAPIDS"
sidebar_position: 1
---

# GPU 与 CPU 架构及 CUDA-X 数据科学栈 — 速查表

## RAPIDS 库分工

| 库 | 功能 | 对应 CPU 库 |
|------|------|----------|
| cuDF | GPU DataFrame（filter/groupby/join） | pandas |
| cuML | GPU 机器学习算法 | scikit-learn |
| cuGraph | GPU 图算法（PageRank、BFS、Louvain） | NetworkX |
| cuSpatial | 地理空间操作 | GeoPandas |

## GPU vs CPU 选择

| 维度 | CPU（延迟优化/MIMD） | GPU（吞吐优化/SIMT） |
|------|---------------------|---------------------|
| 适合 | 复杂分支逻辑 | 大规模并行简单操作 |
| 数据并行 ETL | 亚 GB 一次性任务 | GB 级重复任务 |

## PCIe 传输瓶颈

| 问题 | 解决方案 |
|------|----------|
| 90% 时间在 H2D 传输 | 保持数据驻留 GPU，避免来回传输 |
| 减少 CPU↔GPU 往返 | 端到端 GPU 流水线 |

:::info 记忆锚点
通用 ETL→cuDF；图算法→cuGraph；PCIe传输是首要瓶颈。
:::

:::caution 高频陷阱
cuGraph 用于图算法而非通用 ETL；亚 GB 一次性任务 CPU 更快（GPU 初始化开销）。
:::
