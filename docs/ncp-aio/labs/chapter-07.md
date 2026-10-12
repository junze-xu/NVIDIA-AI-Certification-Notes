---
id: chapter-07
title: "第 7 章实验：资源分配"
description: "Run:ai 项目配额、优先级实验"
sidebar_position: 7
---

# 实验：资源分配

:::note 预计用时
10 分钟
:::

## 实验目标

- 创建 Run:ai 项目
- 配置配额和优先级

## 练习 1：项目配额

```bash
runai project create team-a --gpu-quota 4 --over-quota-limit 8
runai project set team-a --priority-weight 100
```

:::tip
Guaranteed Quota = 始终可用。Over-quota = 空闲时最大。
:::

## 关键要点

:::info 本章记忆锚点
runai project create --gpu-quota N --over-quota-limit M。Priority weight 决定调度顺序。
:::
