---
id: chapter-08
title: "第 8 章：GPU 规模下的 EDA 与异常检测 — 速查表"
description: "Z 分数向量化、describe 方法限制、cuML vs cuDF 分工"
sidebar_position: 8
---

# GPU 规模下的 EDA、时间序列分析与异常检测 — 速查表

## 异常检测方法选择

| 数据特征 | 最佳方法 |
|----------|----------|
| 单特征近似高斯 | Z 分数（mean/std，完全向量化 O(n)）|
| 多维非高斯 | cuML DBSCAN / Isolation Forest |

## cuDF describe 限制

| 默认 | 限制 |
|------|------|
| `df.describe()` | 仅默认方法可用，调用其他方法（如 spearman）会报错 |

:::info 记忆锚点
一维高斯异常→Z分数最快；describe 仅默认方法；cuML无Isolation Forest。
:::
