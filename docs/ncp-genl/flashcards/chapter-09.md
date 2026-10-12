---
id: chapter-09
title: "第 9 章：LLM 服务化 — 知识卡片"
description: "NIM 微服务、Triton Inference Server、NGC 模型仓库 知识卡片"
sidebar_position: 9
---

# LLM 服务化：NVIDIA NIM、Triton Inference Server 与模型仓库 — 知识卡片

## 卡片 1

**Q：两天内部署 Llama 3 70B 暴露 OpenAI API，应选什么方案？**

A：从 NVIDIA NIM（NGC 目录）部署——预打包+GPU 优化+标准化 OpenAI 兼容 API，几分钟即可部署。考试提示：快速标准化部署 → NIM。

---

## 卡片 2

**Q：需要 ensemble 流水线（预处理 Python + TensorRT LLM + 重排序）时应选什么方案？**

A：自定义 Triton Inference Server 部署——NIM 不支持任意 ensemble，Triton 原生支持多后端 ensemble 链。考试提示：复杂/自定义流水线 → Triton。

---

## 卡片 3

**Q：NIM 不支持的功能是什么？此时应选什么？**

A：NIM 不支持任意 ensemble 流水线和多后端链。需选 Triton Inference Server（自定义部署）。考试提示：需要 ensemble → Triton；快速单模型 → NIM。

---

## 卡片 4

**Q：NGC 目录提供哪些类型的资源？**

A：预训练/优化模型检查点、容器（NIM/RAPIDS 等）、Helm Charts、AI 工作流组件。考试提示：NVIDIA 的模型+容器一站式注册中心。

---

## 卡片 5

**Q：PyTorch、ONNX、TensorRT 三后端模型 + ensemble 共享 GPU 基础选什么？**

A：NVIDIA Triton Inference Server——原生支持多后端 + ensemble 调度。考试提示：多后端/多框架 → Triton 独有优势。
