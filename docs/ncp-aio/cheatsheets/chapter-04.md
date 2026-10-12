---
id: chapter-04
title: "第 4 章：Slurm 集群管理 — 速查表"
description: "节点状态、分区配置、作业管理"
sidebar_position: 4
---

# Slurm 集群管理 — 速查表

## 节点状态管理

| 状态 | 含义 | 用途 |
|------|------|------|
| IDLE | 可用、无作业 | 正常运行 |
| ALLOCATED | 运行作业中 | 正常运行 |
| DRAIN | 不接收新作业、当前作业继续 | 计划维护 |
| DOWN | 离线、终止运行中作业 | 硬件故障 |
| RESUME | DRAIN/DOWN 后恢复 | 维护后恢复 |

**考试提示：** DRAIN 保留作业，DOWN 终止作业。维护时务必使用 DRAIN。

## 分区配置

通过 slurm.conf 或 scontrol 定义分区、QOS、运行时长限制。
