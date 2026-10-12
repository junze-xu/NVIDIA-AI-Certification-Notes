---
id: chapter-01
title: "第 1 章实验：ML 与神经网络基础"
description: "过拟合/欠拟合诊断、正则化实现、激活函数对比实验"
sidebar_position: 1
---

# 实验：ML 与神经网络基础

:::note 预计用时
20 分钟
:::

## 实验目标

- 能诊断过拟合和欠拟合
- 掌握 L1/L2 正则化和 Dropout 的实现
- 理解不同激活函数的效果

## 练习 1：过拟合诊断

```python
import torch
import torch.nn as nn

# 训练损失很低但验证损失很高 → 过拟合
train_loss = 0.02
val_loss = 0.18

if train_loss < 0.05 and val_loss > 0.15:
    print("诊断：过拟合")
    print("解决方案：L2 正则化、Dropout、增加训练数据")
```

## 练习 2：Dropout 实现

```python
model = nn.Sequential(
    nn.Linear(768, 256),
    nn.ReLU(),
    nn.Dropout(0.3),  # 训练时 30% 神经元停用
    nn.Linear(256, 10)
)

model.eval()  # 推理时 Dropout 自动关闭
```

:::tip
`model.eval()` 关闭 Dropout 和 BatchNorm 的训练行为。
:::

## 练习 3：激活函数对比

| 激活函数 | 用途 | 特点 |
|----------|------|------|
| ReLU | 隐藏层 | 减少梯度消失 |
| Sigmoid | 二分类输出 | 输出概率 |
| Softmax | 多分类输出 | 概率分布 |

## 关键要点

:::info 本章记忆锚点
过拟合：训练损失很低但验证损失高。推理时 Dropout 关闭。分类用交叉熵，回归用 MSE。
:::
