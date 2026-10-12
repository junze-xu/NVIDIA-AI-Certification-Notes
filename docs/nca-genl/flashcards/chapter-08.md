---
id: chapter-08
title: "第 8 章：NVIDIA 软件栈 — 知识卡片"
description: "NeMo、NIM、TensorRT-LLM、Triton 知识卡片"
sidebar_position: 8
---

# NVIDIA 软件栈 — 知识卡片

## 卡片 1

**Q：NeMo 和 NIM 的核心区别？**

A：
- NeMo：训练/微调框架（LLM 开发）
- NIM：部署微服务（LLM 生产部署）

---

## 卡片 2

**Q：TensorRT-LLM 的主要优化手段？**

A：量化（INT4/INT8/FP8）、内核融合、多 GPU 并行。用于自定义优化流水线和最大性能。

---

## 卡片 3

**Q：Triton Inference Server 适合什么场景？**

A：多模型部署、生产监控。支持动态批处理、并发执行、版本控制、健康检查。

---

## 卡片 4

**Q：NVIDIA Riva 用于什么任务？**

A：语音 AI — ASR（语音→文本）和 TTS（文本→语音）。
