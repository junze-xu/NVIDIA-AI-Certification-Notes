---
id: chapter-03
title: "第 3 章实验：服务器架构与 GPU 互连"
description: "DGX 拓扑分析、带宽对比、互连决策实验"
sidebar_position: 3
---

# 实验：服务器架构与 GPU 互连

:::note 预计用时
18 分钟
:::

## 实验目标

- 理解 NVLink 与 PCIe 的带宽差异及其适用场景
- 看懂 nvidia-smi topo 输出
- 能根据带宽需求选择合适的互连方案

## 练习 1：带宽计算与换算

完成以下带宽对比表：

| 互连技术 | 单 GPU 带宽 | 相对 PCIe Gen4 的倍数 |
|----------|------------|----------------------|
| PCIe Gen3 x16 | ? | ? |
| PCIe Gen4 x16 | ? | ? |
| PCIe Gen5 x16 | ? | ? |
| A100 NVLink | ? | ? |
| H100 NVLink | ? | ? |

<details>
<summary>查看参考答案</summary>

| 互连技术 | 单 GPU 带宽 | 相对 PCIe Gen4 的倍数 |
|----------|------------|----------------------|
| PCIe Gen3 x16 | ~16 GB/s | 0.5× |
| PCIe Gen4 x16 | ~32 GB/s | 1×（基线） |
| PCIe Gen5 x16 | ~64 GB/s | 2× |
| A100 NVLink | 600 GB/s | ~18-20× |
| H100 NVLink | 900 GB/s | ~28× |

</details>

## 练习 2：拓扑输出解读

以下是 `nvidia-smi topo -m` 的简化输出：

```
    GPU0  GPU1  GPU2  GPU3  CPU Affinity
GPU0  X     NV12  NV12  PHB   0-31
GPU1  NV12  X     PHB   NV12  0-31
GPU2  NV12  PHB   X     NV12  32-63
GPU3  PHB   NV12  NV12  X     32-63
```

请回答：

1. GPU0 和 GPU1 之间的通信走什么路径？带宽大约是多少？
2. GPU0 和 GPU3 之间的通信走什么路径？带宽大约是多少？
3. 这个系统可能是 DGX 还是独立 PCIe 服务器？

<details>
<summary>查看参考答案</summary>

1. GPU0-GPU1：NV12（12 条 NVLink），约 600 GB/s —— A100 系统
2. GPU0-GPU3：PHB（PCIe Host Bridge），约 32 GB/s —— 经过 CPU 的慢速路径
3. 部分 NVLink 直连 + 部分 PCIe → 这更像 HGX 4-GPU 底板（非全连接 NVSwitch 拓扑）

</details>

## 练习 3：系统选型决策

为以下场景选择合适的平台（DGX A100、DGX H100、HGX 8-GPU、HGX 4-GPU、独立 PCIe GPU）：

| 场景 | 平台选择 | 原因 |
|------|----------|------|
| 8 卡 LLM 训练，需要全连接拓扑 | | |
| 单卡推理 + 成本敏感 | | |
| 4 卡中等规模训练 | | |
| 交钥匙方案，无需 OEM 集成 | | |

<details>
<summary>查看参考答案</summary>

| 场景 | 平台选择 | 原因 |
|------|----------|------|
| 8 卡 LLM 全连接训练 | DGX H100 或 HGX 8-GPU | NVSwitch 全连接，900 GB/s |
| 单卡推理成本敏感 | 独立 PCIe GPU | 不需要高速互连 |
| 4 卡中等训练 | HGX 4-GPU | NVLink mesh，比 DGX 便宜 |
| 无需 OEM 集成 | DGX 系统 | 出厂验证、交钥匙 |

</details>

## 练习 4：NVSwitch 芯片数量对比

DGX A100 和 DGX H100 都使用 8 块 GPU，但 NVSwitch 数量不同：

| 系统 | GPU 数量 | NVSwitch 芯片 | 二分带宽 | 单 GPU 带宽 |
|------|----------|--------------|----------|------------|
| DGX A100 | 8 × A100 | ? | ? | ? |
| DGX H100 | 8 × H100 | ? | ? | ? |

<details>
<summary>查看参考答案</summary>

| 系统 | GPU 数量 | NVSwitch 芯片 | 二分带宽 | 单 GPU 带宽 |
|------|----------|--------------|----------|------------|
| DGX A100 | 8 × A100 | 6 | 4.8 TB/s | 600 GB/s |
| DGX H100 | 8 × H100 | 18 | 7.2 TB/s | 900 GB/s |

</details>

:::note
H100 的 NVSwitch 数量是 A100 的 3 倍（18 vs 6），所以能提供更高的单 GPU 和总带宽。
:::

## 关键要点

:::info 本章记忆锚点
NVLink 连接 GPU 对、NVSwitch 创建全连接网络拓扑、PCIe 是性能瓶颈。DGX 使用 NVSwitch 实现最大训练带宽。
:::
