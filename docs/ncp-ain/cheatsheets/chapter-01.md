---
id: chapter-01
title: "第 1 章：Rail-Optimized 与 Fat-Tree 拓扑 — 速查表"
description: "rail-optimized 设计、fat-tree Clos、scale-up vs scale-out"
sidebar_position: 1
---

# Rail-Optimized 与 Fat-Tree 拓扑 — 速查表

## 核心拓扑对比

| 拓扑 | 特征 | 适用场景 |
|------|------|----------|
| Fat-Tree（折叠 Clos） | leaf-spine 多层，多条等价路径 | AI 后端网络标准架构 |
| Rail-Optimized | 每 GPU/NIC 序号映射到专属 leaf 交换机 | 每节点 8 GPU 的集群 |
| 环形 | 相邻节点点对点连接 | NCCL 算法（非物理拓扑） |
| 星形 | 单台中心交换机 | 不适用（瓶颈+无冗余） |

## Rail-optimized 设计规则

| 规则 | 说明 |
|------|------|
| 1:1 GPU 到 NIC 映射 | 每 GPU 拥有专用 NIC，无共享 |
| 同序号 NIC 连同一 leaf | 所有节点的 NIC 0 → leaf 0，NIC 1 → leaf 1 |
| 最小 leaf 数量 | 每节点 8 GPU = 8 台 rail 交换机 |
| 超订比 1:1 | 后端训练网络必须无阻塞 |

## Scale-up vs Scale-out

| 维度 | Scale-up | Scale-out |
|------|----------|-----------|
| 互连技术 | NVLink（NVDOM 内） | InfiniBand / RoCE |
| 范围 | 单机/单域（如 NVL72 = 72 GPU） | 跨机架/跨域 |
| 带宽 | 极高（NVLink 900GB/s） | 高（400GbE/IB NDR） |
| 用途 | 张量并行、节点内 GPU 通信 | 数据并行、跨节点集合操作 |
