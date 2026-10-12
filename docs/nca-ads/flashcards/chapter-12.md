---
id: chapter-12
title: "第 12 章：时间管理与策略 — 知识卡片"
description: "考试时间分配、关键词解码、RAPIDS 工具速配知识卡片"
sidebar_position: 12
---

# 时间管理与策略 — 知识卡片

## 卡片 1

**Q：NCA-ADS 考试中超过多少秒未解应标记跳过？**

A：90 秒。标记并跳过，最后用 5-8 分钟缓冲时间处理标记题。

---

## 卡片 2

**Q：题目问"MOST scalable"通常指向什么工具？**

A：Dask-cuDF / cuML（分布式多 GPU 方案），处理数据/节点的增长能力。

---

## 卡片 3

**Q：数据适合单个 GPU 时选 Dask 是正确的吗？**

A：**不正确**。Dask 引入不必要的开销，单 GPU cuDF 是更简单的方案。

---

## 卡片 4

**Q："GPU 驻留数据上最快的 groupby"应选什么？**

A：原生 `cudf.groupby()`，不是 pandas，也不是 Dask。
