---
id: chapter-08
title: "第 8 章：在 NVIDIA 技术栈上服务智能体 — 速查表"
description: "NIM 微服务、Triton ensemble 多后端、OpenAI 兼容 API"
sidebar_position: 8
---

# 在 NVIDIA 技术栈上服务智能体 — 速查表

## NIM vs Triton

| 场景 | 选择 |
|------|------|
| 单模型快速部署 OpenAI API | NIM 微服务 |
| 多后端 ensemble（PyTorch+ONNX+TRT）| Triton |
| 模型链 ensemble | Triton ensemble |

## NIM 关键特性
- 预优化模型（TensorRT-LLM 底层）
- OpenAI 兼容 API
- 分钟级部署

:::info 记忆锚点
单模型快速→NIM；多后端/ensemble→Triton
:::
