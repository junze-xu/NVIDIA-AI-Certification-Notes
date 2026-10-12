---
id: chapter-06
title: "第 6 章实验：Kubernetes 与 Slurm 编排"
description: "K8s GPU YAML、Slurm 脚本、Base Command UI 实验"
sidebar_position: 6
---

# 实验：Kubernetes 与 Slurm 编排

:::note 预计用时
18 分钟
:::

## 实验目标

- 能编写请求 GPU 的 Kubernetes Deployment YAML
- 能编写使用 GPU 的 Slurm 批处理脚本
- 理解 K8s 和 Slurm 的编排差异

## 练习 1：Kubernetes GPU Deployment

编写一个请求 2 块 GPU 的推理服务 Deployment：

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: inference-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: inference
  template:
    metadata:
      labels:
        app: inference
    spec:
      containers:
      - name: inference
        image: nvcr.io/nvidia/pytorch:24.01-py3
        resources:
          requests:
            nvidia.com/gpu: 2
          limits:
            nvidia.com/gpu: 2
      # 补充：加入节点分散
      affinity:
        podAntiAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
          - topologyKey: kubernetes.io/hostname
            labelSelector:
              matchLabels:
                app: inference
```

:::tip Key points
- `nvidia.com/gpu: 2`：请求 2 块 GPU
- `requests = limits`：GPU 不可超卖
- `podAntiAffinity`：确保副本分布在不同节点
:::

## 练习 2：Slurm 批处理脚本

编写一个请求 4 节点 × 每节点 8 块 A100 的分布式训练脚本：

```bash
#!/bin/bash
#SBATCH --job-name=distributed-training
#SBATCH --nodes=4
#SBATCH --gres=gpu:a100:8
#SBATCH --ntasks-per-node=1
#SBATCH --cpus-per-task=64
#SBATCH --mem=512G
#SBATCH --time=48:00:00

# 启动分布式训练
python -m torch.distributed.launch \
    --nproc_per_node=8 \
    --nnodes=4 \
    train.py
```

:::note
总 GPU 数 = 4 节点 × 8 GPU/节点 = 32 块 A100。`--ntasks-per-node=1` 因为每个节点只需一个训练进程管理所有 GPU。
:::

## 练习 3：编排器选型对比

为以下场景选择编排器（Kubernetes 或 Slurm），并简要说明原因：

| 场景 | 选择 | 原因 |
|------|------|------|
| 实时在线推理服务 | | |
| 24 小时批量训练作业 | | |
| MLOps CI/CD 流水线 | | |
| 多节点 HPC 仿真 | | |
| 需要自动扩缩容的服务 | | |

<details>
<summary>查看参考答案</summary>

| 场景 | 选择 | 原因 |
|------|------|------|
| 实时在线推理 | Kubernetes | 自动扩缩容、负载均衡 |
| 24h 批量训练 | Slurm | Gang 调度、回填、资源预留 |
| MLOps CI/CD | Kubernetes | Helm/容器原生集成 |
| HPC 仿真 | Slurm | InfiniBand 原生、紧耦合 |
| 自动扩缩容 | Kubernetes | HPA 支持 |

</details>

## 练习 4：Base Command Platform 架构

浏览 Base Command Manager 的 UI 截图或文档，回答：

- BCP 管理的资源对象有哪些？（GPU 节点、作业队列、用户配额...）
- BCP 作为管理层，底层依赖什么调度器？

<details>
<summary>查看参考答案</summary>

- 资源对象：GPU 节点池、作业队列、用户/组配额、数据集、环境模板
- 底层调度器：Slurm（批量）或 Kubernetes（容器）

</details>

## 关键要点

:::info 本章记忆锚点
Slurm 用于批量训练作业（排队、检查点、多日运行），Kubernetes 用于推理服务（扩展、负载均衡、短生命周期）——Base Command 提供统一管理层。
:::
