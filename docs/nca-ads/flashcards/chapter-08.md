---
id: chapter-08
title: "第 8 章：cuGraph 图分析 — 知识卡片"
description: "PageRank、Louvain、BFS、SSSP、中心性知识卡片"
sidebar_position: 8
---

# cuGraph 图分析 — 知识卡片

## 卡片 1

**Q：`cugraph.Graph()` 默认创建有向图还是无向图？**

A：**无向图**（directed=False）。有向关系（转账、关注、单行道）必须传入 `directed=True`。

---

## 卡片 2

**Q：题目问"谁是最有影响力的节点"用什么算法？**

A：`cugraph.pagerank(G)`。默认 damping=0.85，max_iter=100。

---

## 卡片 3

**Q：题目问"谁连接了不同群体/是关键桥梁"用什么算法？**

A：`cugraph.betweenness_centrality(G)`（介数中心性）。

---

## 卡片 4

**Q：题目问"分成聚类/社区"且组数未知用什么算法？**

A：`cugraph.louvain(G)`。返回分区和模块度（模块度越高 = 社区结构越强）。

---

## 卡片 5

**Q：SSSP 和 BFS 的区别是什么？**

A：
- BFS：无权图最短路径（最少跳数）
- SSSP：加权图最短路径（时间/成本/距离），**要求** edge_attr

---

## 卡片 6

**Q：PageRank 的 damping factor 默认值是多少？**

A：0.85。
