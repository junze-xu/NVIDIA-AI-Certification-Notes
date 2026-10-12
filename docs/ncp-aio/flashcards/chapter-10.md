---
id: chapter-10
title: "第 10 章：Mission Control 与 DOCA — 知识卡片"
description: "Mission Control、DOCA 部署知识卡片"
sidebar_position: 10
---

# 第 10 章：Mission Control 与 DOCA — 知识卡片

## 卡片 1

**Q：Mission Control 与 BCM 的关系？**

A：Mission Control 是 BCM 之上的编排层，提供 Day 0/1/2 集群生命周期自动化。考试：Mission Control = 上层编排；BCM = 节点/调度器管理。

---

## 卡片 2

**Q：DOCA 服务部署在哪里？**

A：DPU BlueField ARM 核心上（非 x86 主机）。考试陷阱：DOCA 是 DPU 上的服务框架，不跑在主机 CPU。

---

## 卡片 3

**Q：BCM 如何批量同步软件镜像？**

A：`bcm image create` 创建镜像 → `bcm node-group set --image` 应用到节点组 → `bcm sync` 同步生效。考试：同步 = bcm sync。

