---
id: chapter-06
title: "第 6 章实验：实验与评估"
description: "BLEU、ROUGE、困惑度计算实验"
sidebar_position: 6
---

# 实验：实验与评估

:::note 预计用时
15 分钟
:::

## 实验目标

- 能根据任务选择正确的评估指标
- 掌握 BLEU 和 ROUGE 的区别
- 理解困惑度的含义

## 练习 1：指标选择

| 任务 | 正确指标 |
|------|----------|
| 机器翻译 | BLEU（精确率） |
| 文本摘要 | ROUGE（召回率） |
| 语言模型质量 | 困惑度（越低越好） |

## 练习 2：BLEU 计算

```python
from nltk.translate.bleu_score import sentence_bleu

reference = [['this', 'is', 'a', 'test']]
candidate = ['this', 'is', 'a', 'test']
score = sentence_bleu(reference, candidate)
print(f"BLEU: {score:.4f}")  # 完全匹配 = 1.0
```

## 练习 3：困惑度

```python
import math
cross_entropy_loss = 2.303
perplexity = math.exp(cross_entropy_loss)
print(f"困惑度: {perplexity:.2f}")  # 越低越好
```

:::tip
困惑度 = exp(交叉熵损失)。越低越好 — 模型对数据越不惊讶。
:::

## 关键要点

:::info 本章记忆锚点
翻译用 BLEU，摘要用 ROUGE，困惑度越低越好。不同任务需要不同指标。
:::
