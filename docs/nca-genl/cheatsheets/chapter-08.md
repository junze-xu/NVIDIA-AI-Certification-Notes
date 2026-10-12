---
id: chapter-08
title: "第 8 章：NVIDIA 软件栈 — 速查表"
description: "NeMo、NIM、TensorRT-LLM、Triton、Riva"
sidebar_position: 8
---

# NVIDIA 软件栈 — 速查表

## 框架对比

| 工具 | 用途 | 关键特性 | 何时使用 |
|------|------|----------|----------|
| **NVIDIA NeMo** | 训练/微调 LLM | 数据预处理、模型训练、RLHF | 从头构建自定义模型 |
| **NVIDIA NIM** | 部署优化 LLM | 预构建容器、自动批处理 | 快速生产部署 |
| **TensorRT-LLM** | 优化推理 | 量化（INT4/8、FP8）、内核融合 | 最大性能 |
| **Triton Inference Server** | 服务多模型 | 动态批处理、并发执行 | 多模型部署 |

**考试规则：**
- 训练框架 → NeMo
- 部署微服务 → NIM
- 语音（ASR/TTS）→ Riva
- 大规模 RAG → NeMo Retriever

---

## NeMo 模块化流水线

1. 数据预处理：分词、数据清理、格式转换
2. 模型训练：分布式训练、检查点、混合精度
3. 提示学习：P-tuning、prompt tuning、适配器
4. RLHF：奖励建模、PPO 训练、安全对齐

---

## NIM 关键优势

- 预构建容器，最少配置
- 自动批处理、GPU 内存优化
- 快速生产部署
