---
id: chapter-02
title: "第 2 章：Transformer 架构与 LLM — 知识卡片"
description: "自注意力、多头注意力、位置编码知识卡片"
sidebar_position: 2
---

# Transformer 架构与 LLM — 知识卡片

## 卡片 1

**Q：注意力计算中为什么要除以 sqrt(d_k)？**

A：防止点积过大导致 softmax 饱和。不缩放上层的梯度会消失。

---

## 卡片 2

**Q：多头注意力的维度如何计算？**

A：每个头维度 = embedding_dim ÷ num_heads。例：12 头 × 64 维 = 768 维嵌入。

---

## 卡片 3

**Q：Encoder-only、Decoder-only、Encoder-Decoder 各自适合什么任务？**

A：
- Encoder-only（BERT）：分类、NER、句子任务
- Decoder-only（GPT）：文本生成
- Encoder-Decoder（T5）：翻译、摘要

---

## 卡片 4

**Q：为什么需要位置编码？**

A：没有它，自注意力是置换不变的（顺序无关）。位置编码注入 token 的序列位置信息。

---

## 卡片 5

**Q：注意力计算的三个矩阵 Q、K、V 分别代表什么？**

A：
- Q（query）：token 在寻找什么
- K（key）：token 提供的内容
- V（value）：要检索的实际内容
