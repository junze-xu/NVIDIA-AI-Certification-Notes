---
id: chapter-10
title: "第 10 章：cuML、GPU XGBoost 与超参数调优 — 速查表"
description: "GPU hist 梯度提升、KMeans/DBSCAN、RandomForest、交叉验证"
sidebar_position: 10
---

# cuML、GPU 加速的 XGBoost 与快速超参数调优 — 速查表

## GPU XGBoost

| 配置 | 说明 |
|------|------|
| `tree_method='hist'` + `device='cuda'` | GPU 直方图分箱 = 数千万行最短训练时间 |

## cuML 算法

| 算法 | 用途 |
|------|------|
| KMeans | 指定数量的聚类 |
| DBSCAN | 密度聚类（无需预设簇数）|
| RandomForest | Bagging 集成 |

:::info 记忆锚点
最大表格数据→GPU hist XGBoost；exact 方法太慢；sklearn 无 GPU。
:::
