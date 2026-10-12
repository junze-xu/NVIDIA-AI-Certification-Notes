---
id: chapter-12
title: "第 12 章：考试策略与时间管理 — 速查表"
description: "60 分钟答题节奏、关键词解码、RAPIDS 工具匹配"
sidebar_position: 12
---

# 考试策略与时间管理 — 速查表

## 时间分配

| 题目类型 | 目标时间 |
|----------|----------|
| 服务选择 / 概念题 | 30-45 秒 |
| 配置题 | 45-60 秒 |
| 场景题 | 60-90 秒 |
| 标记阈值 | 超过 90 秒 → 标记跳过 |
| 最后复核 | 留 5-8 分钟处理标记题 |

## 关键词线索解码

| 关键词 | 优先考虑 |
|--------|----------|
| BEST | 整体最优权衡（成本、速度、复杂度） |
| FASTEST | 仅原始执行/运行时速度 |
| MOST memory-efficient | 最小化峰值 GPU/主机内存 |
| MOST scalable | 处理数据/节点增长（通常 → Dask-cuDF/cuML） |

## RAPIDS 工具速配

| 需求 | 库 |
|------|-----|
| 单 GPU DataFrame 操作 | cuDF |
| 多 GPU/外存 DataFrame | Dask-cuDF |
| GPU ML 算法（单 GPU） | cuML |
| 大规模 GPU ML（多 GPU） | cuML + Dask |
| 图算法（PageRank、BFS、Louvain） | cuGraph |
| 地理空间操作 | cuSpatial |

## 跨域陷阱清单

- 数据适合一个 GPU → 不要选 Dask-cuDF（不必要开销）
- 无需建模，仅需聚合 → 不要选 cuML
- "跨节点/集群"或"超过 GPU 内存" → Dask-cuDF/dask_cuml 正确
- "GPU 驻留数据上最快的 groupby" → 原生 `cudf.groupby()`

## 关键配置参数

| 参数 | 控制 |
|------|------|
| device_memory_limit | GPU→主机溢出阈值 |
| rmm_pool_size | RAPIDS 内存管理器池分配 |
| n_workers | worker 进程数 |
| threads_per_worker | 每 worker 的 CPU 线程 |

## 考试当日流程

1. 先读关键词（BEST/FASTEST/MOST...）
2. 排除匹配错误工具-规模模式的干扰项
3. 超时预算仍未解 → 标记，选最佳猜测，继续
4. 最后 5-8 分钟专门处理标记题
