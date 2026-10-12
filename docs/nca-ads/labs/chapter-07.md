---
id: chapter-07
title: "第 7 章实验：GPU EDA 与异常检测"
description: "时间序列、离群点检测、零代码加速实验"
sidebar_position: 7
---

# 实验：GPU EDA 与异常检测

:::note 预计用时
15 分钟
:::

## 实验目标

- 掌握 cuDF EDA 函数
- 能使用 Z-score 和 IQR 检测离群点
- 理解 cuDF corr() 仅 pearson

## 练习 1：GPU EDA

```python
import cudf

df = cudf.DataFrame({'a': [1, 2, 3, 4, 100], 'b': [5, 6, 7, 8, 9]})

# 描述统计
print(df.describe())

# 相关矩阵（仅 pearson）
print(df.corr())
```

:::caution
cuDF `.corr()` 不支持 spearman 或 kendall。
:::

## 练习 2：离群点检测

```python
# Z-score 方法
mean, std = df['a'].mean(), df['a'].std()
z_scores = (df['a'] - mean) / std
outliers = df[abs(z_scores) > 3]
print(f"离群点: {outliers.to_pandas().values}")
```

## 关键要点

:::info 本章记忆锚点
cuDF corr() 仅 pearson。Z-score 适合正态数据，IQR 适合偏态数据。DBSCAN label == -1 表示异常。
:::
