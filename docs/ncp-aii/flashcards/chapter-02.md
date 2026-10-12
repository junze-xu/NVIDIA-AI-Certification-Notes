---
id: chapter-02
title: "第 2 章：网络布线与管理 — 知识卡片"
description: "计算/存储/管理网络、InfiniBand、RoCE 知识卡片"
sidebar_position: 2
---

# 网络布线与管理 — 知识卡片

## 卡片 1

**Q：AI 集群的三类网络及其用途？**

A：计算网络（GPU 间通信：InfiniBand/RoCE）、存储网络（数据加载：NVMe-oF/Lustre）、管理网络（节点管理：GbE）。

---

## 卡片 2

**Q：InfiniBand vs RoCE 的关键区别？**

A：InfiniBand 延迟更低，适合 HPC 紧耦合。RoCE 兼容以太网，适合数据中心混合部署。

---

## 卡片 3

**Q：线缆类型的选择依据？**

A：DAC（机架内短距）、AOC（机架间中距）、光模块+光纤（长距）。
