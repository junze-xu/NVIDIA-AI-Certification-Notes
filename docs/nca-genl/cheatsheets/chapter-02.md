---
id: chapter-02
title: "第 2 章：Transformer 架构与 LLM — 速查表"
description: "自注意力、多头注意力、位置编码、架构模式"
sidebar_position: 2
---

# Transformer 架构与 LLM — 速查表

## 核心架构组件

| 组件 | 用途 | 考试陷阱 |
|------|------|----------|
| 自注意力 | 计算序列中 token 对之间的关系 | 不除以 sqrt(d_k) 缩放，softmax 会饱和 |
| 多头注意力 | 不同学习模式的并行注意力 | 每个头维度 = embedding_dim ÷ num_heads |
| 位置编码 | 注入序列顺序信息 | 没有它是置换不变的 |
| 前馈网络 | 对每个 token 独立施加非线性 | 通常比嵌入维度大 4× |

## 注意力数学

```
Attention(Q, K, V) = softmax(QK^T / sqrt(d_k)) × V
```

- **Q（query）**：token 在寻找什么
- **K（key）**：token 提供的内容
- **V（value）**：要检索的实际内容
- **d_k**：key 维度（必须缩放防饱和）

**多头示例：** 12 头，embedding_dim=768 → 每个头 64 维。

---

## 架构模式

| 架构 | 组件 | 用例 | 预训练目标 |
|------|------|------|-----------|
| Encoder-only | 仅编码器 | 分类、NER、句子任务 | 掩码语言建模 |
| Decoder-only | 仅解码器 | 文本生成 | 下一 token 预测 |
| Encoder-Decoder | 编码 + 解码 | 翻译、摘要 | seq2seq |

**考试规则：**
- 分类/嵌入 → Encoder-only（BERT）
- 文本生成 → Decoder-only（GPT、Llama）
- 翻译/摘要 → Encoder-Decoder（T5）
