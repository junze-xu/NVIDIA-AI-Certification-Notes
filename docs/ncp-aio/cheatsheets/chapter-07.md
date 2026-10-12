---
id: chapter-07
title: "第 7 章：资源分配与 NGC 容器 — 速查表"
description: "Run:ai 项目配额、优先级、NGC 容器管理"
sidebar_position: 7
---

# 资源分配与 NGC 容器 — 速查表

## Run:ai Project 资源分配

| 设置 | 用途 |
|------|------|
| Guaranteed Quota | 始终可用的最低资源（预留） |
| Over-quota Limit | 集群空闲时的最大资源（Fair-share） |
| Priority Weight | 资源受限时的调度顺序 |
| Node Affinity | 将 project 绑定到特定节点 |

## 关键命令

```bash
runai project create team-a --gpu-quota 4 --over-quota-limit 8
runai project set team-a --priority-weight 100
```
