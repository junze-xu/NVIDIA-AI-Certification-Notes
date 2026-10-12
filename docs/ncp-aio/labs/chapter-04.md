---
id: chapter-04
title: "第 4 章实验：Slurm 节点管理"
description: "节点状态管理、维护操作实验"
sidebar_position: 4
---

# 实验：Slurm 节点管理

:::note 预计用时
10 分钟
:::

## 实验目标

- 管理节点状态
- 执行维护操作

## 练习 1：节点状态

```bash
# 维护
scontrol update NodeName=gpu-node01 State=DRAIN Reason='Maintenance'

# 恢复
scontrol update NodeName=gpu-node01 State=RESUME
```

:::caution
维护用 DRAIN（保留作业）。DOWN 终止作业。
:::

## 关键要点

:::info 本章记忆锚点
DRAIN 不接收新作业但保留当前。DOWN 终止作业。RESUME 恢复。
:::
