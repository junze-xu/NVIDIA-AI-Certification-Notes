---
id: chapter-05
title: "第 5 章实验：多模态模型"
description: "CLIP 嵌入、VLM 能力实验"
sidebar_position: 5
---

# 实验：多模态模型

:::note 预计用时
12 分钟
:::

## 实验目标

- 理解 CLIP 的对比学习
- 掌握多模态融合策略
- 了解 VLM 的能力

## 练习 1：CLIP 零样本分类

```python
from transformers import CLIPProcessor, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

# 用文本描述类别即可分类
inputs = processor(text=["a photo of a cat", "a photo of a dog"],
                  images=image, return_tensors="pt", padding=True)
outputs = model(**inputs)
```

:::tip
CLIP 对比学习实现零样本分类。
:::

## 关键要点

:::info 本章记忆锚点
CLIP = 对比学习，零样本分类。VLM 融合文本+图像。
:::
