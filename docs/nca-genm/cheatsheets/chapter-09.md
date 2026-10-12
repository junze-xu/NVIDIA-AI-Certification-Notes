---
id: chapter-09
title: "第 9 章：NVIDIA 多模态软件栈 — 速查表"
description："NIM、NeMo、Triton、BioNeMo、MONAI"
sidebar_position: 9
---

# NVIDIA 多模态软件栈 — 速查表

## 核心工具

| 工具 | 用途 | 关键特性 |
|------|------|----------|
| **NVIDIA NeMo** | 训练/微调多模态模型 | 数据预处理、模型训练、RLHF |
| **NVIDIA NIM** | 部署优化 LLM/VLM | 预构建容器、自动批处理 |
| **TensorRT-LLM** | 优化推理 | 量化（INT4/8、FP8）、内核融合 |
| **Triton Inference Server** | 服务多模型 | 动态批处理、并发执行 |

---

## 领域专用平台

| 平台 | 领域 |
|------|------|
| BioNeMo | 生物学/药物发现 |
| MONAI | 医学影像 |
| Riva | 语音 AI |

---

## NIM 关键优势

- 预构建容器，最少配置
- 自动批处理、GPU 内存优化
- 支持多种模型格式
- 快速生产部署
