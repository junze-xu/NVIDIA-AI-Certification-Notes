---
id: chapter-11
title: "第 11 章：可视化与部署 — 知识卡片"
description: "cuxfilter、Datashader、评分模式、漂移知识卡片"
sidebar_position: 11
---

# 可视化与部署 — 知识卡片

## 卡片 1

**Q：为什么 cuDF/cuPy 对象不能直接传给 matplotlib？**

A：matplotlib 是 CPU 库，仅接受 CPU 数据。必须先 `.to_pandas()` / `.to_numpy()` / `.get()` 转换。

---

## 卡片 2

**Q：大规模 GPU 驻留数据的交互式可视化用什么工具？**

A：cuxfilter（带交叉筛选的交互仪表板）或 Datashader（巨型点云聚合渲染）。

---

## 卡片 3

**Q：数据漂移和概念漂移的区别？**

A：
- 数据漂移：输入特征分布偏移（无需标签即可检测）
- 概念漂移：输入→目标关系变化（需标签检测性能下降）
