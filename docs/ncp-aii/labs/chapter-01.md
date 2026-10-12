---
id: chapter-01
title: "第 1 章实验：DGX 硬件与开机"
description: "DGX 硬件检查、nvidia-smi 使用、开机验证实验"
sidebar_position: 1
---

# 实验：DGX 硬件与开机

:::note 预计用时
15 分钟
:::

## 实验目标

- 掌握 DGX 硬件规格
- 使用 nvidia-smi 验证 GPU 状态
- 理解开机前 BMC 健康检查

## 练习 1：GPU 状态验证

```bash
nvidia-smi
# 查看 GPU 数量、显存、温度、功耗、驱动版本
```

:::tip
nvidia-smi 需要 OS + 驱动运行。开机前用 BMC/Redfish/IPMI。
:::

## 练习 2：NVLink 状态

```bash
nvidia-smi nvlink --status
# 查看 NVLink 连接和带宽
```

## 关键要点

:::info 本章记忆锚点
DGX H100: 8×80GB=640GB。H200: 8×141GB=1128GB。每 GPU 900GB/s NVLink。功耗 10.2kW。
:::
