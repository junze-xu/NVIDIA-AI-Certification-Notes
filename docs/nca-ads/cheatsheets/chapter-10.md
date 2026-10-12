---
id: chapter-10
title: "第 10 章：RAPIDS 环境与性能分析 — 速查表"
description: "Conda/Docker 安装、云 GPU、Nsight 工具"
sidebar_position: 10
---

# RAPIDS 环境与性能分析 — 速查表

## 安装方式

| 方式 | 最适合 | 关键要求 |
|------|--------|----------|
| Conda | 自定义本地开发 | 锁定 `cuda-version` 匹配驱动 |
| Docker | 跨机器/CI 可复现 | 镜像标签匹配主机驱动/Python |

:::caution
Conda 安装 RAPIDS 时省略 `cuda-version` → 解析到不兼容/CPU 构建 → 导入错误。
:::

## 云 GPU 实例选型

| 实例类型 | GPU 数 | 互连 | 用途 |
|----------|--------|------|------|
| 单 GPU | 1 | 无 | 开发/测试、小模型 |
| 多 GPU（仅 PCIe） | 2-8 | PCIe | 数据并行、中等通信 |
| 多 GPU（NVLink） | 4-8 | NVLink | 大模型训练、重度梯度同步 |

:::note
题目说"GPU 间通信是瓶颈" → 选择 NVLink 实例。
:::

## 性能分析工具

| 工具 | 范围 | 命令 |
|------|------|------|
| Nsight Systems | 系统级：CPU/GPU、内存拷贝、内核启动 | `nsys profile -o report python script.py` |
| Nsight Compute | 单内核深度指标 | `ncu --set full -o report python script.py` |
| DLProf | DL 框架算子级归因 + 调优 | `dlprof --mode=pytorch python train.py` |

**升级路径**：Nsight Systems（概览）→ DLProf（框架算子映射）→ Nsight Compute（单内核深入）

:::tip 高频陷阱
问题描述**一般 RAPIDS/cuDF** 流水线时选 DLProf — 错误；应该用 Nsight Systems。
:::
