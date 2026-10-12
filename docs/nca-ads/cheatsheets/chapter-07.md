---
id: chapter-07
title: "第 7 章：GPU EDA 与异常检测 — 速查表"
description: "时间序列、Z-score、IQR、DBSCAN 异常检测"
sidebar_position: 7
---

# GPU EDA 与异常检测 — 速查表

## EDA 函数（cuDF）

| 函数 | 用途 | 说明 |
|------|------|------|
| `df.describe()` | count/mean/std/min/25/50/75/max | 仅数值列 |
| `df.value_counts()` | 唯一值频率 | 按 Series 工作 |
| `df.corr()` | 相关矩阵 | **仅 pearson** — 无 spearman/kendall |

:::caution
cuDF `.corr()` 不支持 spearman/kendall！
:::

## GPU 时间序列

| 操作 | 语法 | 要求 |
|------|------|------|
| 重采样 | `df.resample('D').mean()` | 需 DatetimeIndex |
| 滚动窗口 | `df.rolling(window=7).mean()` | 固定大小窗口 |
| 扩展窗口 | `df.expanding().mean()` | 从序列起点增长 |
| 差分 | `df.diff(n)` | 当前值与 n 行前之差 |

## 离群点检测方法

| 方法 | 公式/规则 | 适用场景 |
|------|-----------|----------|
| Z 分数 | (x-mean)/std，标记 \|z\| > 3 | 近似正态数据 |
| IQR | Q1-1.5×IQR, Q3+1.5×IQR | 偏态/非正态数据 |
| DBSCAN | label == -1 → 异常 | 无监督，基于密度 |
| KMeans 距离 | 到最近质心距离 > 阈值 | 大致球形簇 |

:::tip
Z-score 和 IQR 应通过原生 cuDF Series 操作（`.mean()`、`.std()`、`.quantile()`）计算 — 绝不在流水线中途拉到 pandas。
:::

## 零代码 GPU 加速

```python
%load_ext cudf.pandas
import pandas as pd  # 透明 GPU 加速
```

:::note
`import cudf as pd` **不等同** — 不受支持的 API 会硬失败而非回退。
:::
