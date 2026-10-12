---
id: chapter-06
title: "第 6 章实验：分词与特征"
description: "BPE 分词、音频特征实验"
sidebar_position: 6
---

# 实验：分词与特征

:::note 预计用时
12 分钟
:::

## 实验目标

- 掌握分词算法的区别
- 理解图像分块
- 了解音频特征

## 练习 1：分词对比

```python
from transformers import AutoTokenizer

# BPE（GPT）
gpt_tok = AutoTokenizer.from_pretrained("gpt2")
# WordPiece（BERT）
bert_tok = AutoTokenizer.from_pretrained("bert-base-uncased")

text = "unhappiness"
print(f"BPE: {gpt_tok.tokenize(text)}")
print(f"WordPiece: {bert_tok.tokenize(text)}")
```

## 练习 2：音频特征

```python
# MFCC — 梅尔频率倒谱系数
# Mel spectrogram — 梅尔频谱图
# Whisper — ASR 语音识别
```

## 关键要点

:::info 本章记忆锚点
字节级 BPE 无 UNK。图像 patch 影响 token 数。Whisper 做 ASR。
:::
