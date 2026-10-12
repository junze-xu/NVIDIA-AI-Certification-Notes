---
id: chapter-01
title: "第 1 章实验：NVIDIA AI 软件生态"
description: "NGC Catalog 探索、软件栈层次认知实验"
sidebar_position: 1
---

# 实验：NVIDIA AI 软件生态

:::note 预计用时
15 分钟
:::

## 实验目标

- 熟悉 NGC Catalog 的业务资源类型与定位
- 理解 CUDA / cuDNN / TensorRT 的三层软件栈关系
- 区分 RAPIDS 和 PyTorch/TensorFlow 的适用场景

## 练习 1：NGC Catalog 资源探索

:::tip 操作步骤
1. 访问 [ngc.nvidia.com](https://ngc.nvidia.com)
2. 浏览 **Containers** 目录，找到 PyTorch 和 TensorFlow 容器
3. 对比两者的标签信息（CUDA 版本、框架版本）
4. 在 **Models** 中搜索 TensorRT 优化后的模型（.plan 格式）
5. 记录三类工件（容器、模型、Helm Charts）在 NGC 中的组织方式
:::

**思考题**：

- 容器和模型是分别存放的还是打包在一起的？为什么这样设计？
- 考试容器和企业加固容器有什么区别？

## 练习 2：软件栈层次认知

绘制一张软件栈层次图，从上到下依次标注：

```
应用层：推理服务 / 训练框架
─────────────────────────
服务层：Triton ──── 框架：PyTorch / TF
─────────────────────────
加速层：TensorRT（推理）─── cuDNN（训练）
─────────────────────────
基础层：CUDA（并行计算平台）
─────────────────────────
硬件层：NVIDIA GPU
```

## 练习 3：场景与工具匹配

将以下场景与合适的 NVIDIA 技术连线：

| 场景 | 工具 |
|------|------|
| 实时推荐系统需要同时服务多个模型 | ? |
| pandas 数据处理流水线加速 | ? |
| 已训练 ResNet 模型需部署到低延迟 API | ? |
| 大规模日志数据的异常检测 | ? |
| 自定义 CUDA 算子开发 | ? |

<details>
<summary>查看参考答案</summary>

| 场景 | 工具 |
|------|------|
| 多模型统一服务 | Triton Inference Server |
| pandas 加速 | RAPIDS cuDF |
| 模型低延迟部署 | TensorRT |
| 日志异常检测 | RAPIDS cuML |
| 自定义算子开发 | CUDA |

</details>

## 关键要点

:::info 本章记忆锚点
CUDA 是平台层（地基），cuDNN 加速训练（盖楼），TensorRT 优化推理（装修）。NGC 提供容器和模型，但容器里不含模型。
:::
