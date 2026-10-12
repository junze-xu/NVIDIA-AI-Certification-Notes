---
id: chapter-08
title: "第 8 章：推理加速 — 知识卡片"
description: "TensorRT-LLM、AWQ/GPTQ/FP8 量化、投机解码 知识卡片"
sidebar_position: 8
---

# 推理加速：TensorRT-LLM、量化与投机解码 — 知识卡片

## 卡片 1

**Q：内存受限场景下部署 70B 模型，最优量化方法是？**

A：INT4 AWQ——通过激活统计量保护显著权重通道，在 INT4 内存下接近 FP16 精度。考试提示：INT4 AWQ = 内存受限大模型推理首选。

---

## 卡片 2

**Q：GPTQ 与 AWQ 的区别是什么？**

A：GPTQ 使用逐层权重重建 + Hessian 误差最小化（二阶信息）；AWQ 通过激活分布保护显著权重通道。两者都是 INT4 量化但校准机制不同。考试提示：Hessian/逐层重建 → GPTQ。

---

## 卡片 3

**Q：投机解码的加速原理是什么？**

A：小模型（draft）快速生成候选 token → 大模型并行验证（逐步验证比逐步生成快）→ 单步产出多个 token。加速比通常 2–3×。考试提示：投机解码 = 小猜大验。

---

## 卡片 4

**Q：H100/H200 GPU 上最佳的推理精度/吞吐权衡是什么？**

A：FP8 推理——H100/B200 硬件原生支持 FP8，精度损失最小且吞吐极高。考试提示：新一代 GPU（H100+）推理 → FP8 最优。

---

## 卡片 5

**Q：TensorRT-LLM 与 NIM 的关系是什么？**

A：NIM 微服务底层使用 TensorRT-LLM 做推理优化 + Triton Inference Server 做服务层 + 容器化封装。NIM = TensorRT-LLM + Triton + 容器。考试提示：NIM 是"打包好的" TensorRT-LLM。
