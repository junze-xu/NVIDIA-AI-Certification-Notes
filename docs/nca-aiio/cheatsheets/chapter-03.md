---
id: chapter-03
title: "第 3 章：服务器架构与 GPU 互连"
description: "PCIe、NVLink、DGX 系统、HGX 平台、GPU 互连拓扑速查表"
sidebar_position: 3
---

# GPU 服务器架构速查

## PCIe 各代带宽对照

| 代际 | x16 单向带宽 | 适用场景 |
|------|-------------|----------|
| PCIe Gen3 | ~16 GB/s | 老旧服务器，GPU 间通信需求低 |
| PCIe Gen4 | ~32 GB/s | 当前主流，一般数据流工作负载 |
| PCIe Gen5 | ~64 GB/s | 最新服务器，但仍远不及 NVLink |

:::note
PCIe 每一代带宽翻倍，但即便是 Gen5 也只有 NVLink 的约 1/10。
:::

## NVLink 与平台规格

| 平台 | 单 GPU 互连带宽 | NVLink 通道数 |
|------|-----------------|---------------|
| A100 NVLink | 600 GB/s 双向 | 12 条 |
| H100 NVLink | 900 GB/s 双向 | 18 条 |

:::tip 记忆法
NVLink 相对 PCIe Gen4 快约 18-28 倍，是分布式训练不可或缺的互连技术。
:::

## DGX 系统 vs HGX 平台

| 系统 | GPU 数量 | NVSwitch 芯片数 | 二分带宽 | 单 GPU 带宽 |
|------|----------|----------------|----------|------------|
| DGX A100 | 8 × A100 | 6 | 4.8 TB/s | 600 GB/s |
| DGX H100 | 8 × H100 | 18 | 7.2 TB/s | 900 GB/s |

:::caution 关键区分
- **DGX** = NVIDIA 出厂的完整系统（交钥匙方案）
- **HGX** = 提供给 OEM 厂商的底板组件（需 OEM 集成整机）
- H100 的 NVSwitch 数量是 A100 的 3 倍
:::

## GPU 互连代码速查

`nvidia-smi topo -m` 输出中的互连代码含义：

| 代码 | 含义 | 带宽级别 |
|------|------|----------|
| NV#（如 NV12） | # 条 NVLink 通道 | 高速：600-900 GB/s |
| PHB | PCIe Host Bridge | 中速：~32 GB/s（经过 CPU） |
| SYS | 系统级连接 | 低速：多跳路径 |

:::tip
NV12 = 12 条通道 = A100 拓扑。数字越大直接通道越多。PHB 意味着 PCIe 瓶颈。
:::

## 场景与平台匹配

| 需求 | 推荐方案 | 原因 |
|------|----------|------|
| GPU 间带宽 >400 GB/s | HGX 或 DGX（带 NVLink） | PCIe 最高仅 ~64 GB/s |
| 8 卡分布式训练 | DGX 或 HGX 8-GPU | NVSwitch 提供全连接拓扑 |
| 多租户推理（隔离优先） | HGX 4-GPU 或独立 PCIe GPU | 不需要高带宽互连 |
| 4 卡训练预算敏感 | HGX 4-GPU 底板 | NVLink mesh，比 DGX 便宜 |
| 快速部署、无需集成 | DGX 系统 | 出厂验证 + 技术支持 |

## 常见陷阱汇编

1. **PCIe Gen5 不是 NVLink 的替代品**：Gen5 x16 ≈ 64 GB/s，A100 NVLink 600 GB/s → 差 9 倍以上
2. **单独一块 H100 不支持 NVLink**：必须搭配带 NVSwitch 的 HGX 底板
3. **DGX A100 二分带宽 = 4.8 TB/s**，不是 7.2 TB/s（后者是 H100）
4. **HGX ≠ DGX**：HGX 是组件，DGX 是整机
5. **nvidia-smi topo** 中 PHB 代表 PCIe 桥接（慢），NV## 代表 NVLink（快）

## 快速计算公式

- **PCIe 带宽**：Gen 数 × 2 GB/s/通道 × 16 通道（例：Gen4 = 4×2×16 ≈ 32 GB/s）
- **二分带宽**：GPU 数量 × 单 GPU 带宽（例：8 × 600 = 4.8 TB/s）
- **带宽比**：NVLink / PCIe Gen4 ≈ 600/32 ≈ 快 18-20 倍
