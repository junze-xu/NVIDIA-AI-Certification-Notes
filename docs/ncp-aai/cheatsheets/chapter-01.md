---
id: chapter-01
title: "第 1 章：LLM 智能体的解剖学 — 速查表"
description: "ReAct、Plan-and-execute、Tree-of-thought、控制模式"
sidebar_position: 1
---

# LLM 智能体的解剖学 — 速查表

## 控制模式对比

| 模式 | 机制 | 适用场景 |
|------|------|----------|
| ReAct | Thought → Action → Observation，动态分支 | 需基于中间结果决定下一步 |
| Plan-and-execute | 预生成完整计划后顺序执行 | 任务固定、无需动态调整 |
| Tree-of-thought | 并行探索多分支，评分+回溯 | 多解路径、需回溯的逻辑谜题 |

## 关键选择规则

| 场景 | 模式 | 原因 |
|------|------|------|
| 动态分支（库存缺货则升级非退款） | ReAct | 基于观察的动态决策 |
| 逻辑谜题多路径需回溯 | Tree-of-thought | 显式分支评估+回溯 |
| 固定顺序子任务 | Plan-and-execute | 预定义计划足够 |

:::info 记忆锚点
动态分支→ReAct；多解+回溯→ToT；固定计划→Plan-execute
:::

:::caution 高频陷阱
5 智能体架构不一定最优；ReAct ≠ Plan-and-execute（前者动态，后者静态）
:::
