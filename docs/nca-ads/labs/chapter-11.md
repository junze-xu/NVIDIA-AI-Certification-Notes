---
id: chapter-11
title: "第 11 章实验：可视化与部署"
description: "cuxfilter 交互可视化、批量/在线评分实验"
sidebar_position: 11
---

# 实验：可视化与部署

:::note 预计用时
12 分钟
:::

## 实验目标

- 掌握 GPU→CPU 数据转换用于可视化
- 能选择合适的可视化工具
- 理解批量评分与在线评分的取舍

## 练习 1：GPU 数据可视化

```python
import cudf
import matplotlib.pyplot as plt

df = cudf.DataFrame({'x': range(1000), 'y': range(1000)})

# 必须先从 GPU 转为 CPU
pdf = df.to_pandas()
plt.scatter(pdf['x'], pdf['y'])
plt.show()
```

:::note
cuDF/cuPy 对象不能直接传给 matplotlib，必须先 `.to_pandas()` 或 `.get()`。
:::

## 练习 2：cuxfilter 交互仪表板

```python
import cuxfilter
import cudf

df = cudf.DataFrame({'x': [...], 'y': [...], 'category': [...]})
cux_df = cuxfilter.DataFrame.from_dataframe(df)
chart = cux_df.dashboard(charts=[...], layout=cuxfilter.layouts.featured)
```

## 关键要点

:::info 本章记忆锚点
GPU 驻留数据必须先转 CPU 才能用 matplotlib 绘图。大规模 GPU 交互可视化用 cuxfilter。
:::
