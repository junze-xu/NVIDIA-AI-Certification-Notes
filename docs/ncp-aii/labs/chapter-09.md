---
id: chapter-09
title: "第 9 章实验：Slurm 调度"
description: "Slurm 命令、GPU 分配、作业提交实验"
sidebar_position: 9
---

# 实验：Slurm 调度

:::note 预计用时
15 分钟
:::

## 实验目标

- 掌握 Slurm 核心命令
- 提交 GPU 作业
- 理解 Slurm vs Kubernetes

## 练习 1：Slurm 作业提交

```bash
#!/bin/bash
#SBATCH --job-name=gpu_test
#SBATCH --gres=gpu:8
#SBATCH --exclusive
#SBATCH --partition=train

srun python train.py
```

## 练习 2：常用命令

```bash
sbatch script.sh     # 提交作业
squeue               # 查看作业队列
sinfo                # 查看节点状态
scancel <job_id>     # 取消作业
salloc --gres=gpu:1  # 分配交互资源
```

:::tip
紧耦合训练选 Slurm（聚合调度）。推理服务选 Kubernetes（弹性扩缩）。
:::

## 关键要点

:::info 本章记忆锚点
sbatch 提交，--gres=gpu:N 申请 GPU，--exclusive 独占节点。Slurm 做训练，K8s 做推理。
:::
