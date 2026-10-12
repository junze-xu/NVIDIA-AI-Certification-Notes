---
id: chapter-01
title: "第 1 章：NVIDIA AI 软件生态"
description: "CUDA、cuDNN、TensorRT、RAPIDS、Triton、NGC 速查表"
sidebar_position: 1
---

# NVIDIA AI 生态核心组件速查

## 软件栈层级关系

AI 软件栈呈三层金字塔结构，上层依赖下层：

```
  ┌─────────────────────────┐
  │   框架：PyTorch / TF    │
  ├─────────────────────────┤
  │  cuDNN    │  TensorRT   │
  │ (训练加速) │  (推理优化)  │
  ├─────────────────────────┤
  │          CUDA           │
  │     (并行计算基础)       │
  └─────────────────────────┘
```

- **CUDA**：所有 GPU 计算的地基，提供并行编程模型
- **cuDNN**：训练侧原语库，被框架隐式调用，开发者无需直接使用
- **TensorRT**：推理侧优化器，接收训练后模型 → 生成 .plan 引擎

:::tip 记忆口诀
**C**reate（CUDA 创建）、**D**evelop（cuDNN 开发/训练）、**D**eploy（TensorRT 部署）
:::

## NGC Catalog 能拿到什么

NGC 是 NVIDIA 的官方资源中心，提供四类工件：

| 类型 | 内容 | 典型用途 |
|------|------|----------|
| 容器 | PyTorch、TensorFlow、RAPIDS、Triton | 开箱即用的 GPU 环境 |
| 预训练模型 | .onnx / .pth / .plan 文件 | 迁移学习起点 |
| Helm Charts | K8s 部署模板 | 生产环境快速上线 |
| SDK 与资源 | Notebook、示例代码 | 学习与原型验证

:::caution 高频陷阱
**容器里不含模型！** 模型是独立的工件，需要单独下载并挂载到容器中。
:::

## RAPIDS 还是 PyTorch

两者都用 GPU，但解决不同问题：

| 维度 | RAPIDS | PyTorch / TensorFlow |
|------|--------|---------------------|
| 适用领域 | 数据科学（经典 ML） | 深度学习 |
| 对标 CPU 库 | pandas、scikit-learn、NetworkX、SciPy | 无（领域独特） |
| 代表模块 | cuDF、cuML、cuGraph、cuSignal | nn、optim、DataLoader |
| 典型场景 | ETL、特征工程、聚类分析 | 图像分类、NLP、生成式 AI |

:::note 一句话区分
问自己：是不是深度神经网络？是 → PyTorch/TF；否 → RAPIDS。
:::

## Triton Inference Server 核心能力

Triton 是 NVIDIA 推荐的推理服务平台，关键特性：

1. **多后端**：同时服务 TensorRT、ONNX、PyTorch、TensorFlow、Python 模型
2. **动态批处理**：服务端自动合并请求，无需客户端改动
3. **多模型共存**：同一端口并行运行多个模型及多个版本
4. **A/B 测试**：按版本切流量，方便模型迭代

**高频场景**：题目出现"多个模型、统一入口、在线切换版本" → 选 Triton。

## TensorRT 优化路径

训练好的模型进入 TensorRT 后经历四步优化：

| 步骤 | 做什么 | 效果 |
|------|--------|------|
| 层融合 | 将相邻算子（如 conv + BN + ReLU）合并为一个kernel | 减少内存搬运 |
| 精度校准 | FP32 → FP16 或 INT8 | 吞吐量翻倍或四倍 |
| Kernel 调优 | 为当前 GPU 架构挑选最快算子实现 | 榨干硬件性能 |
| 内存优化 | 动态分配张量显存 | 降低内存峰值 |

## 免费 NGC 与 AI Enterprise 差异

| 对比项 | 公共 NGC | NVIDIA AI Enterprise |
|--------|----------|---------------------|
| 成本 | 免费 | 按 GPU 订阅 |
| 安全补丁 | 社区节奏 | NVIDIA 承诺 30 天内 |
| 技术支持 | 社区论坛 | 企业级 SLA + 专家 |
| 平台认证 | 无 | VMware、Red Hat、K8s 认证 |
| 长期支持 | 否 | LTS 版本可用 |

:::tip
考试中出现"企业生产环境"、"合规认证"、"SLA 保证" → AI Enterprise。
:::

## 部署流水线全景

完整的 AI 应用上线路径：

```
NGC 容器 → 获取模型 → TensorRT 优化 → Triton 部署 → 客户端调用
（环境搭建） （预训练/自训练） （可选但推荐） （服务化）  （HTTP/gRPC）
```

记住：优化步骤**可选**但不跳过——生产环境强烈推荐。
