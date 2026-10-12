---
id: chapter-02
title: "第 2 章实验：Transformer 架构"
description: "自注意力计算、多头注意力、位置编码实验"
sidebar_position: 2
---

# 实验：Transformer 架构

:::note 预计用时
18 分钟
:::

## 实验目标

- 理解 QKV 矩阵的计算
- 掌握多头注意力的维度计算
- 能区分三种架构模式

## 练习 1：注意力计算

```python
import torch
import torch.nn.functional as F

d_k = 64
Q = torch.randn(1, 10, d_k)  # batch, seq_len, d_k
K = torch.randn(1, 10, d_k)
V = torch.randn(1, 10, d_k)

# 注意力 = softmax(QK^T / sqrt(d_k)) × V
scores = torch.matmul(Q, K.transpose(-2, -1)) / (d_k ** 0.5)
attention = F.softmax(scores, dim=-1)
output = torch.matmul(attention, V)
```

:::caution
不除以 sqrt(d_k) → 点积过大 → softmax 饱和 → 梯度消失。
:::

## 练习 2：多头注意力维度

```python
embedding_dim = 768
num_heads = 12
head_dim = embedding_dim // num_heads  # 64
print(f"每个头 {head_dim} 维 × {num_heads} 头 = {embedding_dim}")
```

## 练习 3：架构模式匹配

| 任务 | 正确架构 |
|------|----------|
| 文本分类 | Encoder-only（BERT） |
| 文本生成 | Decoder-only（GPT） |
| 翻译 | Encoder-Decoder（T5） |

## 关键要点

:::info 本章记忆锚点
注意力必须缩放。Encoder-only 做分类，Decoder-only 做生成，Encoder-Decoder 做翻译/摘要。
:::
