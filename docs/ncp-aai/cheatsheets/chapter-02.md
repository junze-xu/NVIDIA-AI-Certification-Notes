---
id: chapter-02
title: "第 2 章：结构化推理与工具调用 — 速查表"
description: "Tree-of-thought 回溯、JSON-schema 函数调用、工具参数约束"
sidebar_position: 2
---

# 结构化推理与工具调用模式 — 速查表

## 推理模式选择

| 模式 | 核心能力 | 考试要点 |
|------|----------|----------|
| ReAct | 对观察反应，无分支探索 | 顺序工具调用 |
| Tree-of-thought | 多分支评估+回溯 | 死胡同多的问题 |
| Chain-of-thought | 单一线性推理 | 无回溯需求 |

## 工具调用可靠性

| 技术 | 作用 | 确保 |
|------|------|------|
| JSON-schema 受限调用 | 显式类型+必填字段 | 格式正确、类型安全 |
| 参数校验 | 服务端 schema 校验 | 业务规则满足 |

:::info 记忆锚点
多路径+死胡同→ToT 回溯；可靠调用→JSON-schema；单路径→CoT/ReAct
:::
