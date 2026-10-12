---
id: chapter-06
title: "第 6 章：定制化策略 — 速查表"
description: "LoRA/QLoRA、RLHF vs DPO、NeMo 框架"
sidebar_position: 6
---

# 定制化策略 — 速查表

## PEFT 方法对比

| 方法 | 可训练参数 | 基座权重 | 内存节省机制 |
|------|-----------|----------|-------------|
| LoRA | 低秩矩阵 | 冻结 | 仅训练适配器 |
| QLoRA | 低秩矩阵 | 4-bit 量化冻结 | NF4 量化 + 双重量化 |
| P-tuning | 虚拟 token 嵌入 | 冻结 | 仅训练前缀 token |
| 适配器 | 瓶颈前馈层 | 冻结 | 仅训练小型层 |

## LoRA/QLoRA 内存对比

| 参数规模 | FP16 内存 | QLoRA 大约 |
|----------|-----------|-----------|
| 70B | ~140GB | ~35GB（4-bit） |

## RLHF vs DPO

| 维度 | RLHF | DPO |
|------|------|-----|
| 奖励模型 | 需要单独训练 | 不需要 |
| 优化算法 | PPO（强化学习） | 闭式损失 |
| 稳定性 | 较不稳定 | 更简单、更稳定 |
| 适用场景 | 偏好对齐 | 偏好对齐 |

## NeMo 组件对照

| 组件 | 用途 |
|------|------|
| NeMo Curator | 数据整理、过滤、去重 |
| NeMo Aligner | 偏好对齐（RLHF/DPO） |
| NeMo Guardrails | 运行时安全护栏 |
| Framework Launcher | 通用训练编排（SFT/PEFT） |

## NeMo PEFT 配置

| 配置键 | 作用 |
|--------|------|
| model.peft.peft_scheme | 选择 lora/ptuning/adapter/ia3 |
| trainer.precision | 数值精度（bf16/fp16/32） |
| model.optim.name | 优化器选择 |
