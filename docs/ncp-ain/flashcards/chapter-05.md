---
id: chapter-05
title: "第 5 章：分区、QoS 与诊断工具 — 知识卡片"
description: "pkey 成员规则、IB QoS、诊断工具知识卡片"
sidebar_position: 5
---

# 分区、QoS 与诊断工具 — 知识卡片

## 卡片 1

**Q：两台 pkey 均为 LIMITED 成员的 VM 能否通信？**

A：不能。IB 规则：至少一方为 FULL 成员才能通信。无论 pkey 是否匹配，limited-limited 永远被阻止。

---

## 卡片 2

**Q：IB QoS 如何确保存储流量不被 MPI 计算流量阻塞？**

A：通过 SL2VL 映射：存储流量 SL → 独立 VL，计算流量 SL → 另一 VL。不同 VL 独立缓冲/仲裁，防止队头阻塞。

---

## 卡片 3

**Q：哪个工具执行全网一站式 fabric 健康扫描？**

A：`ibdiagnet`。综合链路诊断 + 路由检查 + PM 计数器阈值验证。`ibnetdiscover` 仅映射拓扑。

---

## 卡片 4

**Q：只想检查本地 HCA 端口链路状态，用哪个命令？**

A：`ibstat`。报告端口速率、宽度、逻辑/物理状态，无需全网 SMP 遍历。

---

## 卡片 5

**Q：16 位 pkey 中 bit 15 的作用？**

A：成员类型指示位：1 = FULL，0 = LIMITED。控制该分区的通信规则（full-full 和 full-limited 允许，limited-limited 阻止）。
