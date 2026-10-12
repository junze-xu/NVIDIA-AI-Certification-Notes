---
id: chapter-01
title: "第 1 章：Rail-Optimized 与 Fat-Tree 拓扑 — 知识卡片"
description: "rail-optimized、fat-tree、scale-up vs scale-out 知识卡片"
sidebar_position: 1
---

# Rail-Optimized 与 Fat-Tree 拓扑 — 知识卡片

## 卡片 1

**Q：Rail-optimized 设计中 NIC 如何连接 leaf 交换机？**

A：同序号 NIC 连同一 leaf：所有节点的 NIC 0 → leaf 0，NIC 1 → leaf 1，依此类推。保证一跳可达，最小化集合操作延迟。

---

## 卡片 2

**Q：每节点 8 GPU 的 rail-optimized 集群最少需要多少台 leaf 交换机？**

A：8 台。每个 rail 序号（0-7）需要专属 leaf 交换机，确保端到端 rail 隔离。

---

## 卡片 3

**Q：为什么 AI 训练后端网络需要 1:1 无阻塞超订比？**

A：集合操作（all-reduce）产生突发同步流量；即使平均利用率低，瞬时突发也会饱和上行链路。1:1 确保 leaf→spine 上行带宽等于下行带宽。

---

## 卡片 4

**Q：Scale-up 与 scale-out 的关键区别？**

A：Scale-up（如 NVLink）在固定域内（NVL72 = 72 GPU）提供极高带宽通信。Scale-out 使用 NIC + leaf-spine Clos 拓扑将集群扩展到域外（InfiniBand 或 RoCE）。

---

## 卡片 5

**Q：256-GPU 集群（每节点 8 GPU）的 NIC 到 GPU 映射策略？**

A：每 GPU 分配一块专用 NIC，NIC 序号与 GPU 序号一致（1:1 映射）。消除集合操作期间的 NIC 争用。
