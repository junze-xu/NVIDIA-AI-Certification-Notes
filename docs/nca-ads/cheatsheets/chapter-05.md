---
id: chapter-05
title: "第 5 章：cuML 基础 — 速查表"
description: "GPU 机器学习算法、KMeans、PCA、UMAP"
sidebar_position: 5
---

# cuML 基础 — 速查表

## 核心 API（与 scikit-learn 一致）

| 方法 | 用途 |
|------|------|
| `.fit(X, y=None)` | 训练估计器 |
| `.predict(X)` | 生成预测 |
| `.fit_predict(X)` | 一步训练 + 返回标签 |
| `.transform(X)` / `.fit_transform(X)` | 特征变换 |
| `.score(X, y)` | 评估模型 |

## 按任务选择算法

| 任务 | cuML 类 |
|------|---------|
| 线性回归 | `cuml.linear_model.LinearRegression` |
| 逻辑回归 | `cuml.linear_model.LogisticRegression` |
| 集成分类/回归 | `cuml.ensemble.RandomForestClassifier/Regressor` |
| 质心聚类（已知 k） | `cuml.cluster.KMeans` |
| 密度聚类（k 未知、含噪声） | `cuml.cluster.DBSCAN` |
| 线性降维 | `cuml.decomposition.PCA` |
| 非线性降维 | `cuml.manifold.UMAP`、`cuml.manifold.TSNE` |
| 相似度搜索 | `cuml.neighbors.NearestNeighbors` |

## 决策准则

| 因素 | 倾向 cuML（GPU） | 倾向 sklearn（CPU） |
|------|-----------------|---------------------|
| 数据集大小 | 1 万+ 行 | 数千行或更少 |
| 硬件 | 有 CUDA GPU | 无 GPU |
| 迭代速度需求 | 训练/推理受限 | 快速原型 |

:::note
考试考查：小数据时 GPU 传输开销 > GPU 计算收益 → 倾向 sklearn。
:::

## KMeans vs DBSCAN

| | KMeans | DBSCAN |
|---|--------|--------|
| 需预先 k？ | 是 | 否 |
| 簇形状 | 大致球形 | 任意 |
| 处理噪声？ | 否 | 是 |

## PCA vs UMAP vs t-SNE

| | PCA | UMAP | t-SNE |
|---|-----|------|-------|
| 线性？ | 是 | 否 | 否 |
| 大规模速度 | 最快 | 快 | 较慢 |
| 最适合 | 通用降维 | 规模化可视化 | 小规模可视化 |

## 数据格式要求

- **优选**：cuDF DataFrame/Series、CuPy array（零拷贝）
- **可接受**：NumPy array（主机→设备拷贝）
- 输出为 `CumlArray`，可转为 NumPy/CuPy/cuDF/pandas
