---
id: chapter-05
title: "第 5 章实验：cuML 基础"
description: "GPU 机器学习算法、聚类、降维实验"
sidebar_position: 5
---

# 实验：cuML 基础

:::note 预计用时
18 分钟
:::

## 实验目标

- 掌握 cuML 的 sklearn 兼容 API
- 能根据场景选择 KMeans 或 DBSCAN
- 理解 PCA、UMAP、t-SNE 的适用场景

## 练习 1：GPU KMeans 聚类

```python
from cuml.cluster import KMeans
import cudf

df = cudf.DataFrame({'x': [1, 2, 3, 10, 11, 12], 'y': [1, 1, 2, 10, 11, 11]})
kmeans = KMeans(n_clusters=2)
labels = kmeans.fit_predict(df)
print(f"聚类标签: {labels.to_pandas().values}")
```

## 练习 2：PCA 降维

```python
from cuml.decomposition import PCA

pca = PCA(n_components=2)
result = pca.fit_transform(df)
print(f"解释方差比: {pca.explained_variance_ratio_}")
```

:::tip
PCA 是线性的最快，UMAP 是非线性的可规模化可视化，t-SNE 仅小规模可视化。
:::

## 关键要点

:::info 本章记忆锚点
cuML 镜像 sklearn API 实现 GPU 加速。KMeans 需预定义 k，DBSCAN 无需且可处理噪声。小数据倾向 sklearn。
:::
