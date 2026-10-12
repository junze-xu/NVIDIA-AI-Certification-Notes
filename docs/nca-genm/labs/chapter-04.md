---
id: chapter-04
title: "第 4 章实验：视觉模型"
description: "ViT 分块、CNN vs ViT 实验"
sidebar_position: 4
---

# 实验：视觉模型

:::note 预计用时
12 分钟
:::

## 实验目标

- 掌握 ViT 的 patch 计算
- 理解 CNN 和 ViT 的取舍
- 能选择目标检测模型

## 练习 1：ViT Patch 计算

```python
image_size = 224
patch_size = 16
num_patches = (image_size // patch_size) ** 2  # 196
print(f"ViT-B/16: {num_patches} patches")
```

## 练习 2：模型选择

| 场景 | 推荐 |
|------|------|
| 少数据 + 快速开发 | CNN（ResNet）|
| 大规模预训练 | ViT |
| 实时检测 | YOLO |

## 关键要点

:::info 本章记忆锚点
ViT patch = (image/patch)²。CNN 数据高效，ViT 需大数据。YOLO 做实时检测。
:::
