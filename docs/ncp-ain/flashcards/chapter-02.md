---
id: chapter-02
title: "第 2 章：网络分离、容量规划与 IB vs Spectrum-X — 知识卡片"
description: "三网分离、对分带宽、IB vs Spectrum-X 知识卡片"
sidebar_position: 2
---

# 网络分离、容量规划与 IB vs Spectrum-X — 知识卡片

## 卡片 1

**Q：AI 数据中心为什么要将计算/存储/管理三网分离？**

A：防止坏邻居干扰：突发 all-reduce 大流量可能饿死存储 I/O 或管理心跳，后台流量又可能引入抖动恶化集合延迟。隔离保障每类流量的可预测性能。

---

## 卡片 2

**Q：400 节点 × 400Gb/s NIC 集群的无阻塞对分带宽？**

A：80 Tb/s。计算：400 × 400Gb/s = 160 Tb/s 端点总带宽 → 对分带宽 = 160 ÷ 2 = 80 Tb/s。

---

## 卡片 3

**Q：什么场景应选 InfiniBand 而非 Spectrum-X？**

A：需要 SHARP 网内归约卸载 all-reduce、单租户极致性能超算、团队已有子网管理经验。SHARP 仅在 InfiniBand 上提供。

---

## 卡片 4

**Q：什么场景应选 Spectrum-X 而非 InfiniBand？**

A：多租户云服务、团队仅熟悉以太网技能、需要 VXLAN/EVPN overlay 隔离。Spectrum-X 在标准以太网上提供接近 IB 的 AI 性能。

---

## 卡片 5

**Q：计算拥塞期间失去对 leaf 交换机的 SSH 访问说明什么问题？**

A：管理流量带内传输（与计算网络共享）。应使用独立带外网络（专用 NIC/交换机），保障无论计算流量状态如何都可达。
