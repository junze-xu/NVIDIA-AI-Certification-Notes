---
id: chapter-04
title: "第 4 章：自适应路由与 SHARP — 速查表"
description: "自适应路由、SHARP 网内归约、静态路由"
sidebar_position: 4
---

# 自适应路由与 SHARP — 速查表

## 路由方法对比

| 路由方法 | 特征 | 适用场景 |
|----------|------|----------|
| 静态路由 | 固定 LFT 表项，不随拥塞变化 | 小型开发集群 |
| 自适应路由（AR） | 基于实时端口负载动态选路 | 大规模并发训练 |
| ECMP 哈希 | 按五元组固定路径（以太网） | 以太网 fabric |

## SHARP 网内归约

| 要素 | 说明 |
|------|------|
| 功能 | 在交换机 ASIC 内执行集合归约（如 all-reduce 求和） |
| 硬件要求 | NVIDIA Quantum InfiniBand 交换机 |
| 管理平台 | UFM 的 SHARP Aggregation Manager（SAM） |
| 资源预留 | SHARP 聚合树（SAT）— 必须为作业预留 |
| 回退条件 | 无 SAT → NCCL 静默回退到 ring/tree 算法 |

## AR 前提条件

| 条件 | 必要性 |
|------|--------|
| 多条等价路径 | 必需（fat-tree 提供） |
| 路径多样性 | 单交换机/单路径拓扑收益极小 |
| UFM 管理 | 集中配置 AR 和 SHARP |

## AR/SHARP 适用场景判断

| 场景 | 建议 |
|------|------|
| 大规模 + 并发作业 + 拥塞 | **启用 AR + SHARP** |
| 小型开发集群（16 节点） | **无需启用**（运维开销 > 收益） |
| NVLink 节点内通信 | **不影响**（SHARP 仅作用于 IB 网络） |
