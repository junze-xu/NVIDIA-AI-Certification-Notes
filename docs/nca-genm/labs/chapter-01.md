---
id: chapter-01
title: "第 1 章实验：Transformer 架构"
description: "自注意力计算、多头注意力、位置编码实验"
sidebar_position: 1
---

# 实验：Transformer 架构

:::note 预计用时
18 分钟
:::

## 实验目标

- 理解 QKV 矩阵计算
- 掌握多头注意力维度
- 区分架构模式

## 练习 1：注意力计算

```python
import torch
import torch.nn.functional as F

d_k = 64
Q = torch.randn(1, 10, d_k)
K = torch.randn(1, 10, d_k)
V = torch.randn(1, 10, d_k)

scores = torch.matmul(Q, K.transpose(-2, -1)) / (d_k ** 0.5)
attention = F.softmax(scores, dim=-1)
output = torch.matmul(attention, V)
```

:::caution
不除以 sqrt(d_k) → softmax 饱和 → 梯度消失。
:::

## 练习 2：架构匹配

| 任务 | 架构 |
|------|------|
| 文本分类 | Encoder-only |
| 文本生成 | Decoder-only |
| 翻译 | Encoder-Decoder |

## 关键要点

:::info 本章记忆锚点
注意力必须缩放。RoPE 可外推。Encoder-only 做分类，Decoder-only 做生成。
:::
