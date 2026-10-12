---
id: chapter-10
title: "第 10 章：Fabric 安全与零信任 — 知识卡片"
description: "pkey 隔离、DOCA 安全能力、零信任知识卡片"
sidebar_position: 10
---

# Fabric 安全与零信任 — 知识卡片

## 卡片 1

**Q：pkey 在 InfiniBand 多租户中的核心安全作用？**

A：硬性 fabric 级逻辑隔离。无共享 pkey 的主机无法建立 QP 或交换流量。与路由无关，由 HCA+交换机同时强制。

---

## 卡片 2

**Q：BlueField DPU + DOCA Flow 如何执行零信任策略？**

A：DPU 位于主机与网络之间数据路径，使用 DOCA Flow 以线速执行 ACL + 有状态检查，从主机 CPU 卸载。

---

## 卡片 3

**Q：为什么主机在默认 pkey 0x7FFF 上保持 FULL 会破坏租户隔离？**

A：所有 fabric 成员保留默认 pkey。若为 FULL，主机能在预期租户分区外发送/接收广播流量，导致跨租户泄漏。

---

## 卡片 4

**Q：DOCA App Shield 提供什么安全能力？**

A：无代理 DPU 主机内省与威胁检测。从 DPU 监控主机内存/进程，主机被攻陷也不影响安全监控。

---

## 卡片 5

**Q：BlueField DPU 上硬件线速加密东西向流量的 DOCA 能力？**

A：DOCA IPsec。卸载加密/解密到专用硬件引擎，满足加密合规要求同时避免软件 IPsec 的 CPU/延迟开销。
