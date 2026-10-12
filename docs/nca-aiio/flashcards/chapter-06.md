---
id: chapter-06
title: "第 6 章：Kubernetes 与 Slurm 编排 — 知识卡片"
description: "K8s GPU 配置、Slurm 调度、Base Command 平台知识卡片"
sidebar_position: 6
---

# Kubernetes 与 Slurm 编排 — 知识卡片

## 卡片 1

**Q：Kubernetes 和 Slurm 分别适合什么类型的 AI 工作负载？**

A：
- **Kubernetes**：容器化推理服务、MLOps 流水线、需要自动扩展/负载均衡的微服务
- **Slurm**：HPC 批量训练作业、多节点 MPI 工作负载、有复杂调度策略的 GPU 集群

简记：**K8s = 服务**，**Slurm = 批量**。

---

## 卡片 2

**Q：Kubernetes Pod 中请求 4 块 GPU 的正确 YAML 语法是什么？**

A：
```yaml
resources:
  requests:
    nvidia.com/gpu: 4
  limits:
    nvidia.com/gpu: 4
```

:::caution
requests 必须等于 limits，GPU 不可超卖。资源名称是 `nvidia.com/gpu`（不是 `gpu`）。
:::

---

## 卡片 3

**Q：在 Slurm 中，跨 4 个节点每节点请求 2 块 A100 GPU 的指令是什么？**

A：
```bash
#SBATCH --nodes=4
#SBATCH --gres=gpu:a100:2
```

注意：`--gres=gpu:<类型>:<数量>` 是**每节点**的 GPU 数量。总 GPU = 节点数 × 每节点 GPU。

---

## 卡片 4

**Q：在 Kubernetes 中，使用 Pod 反亲和性跨节点分散副本时，topologyKey 应设为？**

A：`topologyKey: kubernetes.io/hostname`

- `hostname`：每个节点最多 1 个 Pod
- `zone/region`：每个可用区/区域最多 1 个 Pod

---

## 卡片 5

**Q：Slurm 中 `--gres=gpu:4` 和 `--gpus=4` 的区别是？**

A：
- `--gres=gpu:4`：**每节点** 4 块 GPU
- `--gpus=4`：**整个作业** 共 4 块 GPU

:::caution 高频考点
`--gres=gpu:4` = 每节点；`--gpus=4` = 总计。分清差异！
:::

---

## 卡片 6

**Q：Base Command Manager (BCM) 的主要用途是什么？**

A：本地 DGX 集群管理，功能包括：用户/组管理、AD/LDAP 集成、Web UI 作业提交、监控、资源策略。底层与 Slurm 配合工作。

---

## 卡片 7

**Q：Kubernetes GPU Device Plugin 做什么？**

A：作为 DaemonSet 运行在每个节点上：
1. 发现节点上的 GPU
2. 向 kubelet 注册 `nvidia.com/gpu` 扩展资源
3. 在 Pod 调度到该节点后，将具体 GPU ID 注入容器

:::note
没有 Device Plugin，Kubernetes 无法调度 GPU Pod。
:::

---

## 卡片 8

**Q：Kubernetes Pod 能否超分 GPU（设置 requests < limits）？**

A：**不能。** GPU 是扩展资源，不可超分。requests 必须等于 limits。设置 `limits > requests` 会导致验证错误或异常行为。

---

## 卡片 9

**Q：Base Command Platform (BCP) 和 Base Command Manager (BCM) 的区别？**

A：
- **BCP**：统一作业调度/监控平台（SaaS 或本地），支持 Slurm/K8s 后端、数据集管理
- **BCM**：DGX 系统本地集群管理

BCP 是超集，BCM 专注 DGX 场景。两者都是管理层，不替代底层调度器。

---

## 卡片 10

**Q：Kubernetes 中 nodeSelector 和 nodeAffinity 的区别？**

A：
- **nodeSelector**：简单的键值匹配（如 `gpu-type: a100`）
- **nodeAffinity**：支持复杂逻辑（OR/NOT）、`required` 和 `preferred` 两种策略

简单场景用 nodeSelector，需要 OR/NOT 逻辑时用 nodeAffinity。

---

## 卡片 11

**Q：Slurm 中 `--ntasks-per-node=1` 在深度学习场景下意味着什么？**

A：每个节点运行 1 个任务。深度学习训练通常是单任务多 GPU 模式（一个进程使用节点上的所有 GPU），所以通常设为 1。

---

## 卡片 12

**Q：在多节点训练场景下，Slurm 推荐使用哪种任务数设置？**

A：`--ntasks-per-node=1`（每个节点一个训练进程）。分布式训练框架（如 PyTorch DDP）在节点内部通过环境变量协调 GPU，不需要多个任务。
