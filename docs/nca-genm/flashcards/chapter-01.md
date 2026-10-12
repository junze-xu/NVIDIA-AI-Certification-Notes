---
id: chapter-01
title: "第 1 章：神经网络与 Transformer 基础 — 知识卡片"
description: "自注意力、多头注意力、位置编码知识卡片"
sidebar_position: 1
---

# 神经网络与 Transformer 基础 — 知识卡片

## 卡片 1

**Q：注意力计算中缩放因子 sqrt(d_k) 的作用？**

A：防止点积过大导致 softmax 饱和 → 梯度消失。不缩放是大忌。

---

## 卡片 2

**Q：RoPE 位置编码相比正弦编码的优势？**

A：RoPE（相对位置编码）可外推到未见序列长度，正弦绝对编码不可。

---

## 卡片 3

**Q：Encoder-only、Decoder-only、Encoder-Decoder 的选择？**

A：
- 分类/嵌入 → Encoder-only（BERT）
- 文本生成 → Decoder-only（GPT）
- 翻译/摘要 → Encoder-Decoder（T5）

---

## 卡片 4

**Q：多头注意力的维度计算？**

A：每个头 d_k = d_model ÷ num_heads。例：768 ÷ 12 = 64 维。

---

## 卡片 5

**Q：推理时 Dropout 的状态？**

A：关闭（rate = 0）。所有神经元激活。考试常考。
