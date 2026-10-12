---
id: chapter-06
title: "第 6 章实验：GPU 特征工程与调优"
description: "cuML 预处理、编码器选择、超参数调优实验"
sidebar_position: 6
---

# 实验：GPU 特征工程与调优

:::note 预计用时
20 分钟
:::

## 实验目标

- 掌握 cuML 预处理变换器
- 能正确选择编码器
- 理解 CPU↔GPU 传输瓶颈的避免方法

## 练习 1：缩放器选择实验

```python
from cuml.preprocessing import StandardScaler, MinMaxScaler, RobustScaler
import cudf

df = cudf.DataFrame({'values': [1, 2, 3, 100, 4, 5]})  # 100 是离群点

# 存在离群点 → RobustScaler
scaler = RobustScaler()
result = scaler.fit_transform(df[['values']])
```

:::caution
有离群点时 StandardScaler 会被扭曲，应选 RobustScaler。
:::

## 练习 2：全局输出类型设置

```python
import cuml
cuml.set_global_output_type('cudf')

# 此后所有 cuML 变换输出保持 GPU 驻留
```

## 练习 3：GPU 安全 GridSearchCV

```python
from sklearn.model_selection import GridSearchCV
from cuml.linear_model import LogisticRegression

# 单 GPU：n_jobs=1（避免 CUDA 上下文冲突）
grid = GridSearchCV(LogisticRegression(), {'C': [0.1, 1, 10]}, n_jobs=1)
```

## 关键要点

:::info 本章记忆锚点
离群点 → RobustScaler。高基数 → TargetEncoder。单 GPU GridSearchCV 用 n_jobs=1。全程保持 GPU 驻留避免传输瓶颈。
:::
