---
id: chapter-05
title: "第 5 章实验：数据预处理"
description: "Unicode 归一化、分词、填充实验"
sidebar_position: 5
---

# 实验：数据预处理

:::note 预计用时
15 分钟
:::

## 实验目标

- 掌握 NFKC Unicode 归一化
- 理解 BPE 分词的优势
- 能正确实现填充和注意力掩码

## 练习 1：Unicode 归一化

```python
import unicodedata

text = "ＡＢＣ１２３"  # 全角字符
normalized = unicodedata.normalize('NFKC', text)
print(normalized)  # "ABC123" — 转为半角
```

:::note
ML 用 NFKC 减少词汇量，NFC 用于正式文档。
:::

## 练习 2：分词对比

```python
from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")
tokens = tokenizer.encode("Hello world")
# BPE 分词无 [UNK] — 稀有词拆分为子词
```

## 练习 3：填充与注意力掩码

```python
# padding: 短序列填充到 batch 内最大长度
# attention_mask: 1 = 真实 token, 0 = padding
inputs = tokenizer(["Hello", "Hi world"], padding=True, return_tensors="pt")
# input_ids:      [[101, 7592, 102, 0], [101, 7632, 2088, 102]]
# attention_mask: [[1, 1, 1, 0], [1, 1, 1, 1]]
```

## 关键要点

:::info 本章记忆锚点
ML 用 NFKC。BPE 无 [UNK]。attention_mask 1 = 真实，0 = padding。
:::
