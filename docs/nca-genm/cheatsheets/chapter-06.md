---
id: chapter-06
title: "第 6 章：分词、图像分块与音频特征 — 速查表"
description: "BPE、WordPiece、SentencePiece、图像分块、音频特征"
sidebar_position: 6
---

# 分词、图像分块与音频特征 — 速查表

## 文本分词

| 算法 | 合并准则 | 使用者 |
|------|----------|--------|
| BPE（字节级） | 最高频的相邻对 | GPT-2/3/4（tiktoken） |
| WordPiece | 最大似然：freq(pair)/(freq(a)×freq(b)) | BERT、DistilBERT |
| SentencePiece | 概率 unigram 语言模型或 BPE | T5、ALBERT |

**关键规则：** 字节级 BPE 永远不需要 `<UNK>`。

---

## 图像分块（ViT）

| 公式 | 数值 |
|------|------|
| Patch 数量 | (image_size / patch_size)² |
| ViT-B/16，224×224 | 196 个 patch |
| ViT-B/32，224×224 | 49 个 patch |
| 展平后维度 | 16×16×3 = 768 |

---

## 图像归一化

常用 ImageNet 均值和标准差进行归一化。

---

## 音频特征

| 特征 | 描述 |
|------|------|
| MFCC | 梅尔频率倒谱系数 |
| Mel spectrogram | 梅尔频谱图 |
| Spectrogram | 时频谱图 |

---

## 音频模型

| 模型 | 用途 |
|------|------|
| Whisper | 语音识别（ASR） |
| Wav2Vec 2.0 | 自监督语音表示 |
| HuBERT | 隐藏单元 BERT |
