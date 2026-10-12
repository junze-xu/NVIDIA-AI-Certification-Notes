---
id: chapter-06
title: "第 6 章：GPU 特征工程与调优 — 速查表"
description: "cuML 预处理、编码器选择、超参数调优"
sidebar_position: 6
---

# GPU 特征工程与调优 — 速查表

## 预处理变换器

| 变换器 | 何时使用 |
|--------|----------|
| StandardScaler | 近似正态数据，模型假设零均值/单位方差 |
| MinMaxScaler | 需有界范围（如 [0,1]） |
| RobustScaler | 存在离群点 — 用中位数/IQR |
| Normalizer | 按行（样本）单位范数缩放 |
| LabelEncoder | 序数安全模型（基于树），开销低 |
| OneHotEncoder | 线性/基于距离的模型，低到中等基数 |
| TargetEncoder | 高基数分类；必须用 CV 折叠避免泄漏 |

## 编码决策规则

- **基于树 + 任意基数** → LabelEncoder 即可
- **线性/距离模型 + 低基数** → OneHotEncoder
- **任意模型 + 极高基数** → TargetEncoder（用 CV 安全拟合）

:::caution 高频陷阱
对极高基数 ID 使用 OneHotEncoder → 内存爆炸。TargetEncoder 才正确。
:::

## 避免 CPU↔GPU 瓶颈

1. 全程保持数据为 cudf DataFrame / cupy array
2. 绝不在调优或 CV 循环内调用 `.to_pandas()` / `.to_numpy()`
3. 会话开始时设置 `cuml.set_global_output_type('cudf')` 或 `('cupy')`
4. 用 `cuml.model_selection.train_test_split` 做 GPU 驻留切分

## 超参数调优

| 方法 | 说明 |
|------|------|
| sklearn GridSearchCV / RandomizedSearchCV | 可与 cuML 配合（兼容 API）；单 GPU 设 `n_jobs=1` |
| Dask-ML GridSearchCV | 跨集群真正多 GPU 并行搜索 |

:::note
单 GPU 上对 sklearn GridSearchCV 设 `n_jobs=-1` → CUDA 上下文错误。
:::

## 快速 API

```python
import cuml
cuml.set_global_output_type('cudf')
from cuml.preprocessing import StandardScaler, OneHotEncoder, LabelEncoder
from cuml.model_selection import train_test_split
```
