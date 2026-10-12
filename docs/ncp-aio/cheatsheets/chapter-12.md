---
id: chapter-12
title: "第 12 章：综合运维场景与考试冲刺 — 速查表"
description: "BCM 故障排除、NGC 容器故障、端到端场景"
sidebar_position: 12
---

# 综合运维场景与考试冲刺 — 速查表

## BCM 故障排除

| 症状 | 诊断 | 修复 |
|------|------|------|
| 节点无法加入集群 | `bcm node check --id <node>` | 验证网络+SSH+镜像 |
| 作业调度卡住 | `squeue` + `scontrol show job` | 清除 stuck job + 重启 slurmctld |
| 镜像同步失败 | `bcm sync --status` | 检查 NFS/共享挂载 |
| 大规模节点宕机 | `bcm node-group health` | 分批隔离 → 根因 → 修复 |

## NGC 容器部署故障

| 错误 | 原因 | 修复 |
|------|------|------|
| ImagePullBackOff | 未配置 registry secret | `kubectl create secret docker-registry ngc-secret --docker-server=nvcr.io` |
| CrashLoopBackOff | 容器缺少 GPU 资源 | 检查 resources 中 nvidia.com/gpu |
| OOMKilled | GPU 显存不足 | 减少 batch size 或申请更多 GPU |

## 端到端综合场景

| 场景 | 步骤 |
|------|------|
| 新团队加入 | 1. 创建 Namespace → 2. ResourceQuota → 3. Run:ai Project → 4. 部署 NIM Pod |
| 训练集群瓶颈 | 1. `dcgm-exporter` 看 GPU 利用率 → 2. 检查 IO (iostat) → 3. 检查 NVLink → 4. 扩容/优化 |
| Slurm+K8s 混合 | Slurm 用于训练作业；K8s 用于推理服务；通过 BCM 统一管理节点池 |

## 考试冲刺清单

| 领域 | 必会命令/概念 |
|------|---------------|
| BCM | `bcm sync` / `bcm node-group` / 软件镜像 |
| Slurm | `squeue` / `sinfo` / DRAIN 状态 |
| Kubernetes | `kubectl quota` / GPU Operator / NIM Pod YAML |
| Run:ai | `runai project create` / GPU 配额 / 优先级 |
| Mission Control | 编排层概念 + K8s 集群部署 |
| DOCA | DPU ARM 核心 + 服务部署路径 |
| MIG | `nvidia-smi mig -cgi` / 硬性隔离 |
| NVSwitch | `nvidia-smi nvlink` / fabricmanager |
| NGC | Registry Secret + ImagePullBackOff 排查 |

:::info 记忆锚点
BCM=sync+node-group；Slurm=DRAIN维护；K8s=quota+GPU Operator；Run:ai=project+over-quota；Mission Control=编排；DOCA=DPU ARM；MIG=A100+硬性隔离。
:::
