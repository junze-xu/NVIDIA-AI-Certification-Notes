---
id: chapter-03
title: "第 3 章：多智能体协作模式 — 速查表"
description: "Supervisor/worker、分层树、协作辩论、顺序流水线"
sidebar_position: 3
---

# 多智能体协作模式 — 速查表

## 协调模式对比

| 模式 | 结构 | 特征 |
|------|------|------|
| Supervisor/worker | 中央 agent 路由+委派 | 专家不互通信 |
| 分层树 | 多级 manager 委派 | 中层管下层 |
| 协作辩论/评审 | agent 迭代挑战彼此 | 评审互动 |
| 顺序流水线 | 固定线性链 | 无条件路由 |
| 点对点 mesh | 无中央权威 | 全连接 |

## 选择规则

| 场景 | 模式 |
|------|------|
| 中央分类后派发给专家 | Supervisor/worker |
| 领域 manager→专门 worker | 分层树 |
| agent 互相评审改进 | 协作辩论 |
| 固定流程 | 顺序流水线 |

:::info 记忆锚点
中央路由→Supervisor；多级管理→分层树；互相评审→辩论
:::
