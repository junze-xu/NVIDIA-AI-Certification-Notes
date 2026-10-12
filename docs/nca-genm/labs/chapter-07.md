---
id: chapter-07
title: "第 7 章实验：训练多模态模型"
description: "LoRA、分布式训练、混合精度实验"
sidebar_position: 7
---

# 实验：训练多模态模型

:::note 预计用时
15 分钟
:::

## 实验目标

- 掌握 LoRA 微调
- 理解分布式训练策略
- 了解混合精度训练

## 练习 1：LoRA 微调

```python
from peft import LoraConfig, get_peft_model

config = LoraConfig(r=16, lora_alpha=32, target_modules=["q_proj", "v_proj"])
model = get_peft_model(base_model, config)
# 仅训练少量参数，数据效率高
```

## 练习 2：分布式训练

| 策略 | 工作方式 |
|------|----------|
| 数据并行 | 数据分片到多 GPU |
| 模型并行 | 模型分割到多 GPU |
| 混合精度 | FP16/BF16 加速 |

## 关键要点

:::info 本章记忆锚点
LoRA 低秩适配器。数据并行分片数据。混合精度加速训练。
:::
