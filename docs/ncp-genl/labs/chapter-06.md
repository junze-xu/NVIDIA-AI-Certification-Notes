---
id: chapter-06
title: "第 6 章实验：PEFT 与对齐"
description: "LoRA/QLoRA、DPO/RLHF、NeMo 动手实验"
sidebar_position: 6
---

# 实验：定制化策略

:::note 预计用时 20 分钟 :::

## 练习 1：内存计算
QLoRA 70B：4-bit NF4 量化基座 ~35GB + LoRA 适配器 → 单张 80GB GPU 可运行

## 练习 2：DPO vs RLHF
| 维度 | DPO | RLHF |
|------|-----|------|
| 需要奖励模型 | 否 | 是 |
| 训练稳定性 | 高 | 较低 |
| 复杂度 | 简单 | 复杂 |

## 练习 3：组件分工
NeMo Curator=数据整理；NeMo Aligner=偏好对齐（DPO/PPO）

## 练习 4：领域自适应步骤
无标注法律文本 → 继续预训练（领域自适应）→ 指令微调 → DPO 对齐

:::info 记忆锚点
QLoRA=4-bit基座+LoRA；DPO=免奖励模型；Curator整理，Aligner对齐
:::
