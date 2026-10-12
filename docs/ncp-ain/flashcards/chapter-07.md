---
id: chapter-07
title: "第 7 章：RoCEv2 与无损以太网调优 — 知识卡片"
description: "RoCEv2、PFC、ECN、DCQCN 知识卡片"
sidebar_position: 7
---

# RoCEv2 与无损以太网调优 — 知识卡片

## 卡片 1

**Q：RoCEv2 使用哪个 UDP 目的端口？**

A：4791。IBTA 定义的 RoCEv2 标准端口。源端口按流变化为 ECMP 提供熵。

---

## 卡片 2

**Q：RoCEv2 跨子网路由依赖什么封装特性？**

A：RDMA 传输头封装在 UDP/IP 内。UDP/IP 是 L3 可路由封装，允许 RDMA 流量穿越跨子网 ECMP 路由 fabric。RoCEv1 无法跨 L2 域路由。

---

## 卡片 3

**Q：PFC 如何只暂停 RDMA 流量而不影响 TCP？**

A：PFC（802.1Qbb）按 3 位 PCP 值标识单个优先级队列。只有承载无损 RoCEv2 流量的队列被暂停，其他优先级在同一链路上继续流动。

---

## 卡片 4

**Q：ECN 码点 CE（拥塞经历）的二进制值是什么？**

A：11。交换机在队列超阈值时将 ECT 标记改写为 11，向接收方发送拥塞信号。ECT(0)=01 和 ECT(1)=10 仅表示支持 ECN。

---

## 卡片 5

**Q：DCQCN 中哪个组件响应 CNP 降低发送速率？**

A：反应点（RP）— 位于发送方 NIC。交换机（CP）标记报文，接收方（NP）生成 CNP，发送方（RP）降速闭合控制环路。
