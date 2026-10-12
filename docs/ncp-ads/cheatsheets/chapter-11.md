---
id: chapter-11
title: "第 11 章：性能分析与优化 — 速查表"
description: "Nsight Systems/Compute、DLProf、RMM 池、warp 占用率"
sidebar_position: 11
---

# 性能分析与优化：DLProf、Nsight 与内存效率 — 速查表

## 工具分工

| 工具 | 粒度 | 用途 |
|------|------|------|
| Nsight Systems | 流水线级+memcpy 事件 | 全系统时间线（找传输停顿）|
| Nsight Compute | 单次内核内部 | warp 占用率、寄存器分析 |
| DLProf | 运行汇总 | 迭代时间、Tensor Core 百分比 |

:::info 记忆锚点
全系统→Nsight Systems；单内核→Nsight Compute；汇总→DLProf。
:::
