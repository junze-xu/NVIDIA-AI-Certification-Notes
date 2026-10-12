---
id: chapter-06
title: "第 6 章：Spectrum-X 架构 — 知识卡片"
description: "Spectrum-X 组件、BlueField DPU、DOCA 知识卡片"
sidebar_position: 6
---

# Spectrum-X 架构 — 知识卡片

## 卡片 1

**Q：Spectrum-X 技术栈的核心组件组合？**

A：Spectrum 交换机 ASIC + BlueField DPU + DOCA 框架 + 基于遥测的自适应路由/拥塞控制。标准 NIC 缺少 RoCE 卸载和遥测集成。

---

## 卡片 2

**Q：BlueField DPU 在 Spectrum-X 中的角色？**

A：充当 RoCE 传输端点——处理乱序报文重组、拥塞响应、遥测上报。从主机 CPU 卸载这些功能。

---

## 卡片 3

**Q：DOCA 框架的主要作用？**

A：运行在 BlueField DPU 上的软件框架，提供用于卸载网络/安全/遥测服务的 SDK API。不是物理层标准，也不替代 RoCEv2。

---

## 卡片 4

**Q：自适应路由 + BlueField DPU 乱序处理为何关键？**

A：AR 将报文喷洒到多条路径避免热点，但可能导致乱序；BlueField DPU 在传输层重新排序，使应用看到可靠有序的 RDMA 投递。

---

## 卡片 5

**Q：Spectrum-X800 平台基于哪一代 Spectrum ASIC？**

A：Spectrum-4。提供 800GbE 端口速率和更高交换容量，用于最大规模 AI 集群。Spectrum-3 是 X400 的基础。
