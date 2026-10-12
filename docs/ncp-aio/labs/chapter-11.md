---
id: chapter-11
title: "第 11 章实验：高级故障排除"
description: "NVLink/Magnum IO/存储/MIG 故障排查实验"
sidebar_position: 11
---

# 实验：高级故障排除

:::note 预计用时 25 分钟 :::

## 实验目标

- 排查 NVLink/Fabric Manager 故障
- 验证 Magnum IO GPUDirect 组件
- 配置 MIG 实例

## 练习 1：NVLink 链路诊断

```bash
# 1. 检查 FM 服务
systemctl status nvidia-fabricmanager

# 2. 查看 NVLink 链路状态
nvidia-smi nvlink --status

# 3. 如果链路降级，查看错误计数
nvidia-smi nvlink --error_counts

# 4. 修复：重启 FM
systemctl restart nvidia-fabricmanager
```

## 练习 2：Magnum IO GPUDirect 验证

```bash
# 1. 验证 RDMA 设备
ibv_devinfo | grep -E "hca_id|port_state"

# 2. 验证 GDS 内核模块
lsmod | grep nvidia_fs

# 3. 验证 UCX
ucx_info -d | grep -i mlx5
```

## 练习 3：MIG 实例配置

```bash
# 1. 启用 MIG 模式
nvidia-smi -mig 1

# 2. 创建 GPU 实例（2x 3g.40gb）
nvidia-smi mig -cgi 19,19 -C

# 3. 验证
nvidia-smi mig -lgi

# 4. 创建计算实例
nvidia-smi mig -gi 0 -Ci 0
```

## 关键要点

:::info 本章记忆锚点
FM 服务 = NVLink 链路；Magnum IO = RDMA + GDS + UCX；MIG = nvidia-smi mig -cgi。
:::
