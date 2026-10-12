---
id: chapter-02
title: "第 2 章实验：分词与上下文扩展"
description: "Chinchilla 法则、SentencePiece、RoPE 缩放 动手实验"
sidebar_position: 2
---

# 实验：分词与上下文扩展

:::note 预计用时 15 分钟 :::

## 练习 1：Chinchilla 计算
70B 模型：每参数 20 token → 70B x 20 = 1400 亿 token 为计算最优点

## 练习 2：分词方法选择
| 语言类型 | 最佳分词 | 原因 |
|----------|----------|------|
| 英文（有空白符） | BPE / SentencePiece 均可 | 两者适用 |
| 中文/日文/韩文 | SentencePiece | 无需按空白符预切分 |

## 练习 3：RoPE 扩展
| 技术 | 需要微调？ | 原理 |
|------|-----------|------|
| NTK-aware 缩放 | 否 | 非均匀调频率 |
| 位置插值 (PI) | 是 | 插值位置索引 |
| theta = 500000 | 否 | 减慢旋转 |

:::info 记忆锚点
Chinchilla 20:1；CJK→SentencePiece；免训练→NTK-aware
:::
