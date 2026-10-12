---
id: chapter-02
title: "第 2 章：缩放定律与上下文窗口 — 知识卡片"
description: "Chinchilla 法则、SentencePiece/BPE、RoPE、NTK-aware 缩放 知识卡片"
sidebar_position: 2
---

# 缩放定律、分词与上下文窗口机制 — 知识卡片

## 卡片 1

**Q：Chinchilla 计算的 token-参数比是多少？70B 模型需要多少训练 token？**

A：约 20 token/参数。70B × 20 ≈ 1400 亿 token。考试提示：记住"每参数约 20 个 token"。

---

## 卡片 2

**Q：SentencePiece 与经典 BPE 的关键结构差异是什么？**

A：经典 BPE 先按空白符预切分再合并字节对；SentencePiece 把输入视为原始字符/字节流，空白符当普通符号处理。考试提示：CJK 语言（无空白符边界）→ 选 SentencePiece。

---

## 卡片 3

**Q：免训练扩展 RoPE 上下文长度的最佳方法是哪种？**

A：NTK-aware RoPE 缩放（非均匀调整旋转频率）。位置插值(PI)需要微调才能恢复质量，违反免训练约束。考试提示：题干强调"不做额外微调"→ NTK-aware。

---

## 卡片 4

**Q：增大 RoPE theta（如 10000→500000）对上下文扩展的原理是？**

A：增大 theta 减慢旋转频率 → 相位回绕前可表示更长的相对距离 → 支持更长上下文。考试提示：Llama 3/Code Llama 使用此技术。

---

## 卡片 5

**Q：MoE 架构的核心优势是什么？**

A：总参数量大（高容量）但每个 token 只激活 top-k 专家 → 每 token 算力接近小稠密模型。考试提示："总参数大但每 token FLOPs 低"= MoE。
