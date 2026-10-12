---
id: chapter-01
title: "第 1 章：NVIDIA AI 软件生态 — 知识卡片"
description: "CUDA、cuDNN、TensorRT、RAPIDS、Triton、NGC 知识卡片"
sidebar_position: 1
---

# NVIDIA AI 软件生态 — 知识卡片

## 卡片 1

**Q：CUDA、cuDNN、TensorRT 三者的层次关系是什么？**

A：CUDA 是最底层的并行计算平台，cuDNN 构建在 CUDA 之上提供训练原语，TensorRT 构建在 CUDA 之上优化推理。可以简记为：
- **C**UDA = 基础设施层（地基）
- **c**uDNN = 训练加速层（盖楼）
- **T**ensorRT = 推理部署层（装修）

---

## 卡片 2

**Q：NGC Catalog 提供了哪几类工件？请列举至少 3 种。**

A：
1. **容器**：PyTorch、TensorFlow、RAPIDS、Triton 等框架容器
2. **预训练模型**：.pth、.onnx、.plan 等格式的模型文件
3. **Helm Charts**：Kubernetes 部署模板
4. **SDK 与资源**：代码示例、Notebook、文档

:::caution 高频陷阱
容器和模型是分开的！一个容器本身不包含模型，模型需要单独下载。
:::

---

## 卡片 3

**Q：RAPIDS 包含哪些核心库？它们对标哪些 CPU 库？**

A：
| GPU 库 | 对标 CPU 库 | 用途 |
|--------|-----------|------|
| cuDF | pandas | GPU DataFrame 操作 |
| cuML | scikit-learn | GPU 经典机器学习 |
| cuGraph | NetworkX | GPU 图分析 |
| cuSignal | SciPy.signal | 信号处理 |

---

## 卡片 4

**Q：RAPIDS 和 PyTorch/TensorFlow 的最大区别是什么？**

A：RAPIDS 面向**数据科学**（经典 ML），对标的是 pandas、scikit-learn 这类库；PyTorch/TensorFlow 面向**深度学习**。简言之：
- 不是什么深度神经网络 → cuML / cuDF
- 涉及深度神经网络 → PyTorch / TensorFlow

---

## 卡片 5

**Q：Triton Inference Server 支持哪些网络协议？**

A：HTTP/REST 和 gRPC。两种协议都支持动态批处理（dynamic batching），动态批处理是服务端特性，不依赖具体协议。

:::tip
考试出现"多模型共存、统一端点、在线版本切换" → 考虑 Triton。
:::

---

## 卡片 6

**Q：TensorRT 的优化包括哪些具体技术？请说出 3 种。**

A：
1. **层融合**：将相邻算子合并为一个 kernel（如 conv + BN + ReLU）
2. **精度校准**：FP32 → FP16 或 INT8
3. **Kernel 自动调优**：为当前 GPU 选择最快的算子实现

:::note
TensorRT 不训练模型，它只优化已经训练好的模型。
:::

---

## 卡片 7

**Q：NVIDIA AI Enterprise 相比免费 NGC 有哪些额外价值？**

A：
- 企业级 SLA 技术支持
- 低于 30 天安全补丁承诺
- 平台认证（VMware、Red Hat、Kubernetes）
- 长期支持 (LTS) 版本

---

## 卡片 8

**Q：NGC 中的 "Model Ensemble" 是什么？**

A：Ensemble 是多个模型按流水线顺序或并行执行的配置。例如：预处理模型 → 主模型 → 后处理模型，对外暴露为单一请求端点，在 `config.pbtxt` 中定义。

---

## 卡片 9

**Q：AI Enterprise 支持哪些虚拟化平台？**

A：VMware vSphere、Red Hat OpenShift、Kubernetes、Ubuntu/RHEL 裸机。"认证"意味着这些配置经过 NVIDIA 测试和验证，保证兼容性。

---

## 卡片 10

**Q：在公共 NGC 和私有 NGC 注册表之间如何选择？**

A：公共注册表免费开放、社区支持；私有注册表组织专用，存储自定义模型和容器，需要 NGC 账户 + 组织设置。公共容器不提供企业级 SLA。
