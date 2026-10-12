---
id: chapter-09
title: "第 9 章：Slurm 调度与训练/推理规划 — 速查表"
description："Slurm vs Kubernetes、Slurm 命令、GPU 分配"
sidebar_position: 9
---

# Slurm 调度与训练/推理规划 — 速查表

## Slurm vs Kubernetes

| 标准 | Slurm | Kubernetes |
|------|-------|------------|
| 工作负载类型 | 批处理、HPC、紧耦合 MPI | 长期运行服务、微服务 |
| 调度方式 | 作业聚合调度、回填 | 独立副本调度 |
| 最适用 | 大规模分布式训练 | 自动扩缩容的推理服务 |
| 扩缩容 | 提交时固定 | 动态（HPA/KEDA） |
| 作业时长 | 固定，通常较长 | 持续/长期运行 |

## Slurm 核心命令

| 命令 | 用途 |
|------|------|
| `sbatch script.sh` | 提交批处理作业 |
| `srun cmd` | 交互/阻塞运行作业步骤 |
| `salloc` | 分配资源交互式 shell |
| `squeue` | 查看作业队列 |
| `sinfo` | 查看分区/节点状态 |
| `--gres=gpu:N` | 申请 N 个 GPU |
| `--exclusive` | 节点独占 |
| `--partition=<name>` | 指定分区 |

## GPU 分配策略

| 策略 | 说明 |
|------|------|
| 独占分配 | `--exclusive` — 单作业全节点 |
| 共享分配 | 多作业共享 GPU |
| MIG 分区 | MIG 实例级分配 |
