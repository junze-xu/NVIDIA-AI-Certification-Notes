---
id: chapter-09
title: "第 9 章：LLM 服务化 — 速查表"
description: "NIM 微服务、Triton Inference Server、NGC 模型仓库"
sidebar_position: 9
---

# LLM 服务化：NVIDIA NIM、Triton Inference Server 与模型仓库 — 速查表

## NIM vs Triton 选型

| 维度 | NVIDIA NIM | Triton Inference Server |
|------|------------|------------------------|
| 定位 | 预优化的 LLM 推理微服务 | 通用模型服务平台 |
| 部署速度 | 最快（分钟级，预构建） | 需配置（小时-天级） |
| API | OpenAI 兼容，标准化 | 自定义/多协议 |
| 支持模型 | 预定义模型目录 | 任意模型（PyTorch/ONNX/TensorRT） |
| 复杂流水线 | 不支持 ensemble | 支持 ensemble 多模型链 |
| 批处理 | 内置 continuous batching | 需配置 |
| 典型场景 | 快速上线标准 LLM | 多后端、ensemble、生产平台 |

## NGC 目录

| 内容 | 说明 |
|------|------|
| 模型 | 预训练 + 优化模型检查点 |
| 容器 | NIM、RAPIDS、DeepStream 等 |
| Helm Charts | Kubernetes 部署配置 |
| 角色 | AI 工作流组件的一站式注册中心 |

## NIM 核心特性

| 特性 | 说明 |
|------|------|
| 底层引擎 | TensorRT-LLM |
| 服务层 | Triton Inference Server |
| API | OpenAI 兼容（/v1/chat/completions） |
| 优化 | 量化、KV Cache、continuous batching |
| 部署 | 容器化，一行命令启动 |

:::info 本章记忆锚点
NIM = 优化好的 LLM 开箱即用（标准化）；Triton = 自定义/多后端/ensemble（灵活性）。快速上线选 NIM；复杂流水线选 Triton ensemble。
:::

:::caution 高频陷阱
NIM 不支持任意 ensemble 流水线（那是 Triton 的领域）；自定义 Triton 后端需要大量工程但不适用快速单模型部署；Flask 封装缺少生产级批处理和扩展。
:::
