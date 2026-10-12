---
id: chapter-08
title: "第 8 章实验：NVIDIA 软件栈"
description: "NeMo、NIM、Triton 部署实验"
sidebar_position: 8
---

# 实验：NVIDIA 软件栈

:::note 预计用时
12 分钟
:::

## 实验目标

- 掌握 NeMo 训练流水线
- 理解 NIM 部署流程
- 能区分各工具的适用场景

## 练习 1：工具匹配

| 场景 | 正确工具 |
|------|----------|
| 训练 LLM | NeMo |
| 部署 LLM 微服务 | NIM |
| 多模型部署 | Triton |
| 语音 ASR/TTS | Riva |
| 大规模 RAG | NeMo Retriever |

## 练习 2：NIM 部署

```bash
# NIM 预构建容器快速部署
docker run --gpus all -e NGC_API_KEY nvcr.io/nim/meta/llama3-8b-instruct:1.0.0
```

:::tip
NIM = 最少配置的快速生产部署。NeMo = 从头训练自定义模型。
:::

## 关键要点

:::info 本章记忆锚点
训练用 NeMo，部署用 NIM，多模型用 Triton。NeMo ≠ NIM（训练 vs 部署）。
:::
