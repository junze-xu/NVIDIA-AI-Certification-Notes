---
id: chapter-02
title: "第 2 章：网络布线与管理 — 速查表"
description: "计算网络、存储网络、管理网络、InfiniBand、RoCE"
sidebar_position: 2
---

# 网络布线与管理 — 速查表

## 三类网络

| 网络 | 用途 | 典型技术 |
|------|------|----------|
| 计算网络 | GPU 间通信、MPI | InfiniBand、RoCE |
| 存储网络 | 数据加载 | NVMe-oF、Lustre、NFS |
| 管理网络 | 节点管理 | 1GbE/10GbE |

---

## InfiniBand vs RoCE

| 特性 | InfiniBand | RoCE |
|------|-----------|------|
| 延迟 | 更低 | 稍高 |
| 带宽 | NDR 400Gbps | 兼容以太网 |
| 适用 | HPC、紧耦合 | 数据中心、混合 |
| 网桥 | 不需要 | 需要 PFC/ECN |

---

## 线缆类型

| 类型 | 用途 |
|------|------|
| DAC（直连铜缆） | 机架内短距 |
| AOC（有源光缆） | 机架间中距 |
| 光模块 + 光纤 | 长距 |
