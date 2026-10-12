---
id: chapter-01
title: "第 1 章实验：cuDF 基础"
description: "cudf.pandas 基准测试、pandas 对比实验"
sidebar_position: 1
---

# 实验：cuDF 基础

:::note 预计用时
20 分钟
:::

## 实验目标

- 掌握 cudf.pandas 的启用方式
- 对比大数据集下 cuDF vs pandas 的性能差异
- 理解 CPU 回退行为

## 练习 1：cudf.pandas 基准测试

```python
%load_ext cudf.pandas
import pandas as pd
import time

# 生成 500 万行测试数据
df = pd.DataFrame({'a': range(5_000_000), 'b': range(5_000_000)})

# 测试 groupby + merge 性能
start = time.time()
result = df.groupby('a').sum().reset_index()
print(f"耗时: {time.time() - start:.2f}s")
```

:::tip
对比不使用 cudf.pandas 的纯 pandas 运行，记录性能差异。
:::

## 练习 2：CPU 回退验证

```python
# 测试不受支持的自定义 apply 函数
result = df['a'].apply(lambda x: x ** 2 + 1)
```

:::note
此操作会自动回退到 CPU pandas 执行，不会报错。
:::

## 关键要点

:::info 本章记忆锚点
cudf.pandas 为 pandas 代码提供近乎即插即用的 GPU 加速，但对不支持的操作会静默回退到 CPU — 要清楚哪些操作会回退。
:::
