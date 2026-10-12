---
id: chapter-08
title: "第 8 章：多节点扩展 — 知识卡片"
description: "NVLink vs PCIe、扩展策略知识卡片"
sidebar_position: 8
---

# 多节点扩展 — 知识卡片

## 卡片 1

**Q：NVLink vs PCIe 的带宽差异？**

A：NVLink 每 GPU 900GB/s，PCIe Gen4 x16 约 64GB/s。NVLink 快一个数量级。

---

## 卡片 2

**Q：多节点扩展的三层策略？**

A：节点内（NVLink/NVSwitch 最快）、机架内（InfiniBand）、跨节点（以太网）。
