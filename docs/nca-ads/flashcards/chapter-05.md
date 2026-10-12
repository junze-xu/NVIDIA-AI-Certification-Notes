---
id: chapter-05
title: "第 5 章：cuML 基础 — 知识卡片"
description: "cuML vs sklearn、KMeans、DBSCAN、PCA、UMAP 知识卡片"
sidebar_position: 5
---

# cuML 基础 — 知识卡片

## 卡片 1

**Q：cuML 的 API 设计原则是什么？**

A：有意镜像 scikit-learn 的估计器 API，实现近乎即插即用的 GPU 加速。核心方法 `.fit()`、`.predict()`、`.transform()` 签名与 sklearn 相同。

---

## 卡片 2

**Q：DBSCAN 和 KMeans 的关键区别？**

A：
- KMeans：需预定义 k，不处理噪声，簇形状大致球形
- DBSCAN：无需预定义 k，可处理噪声（label == -1），簇形状任意

---

## 卡片 3

**Q：小数据集上 GPU ML 可能比 CPU 慢的原因？**

A：GPU 传输开销（主机→设备拷贝）超过 GPU 计算收益。数千行数据倾向 sklearn。

---

## 卡片 4

**Q：cuML 聚类用什么方法一步完成训练和标签返回？**

A：`.fit_predict(X)`。KMeans 和 DBSCAN 都支持此方法（无监督学习）。

---

## 卡片 5

**Q：PCA、UMAP、t-SNE 中哪个是线性的，哪个最适合大规模可视化？**

A：
- PCA：线性，最快，通用降维
- UMAP：非线性，GPU 加速快，规模化可视化首选
- t-SNE：非线性，较慢，仅小规模可视化

---

## 卡片 6

**Q：cuML 首选的输入数据类型是什么？**

A：cuDF DataFrame/Series 或 CuPy array（零拷贝输入）。NumPy array 需主机→设备拷贝，pandas DataFrame 需额外转换成本。
