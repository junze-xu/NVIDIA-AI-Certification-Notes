---
id: chapter-08
title: "第 8 章实验：cuGraph 图分析"
description: "PageRank、Louvain、BFS、SSSP 图算法实验"
sidebar_position: 8
---

# 实验：cuGraph 图分析

:::note 预计用时
18 分钟
:::

## 实验目标

- 掌握 cuGraph 的图构建方法
- 能根据问题描述选择合适的图算法
- 理解有向图与无向图的区别

## 练习 1：构建有向图并计算 PageRank

```python
import cugraph
import cudf

edges = cudf.DataFrame({
    'src': [0, 1, 2, 3, 0],
    'dst': [1, 2, 3, 0, 2],
    'weight': [1.0, 2.0, 1.5, 0.5, 1.0]
})

G = cugraph.Graph(directed=True)
G.from_cudf_edgelist(edges, source='src', destination='dst', edge_attr='weight')

pagerank = cugraph.pagerank(G)
print(pagerank.sort_values('pagerank', ascending=False))
```

## 练习 2：社区发现

```python
parts, modularity = cugraph.louvain(G)
print(f"模块度: {modularity}")
print(parts.head())
```

:::tip
cugraph.Graph() 默认 directed=False。有向关系必须设置 directed=True。
:::

## 关键要点

:::info 本章记忆锚点
影响力排名 → PageRank。关键桥梁 → 介数中心性。社区聚类 → Louvain。加权路径 → SSSP。无权路径 → BFS。
:::
