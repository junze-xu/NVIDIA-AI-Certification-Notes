---
id: chapter-04
title: "第 4 章实验：GPU 配置与驱动"
description: "驱动安装、MIG 配置、nvidia-smi 实验"
sidebar_position: 4
---

# 实验：GPU 配置与驱动

:::note 预计用时
12 分钟
:::

## 实验目标

- 安装 NVIDIA 驱动
- 配置 MIG 实例
- 使用 nvidia-smi 监控

## 练习 1：驱动安装

```bash
sudo apt update
sudo apt install nvidia-driver-535
sudo reboot
nvidia-smi  # 验证
```

## 练习 2：MIG 配置

```bash
# 启用 MIG 模式
sudo nvidia-smi -mig 1
# 创建 GPU 实例
sudo nvidia-smi gi -cgi 19,19,19,19,19,19,19
```

:::tip
MIG 将单 GPU 分最多 7 个隔离实例。适用推理密度提升。
:::

## 关键要点

:::info 本章记忆锚点
MIG = 多实例 GPU（最多 7 个）。nvidia-smi 需 OS+驱动。SR-IOV 用于虚拟化。
:::
