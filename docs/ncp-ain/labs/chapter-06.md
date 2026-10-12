---
id: chapter-06
title: "第 6 章实验：Spectrum-X 架构部署"
description: "Spectrum-X 组件、BlueField DPU 角色、DOCA 框架实验"
sidebar_position: 6
---

# 实验：Spectrum-X 架构部署

:::note 预计用时
20 分钟
:::

## 实验目标

- 识别 Spectrum-X 核心组件
- 理解 BlueField DPU 的卸载角色
- 区分 DOCA/NVUE/UFM 框架定位

## 练习 1：组件匹配

| 描述 | 组件 |
|------|------|
| 提供 800GbE 端口速率的交换芯片 | Spectrum-4 ASIC |
| RoCE 端点 + 乱序重组 + 遥测 | BlueField-3 DPU |
| DPU 上开发卸载服务的 SDK | DOCA 框架 |
| 声明式交换机配置模型 | NVUE |

## 练习 2：Spectrum-X vs 通用以太网

| 特征 | Spectrum-X | 通用以太网 |
|------|------------|------------|
| 自适应路由 | ✓ 遥测驱动 | ✗（仅静态 ECMP） |
| DPU 传输卸载 | ✓ BlueField | ✗ |
| 乱序报文处理 | ✓ DPU 完成 | ✗ |
| 实时拥塞遥测 | ✓ | ✗ |

## 练习 3：自适应路由与乱序问题

```text
发送方 → [路径 A] → 接收方（先到）
发送方 → [路径 B] → 接收方（后到）
         ↓
    BlueField DPU 重新排序 → 应用看到有序投递
```

## 关键要点

:::info 本章记忆锚点
Spectrum-X = Spectrum ASIC + BlueField DPU + DOCA + 遥测驱动 AR。AR 喷洒 → DPU 排序。
:::
