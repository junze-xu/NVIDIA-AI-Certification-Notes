---
id: chapter-11
title: "第 11 章：高级故障排除 — 速查表"
description: "NVLink/NVSwitch Fabric Manager、Magnum IO、存储性能、MIG 配置"
sidebar_position: 11
---

# 高级故障排除 — 速查表

## NVLink / NVSwitch Fabric Manager 故障排查

| 症状 | 原因 | 修复方法 |
|------|------|----------|
| 节点间 GPU 通信失败 | FM 服务未启动 | `systemctl restart nvidia-fabricmanager` |
| NVLink 链路降级 | 光纤/铜缆物理损伤 | 检查连接器 + 替换 |
| 多节点训练性能下降 | NVSwitch 路由配置错误 | `nvidia-smi nvlink --status` 检查链路 |

## Magnum IO 组件故障

| 组件 | 用途 | 典型错误 |
|------|------|----------|
| GPUDirect RDMA | GPU 内存直连 InfiniBand | `ibv_devinfo` 检查 HCA 端口状态 |
| GPUDirect Storage | GPU 内存直连 NVMe/并行FS | `gdsctl` 验证 GDS 内核模块 |
| UCX | 统一通信传输层 | UCX_IB_MLX5 找不到设备 |

**考试提示：** Magnum IO = NVIDIA 的RDMA + GDS + UCX 生态，解决 GPU↔网络/存储直连。

## 存储性能故障排查

| 问题 | 诊断命令 | 修复方法 |
|------|----------|----------|
| 训练 IO 瓶颈 | `iostat -x 1` | 迁移到 Lustre/WEKA 并行FS |
| NFS 延迟高 | `nfsiostat` | 检查 MTU 和 RDMA 配置 |
| BeeGFS 节点宕机 | `beegfs-ctl --listnodes` | 重启目标/存储服务 |

## MIG（多实例 GPU）配置

| 配置文件创建 | 命令 |
|-------------|------|
| GPU 实例配置文件 | `nvidia-smi mig -cgi 19,19 -C` |
| 计算实例分配 | `nvidia-smi mig -gi 0 -Ci 0` |
| 验证 | `nvidia-smi mig -lgi` |

**考试陷阱：** MIG 仅在 A100/H100 及以上支持；MIG 实例是**硬性隔离**（非共享）。

:::info 记忆锚点
NVLink故障→fabricmanager；Magnum IO=GDS+RDMA+UCX；MIG只支持安培+；并行FS解决IO瓶颈。
:::
