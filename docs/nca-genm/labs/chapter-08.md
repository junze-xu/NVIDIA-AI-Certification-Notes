---
id: chapter-08
title: "第 8 章实验：评估与对齐"
description: "FID、CLIP Score、RLHF 实验"
sidebar_position: 8
---

# 实验：评估与对齐

:::note 预计用时
12 分钟
:::

## 实验目标

- 掌握多模态评估指标
- 理解 RLHF 流程
- 能识别幻觉

## 练习 1：指标选择

| 任务 | 指标 | 方向 |
|------|------|------|
| 图像生成质量 | FID | 越低越好 |
| 文本到图像匹配 | CLIP Score | 越高越好 |
| 翻译 | BLEU | 越高越好 |
| 语言模型 | 困惑度 | 越低越好 |

:::tip
FID 越低越好！这是考试陷阱。
:::

## 练习 2：RLHF 顺序

```python
# 正确的 RLHF 顺序：
stages = ["SFT", "奖励模型", "PPO"]
# 奖励模型必须在 RL 阶段之前训练！
```

## 关键要点

:::info 本章记忆锚点
FID 越低越好。CLIP Score 越高越好。RLHF 顺序不可颠倒。
:::
