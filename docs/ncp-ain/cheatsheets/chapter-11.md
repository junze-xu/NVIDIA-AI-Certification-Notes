---
id: chapter-11
title: "第 11 章：拥塞诊断、RDMA 验证与 K8s 集成 — 速查表"
description: "GPUDirect RDMA、perftest、K8s RDMA Operator"
sidebar_position: 11
---

# 拥塞诊断、RDMA 验证与 K8s 集成 — 速查表

## GPUDirect RDMA 故障排查

| 现象 | 原因 | 解决 |
|------|------|------|
| `--use_cuda` 时吞吐量骤降 | PCIe ACS 启用，P2P 经 root complex | 禁用 ACS |
| 无物理错误的 ECN CE 标记 | 拥塞（DCQCN 标记） | 调优限速器/缓冲阈值 |

## IB perftest 工具

| 工具 | 操作类型 |
|------|----------|
| ib_write_bw | 单边 RDMA WRITE 带宽 |
| ib_read_bw | 单边 RDMA READ 带宽 |
| ib_send_bw | 双边 SEND/RECEIVE 带宽 |
| ib_atomic_bw | 原子操作吞吐量 |

## GPUDirect 测试标志

| 标志 | 说明 |
|------|------|
| `--use_cuda=<gpu_id>` | 将 RDMA 缓冲区分配到指定 GPU 内存 |

## K8s RDMA 机制

| 机制 | 说明 |
|------|------|
| SR-IOV VF | 通过 SR-IOV device plugin 分配独占 VF |
| RDMA shared device plugin | 多 pod 共享同一 PF（非隔离） |
| Macvlan | 仅 L2 隔离，无硬件 RDMA 隔离 |
| hostNetwork | 无 per-pod 隔离 |

## K8s CRD 对照

| CRD | 用途 |
|-----|------|
| NicClusterPolicy | NIC 驱动、RDMA 子系统、device plugin 编排 |
| SriovNetworkNodePolicy | 指定节点 NIC 上 VF 数量 |
| NetworkAttachmentDefinition | Multus 二级网络定义 |

## UFM vs WJH 遥测

| 维度 | UFM | WJH |
|------|-----|-----|
| 范围 | 全网 InfiniBand 健康/拥塞 | 单交换机逐报文丢弃原因 |
| 角色 | 集中式 fabric 管理 | 实时流式诊断 |
| 关系 | 互补，非替代 |
