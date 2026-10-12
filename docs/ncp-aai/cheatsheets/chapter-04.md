---
id: chapter-04
title: "第 4 章：编排框架与状态管理 — 速查表"
description: "LangGraph、AutoGen、CrewAI、NeMo AIQ、检查点/恢复"
sidebar_position: 4
---

# 编排框架与状态管理 — 速查表

## 框架对比

| 框架 | 核心模型 | 特点 |
|------|----------|------|
| LangGraph | StateGraph（节点+边+持久状态） | 条件分支+检查点+human-in-loop |
| AutoGen | GroupChat（对话驱动） | 自由对话、最小工作流结构 |
| CrewAI | Sequential/层次化 | 固定任务顺序 |
| NeMo AIQ | 框架无关包装器 | 编排+可观测性 |

## 关键选择

| 需求 | 框架 |
|------|------|
| 条件分支+检查点+HITL | LangGraph |
| 自由对话+最小结构 | AutoGen |
| 固定顺序多任务 | CrewAI |

:::info 记忆锚点
条件状态+恢复→LangGraph；自由对话→AutoGen；顺序→CrewAI
:::
