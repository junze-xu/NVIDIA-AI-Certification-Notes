---
id: chapter-01
title: "第 1 章实验：注意力机制变体选型"
description: "GQA/MQA/MHA 对比、FlashAttention 原理 动手实验"
sidebar_position: 1
---

# 实验：注意力机制变体选型

:::note 预计用时 20 分钟 :::

## 实验目标
- 选择正确的注意力变体（GQA/MQA/MHA）
- 理解 FlashAttention 的数学精确性
- 区分外推能力不同的位置编码

## 练习 1：注意力变体选择
| 场景 | 最佳选择 | 理由 |
|------|----------|------|
| 70B 实时聊天，内存受限 | GQA | KV 缓存缩减 4-8 倍，保质量 |
| 最高吞吐推理，可容忍质量损失 | MQA | 单 KV 头，缓存最小 |
| 小规模高质量编码器 | MHA | 全 KV 头 |

## 练习 2：KV 缓存计算
32 查询头 + 组大小 4 的 GQA → KV 头数 = 32/4 = 8 → 缓存为 MHA 的 1/4

## 练习 3：位置编码外推
| 编码方式 | 可外推？ |
|----------|----------|
| 可学习绝对嵌入 | 否 |
| ALiBi | 是 |
| RoPE + 高 theta | 是 |

:::info 记忆锚点
GQA=分组共享；FlashAttention=精确IO感知；ALiBi=最佳外推
:::
