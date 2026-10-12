---
id: chapter-08
title: "第 8 章：cuGraph 图分析 — 速查表"
description: "PageRank、Louvain、BFS、SSSP、中心性"
sidebar_position: 8
---

# cuGraph 图分析 — 速查表

## 构建图

```python
import cugraph, cudf

G = cugraph.Graph(directed=True)   # 默认 directed=False！
G.from_cudf_edgelist(edges_df, source='src', destination='dst', edge_attr='weight')
```

:::caution
单独的 `cugraph.Graph()` = **无向图**。务必检查关系是否单向 → 传入 `directed=True`。
:::

## 有向 vs 无向规则

| 关系类型 | 图模式 |
|----------|--------|
| 资金转账、关注、单行道 | 有向 |
| 友谊、共同购买、双向链接 | 无向 |

## 算法选择速查

| 问题措辞 | 算法 | 调用 |
|----------|------|------|
| "最具影响力 / 按重要性排名" | PageRank | `cugraph.pagerank(G)` |
| "桥 / 中介 / 关键连接节点" | 介数中心性 | `cugraph.betweenness_centrality(G)` |
| "中心 / 能快速触达所有人" | 接近中心性 | `cugraph.closeness_centrality(G)` |
| "分组 / 聚类，组数未知" | Louvain | `cugraph.louvain(G)` |
| "无权最短路径 / 最少跳数" | BFS | `cugraph.bfs(G, start)` |
| "加权最短路径（时间/成本）" | SSSP | `cugraph.sssp(G, source)` |

## PageRank 默认值

| 参数 | 默认值 |
|------|--------|
| damping (alpha) | 0.85 |
| max_iter | 100 |
| tol | 1e-5 |

## Louvain 输出

```python
parts_df, modularity = cugraph.louvain(G)
```

模块度越高 = 社区结构越强。

:::note
SSSP **要求** `edge_attr`。无权边请改用 BFS —— SSSP 在无权图上无意义。
:::
