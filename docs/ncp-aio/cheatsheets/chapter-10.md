---
id: chapter-10
title: "第 10 章：Mission Control 与 DOCA 服务部署 — 速查表"
description: "Mission Control 工具包、DPU ARM 部署 DOCA、软件栈同步"
sidebar_position: 10
---

# Mission Control 与 DOCA 服务部署 — 速查表

## Mission Control 工具包

| 组件 | 功能 |
|------|------|
| Mission Control API | 集群生命周期编排（Day 0/1/2 自动化） |
| Base Command Manager 集成 | 提供调度器配置和节点镜像管理 |
| Kubernetes 集群部署 | 在 NVIDIA 主机上自动初始化 K8s 集群 |
| 集中策略 | 集群范围配置一致性 + 合规检查 |

**考试提示：** Mission Control 是 NVIDIA 下一代 BCM 之上的编排层。

## DPU ARM 上部署 DOCA 服务

| 步骤 | 说明 |
|------|------|
| 1. 刷写 BlueField DPU | 使用 bnft 或 UEFI 安装 DOCA Host-centric 镜像 |
| 2. 配置 sfnum/taskf | 在 DPU ARM 核心上创建 Switch/Roce 域 |
| 3. 部署 DOCA 服务 | DOCA Telemetry、DOCA Flow、DOCA GPUNetIO |
| 4. 验证 | `doca_serv --status` 检查服务状态 |

**考试陷阱：** DPU 走 ARM 核心运行 DOCA 服务，**不是** x86 主机内核。

## BCM 软件镜像同步

| 操作 | 命令 |
|------|------|
| 创建软件镜像 | `bcm image create --name dgxbk --source /shared/iso` |
| 节点组应用镜像 | `bcm node-group set --image dgxbk --group gpu-workers` |
| 同步到所有节点 | `bcm sync --group gpu-workers` |

:::info 记忆锚点
Mission Control = BCM 上层编排；DOCA 服务跑在 DPU ARM 上；软件镜像 → bcm sync 同步。
:::
