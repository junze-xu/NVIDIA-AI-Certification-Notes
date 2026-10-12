---
id: chapter-07
title: "第 7 章：GPU EDA 与异常检测 — 知识卡片"
description: "时间序列、Z-score、IQR、DBSCAN 异常检测知识卡片"
sidebar_position: 7
---

# GPU EDA 与异常检测 — 知识卡片

## 卡片 1

**Q：cuDF `.corr()` 支持哪些相关方法？**

A：**仅 pearson**。不支持 spearman 或 kendall。这是常见考试陷阱。

---

## 卡片 2

**Q：Z-score 和 IQR 分别适合什么数据分布？**

A：
- Z-score（\|z\| > 3）：近似正态数据
- IQR（Q1-1.5×IQR, Q3+1.5×IQR）：偏态/非正态数据，更稳健

---

## 卡片 3

**Q：DBSCAN 的噪声标签是什么？**

A：label == -1 表示异常/噪声点。不是正常的簇 ID。

---

## 卡片 4

**Q：重度偏态数据的离群点检测用什么方法？**

A：IQR 更稳健。Z-score 假设正态分布，对偏态数据效果差。
