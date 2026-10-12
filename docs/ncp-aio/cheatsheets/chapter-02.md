---
id: chapter-02
title: "第 2 章：工作负载管理器集成 — 速查表"
description: "Slurm 配置文件、节点定义、分区配置"
sidebar_position: 2
---

# 工作负载管理器集成 — 速查表

## BCM 上的 Slurm 关键配置文件

| 文件 | 用途 |
|------|------|
| slurm.conf | 集群配置、节点定义 |
| gres.conf | GPU 资源定义 |
| slurmdbd.conf | 记账数据库配置 |

## Slurm 节点定义

```
NodeName=gpu-node[01-04] CPUs=128 Gres=gpu:a100:8 RealMemory=512000 State=UNKNOWN
PartitionName=gpu Nodes=gpu-node[01-04] Default=YES MaxTime=INFINITE State=UP
```

**必填参数：** NodeName、CPUs、Gres（gpu:TYPE:COUNT）、RealMemory
