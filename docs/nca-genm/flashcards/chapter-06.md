---
id: chapter-06
title: "第 6 章：分词与特征 — 知识卡片"
description: "BPE、WordPiece、音频特征知识卡片"
sidebar_position: 6
---

# 分词与特征 — 知识卡片

## 卡片 1

**Q：字节级 BPE 的最大优势？**

A：永远不需要 `<UNK>` token — 任何输入都可拆分为字节。

---

## 卡片 2

**Q：WordPiece 的合并准则？**

A：最大似然：freq(pair) / (freq(a) × freq(b))。BERT 使用。

---

## 卡片 3

**Q：Whisper 模型的用途？**

A：语音识别（ASR），支持多语言转写。
