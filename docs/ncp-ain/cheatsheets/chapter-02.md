---
id: chapter-02
title: "第 2 章：网络分离、容量规划与 IB vs Spectrum-X — 速查表"
description: "三网分离、对分带宽、InfiniBand vs Spectrum-X 选型"
sidebar_position: 2
---

# 网络分离、容量规划与 IB vs Spectrum-X — 速查表

## 三网分离原则

| 网络 | 流量类型 | 典型协议 | 隔离原因 |
|------|----------|----------|----------|
| 计算网络（后端） | GPU 集合通信 | NCCL all-reduce | 突发大流量，需无阻塞 |
| 存储网络 | 检查点、数据加载 | NVMe-oF RDMA | 保障存储吞吐 |
| 管理网络 | SSH、监控、调度 | TCP/IP | 防止拥塞时失联 |

## 对分带宽计算

| 参数 | 公式 |
|------|------|
| 端点总带宽 | 节点数 × 每节点 NIC 带宽 |
| 无阻塞对分带宽 | 端点总带宽 ÷ 2 |
| 示例 | 400 节点 × 400Gb/s = 160Tb/s → 对分 80Tb/s |

## InfiniBand vs Spectrum-X 选型

| 维度 | InfiniBand | Spectrum-X |
|------|------------|------------|
| RDMA 实现 | 原生 RDMA | RoCEv2 |
| 网内计算 | SHARP（网内归约） | 无等效特性 |
| 延迟 | 最低 | 接近 IB |
| 多租户 | pkey 分区 | VXLAN/EVPN overlay |
| 运维要求 | 需子网管理器 | 标准以太网技能 |
| 适用场景 | 单租户超算、极致性能 | 多租户云服务、以太网生态 |

## 选型决策树

- 需要 SHARP 网内归约 → **InfiniBand**
- 多租户 + 以太网团队 → **Spectrum-X**
- 存储需 RDMA → **NVMe-oF over RDMA（RoCEv2 或 IB）**
