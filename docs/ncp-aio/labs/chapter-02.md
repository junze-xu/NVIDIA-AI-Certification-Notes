---
id: chapter-02
title: "第 2 章实验：Slurm 配置"
description: "Slurm 节点定义、分区配置实验"
sidebar_position: 2
---

# 实验：Slurm 配置

:::note 预计用时
12 分钟
:::

## 实验目标

- 配置 slurm.conf
- 定义节点和分区
- 启动 Slurm

## 练习 1：节点定义

```
NodeName=gpu-node[01-04] CPUs=128 Gres=gpu:a100:8 RealMemory=512000 State=UNKNOWN
PartitionName=gpu Nodes=gpu-node[01-04] Default=YES MaxTime=INFINITE State=UP
```

## 练习 2：验证

```bash
sinfo                # 查看分区/节点
scontrol show node gpu-node01
```

## 关键要点

:::info 本章记忆锚点
slurm.conf 定义节点和分区。Gres=gpu:TYPE:COUNT 必填。
:::
