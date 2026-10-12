---
id: chapter-05
title: "第 5 章：数据预处理与特征工程 — 知识卡片"
description: "Unicode 归一化、分词、注意力掩码知识卡片"
sidebar_position: 5
---

# 数据预处理与特征工程 — 知识卡片

## 卡片 1

**Q：NLP/ML 任务推荐使用哪种 Unicode 归一化？**

A：**NFKC** — 兼容性归一化 + 组合，减少词汇量。人类文本用 NFC。

---

## 卡片 2

**Q：BPE/WordPiece 分词的主要优势是什么？**

A：零 [UNK] 率 + 合理的序列长度。多数 LLM 的首选分词方案。

---

## 卡片 3

**Q：Transformer 注意力内存的扩展规律？**

A：O(n²) — 序列长度翻倍 = 4× 内存。2048 tokens 需要约 4-8× 512 tokens 的内存。

---

## 卡片 4

**Q：注意力掩码中 1 和 0 分别代表什么？**

A：1 = 真实 token（关注），0 = padding（忽略）。
