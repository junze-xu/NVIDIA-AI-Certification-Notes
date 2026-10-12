---
id: chapter-10
title: "第 10 章实验：性能分析工具"
description: "Nsight Systems、Nsight Compute、DLProf 使用实验"
sidebar_position: 10
---

# 实验：性能分析工具

:::note 预计用时
15 分钟
:::

## 实验目标

- 理解不同性能分析工具的适用范围
- 能根据场景选择合适的 Profiling 工具
- 掌握 Nsight Systems 的基本命令

## 练习 1：Nsight Systems 系统级时间线

```bash
nsys profile -o report python script.py
```

## 练习 2：Nsight Compute 单内核深入

```bash
ncu --set full -o report python script.py
```

## 练习 3：DLProf 框架算子归因

```bash
dlprof --mode=pytorch python train.py
```

:::caution
DLProf 适用于 DL 训练循环（PyTorch/TensorFlow），不适用于一般 RAPIDS/cuDF 流水线。后者用 Nsight Systems。
:::

## 关键要点

:::info 本章记忆锚点
Nsight Systems：系统级时间线。Nsight Compute：单内核深度。DLProf：DL 框架算子级归因（仅 DL 训练）。
:::
