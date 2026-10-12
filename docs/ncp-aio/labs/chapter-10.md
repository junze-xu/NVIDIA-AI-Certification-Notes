---
id: chapter-10
title: "第 10 章实验：Mission Control 与 DOCA"
description: "Mission Control 集群编排、DOCA 服务部署实验"
sidebar_position: 10
---

# 实验：Mission Control 与 DOCA

:::note 预计用时 20 分钟 :::

## 实验目标

- 理解 Mission Control 集群编排流程
- 掌握 DOCA 服务部署路径
- 验证 BCM 软件镜像同步

## 练习 1：Mission Control 集群编排

| 步骤 | 操作 |
|------|------|
| 1 | 在 Mission Control 控制台创建集群配置文件 |
| 2 | 指定节点规模（3 master + 8 worker GPU 节点） |
| 3 | 选择调度器（Slurm 或 Kubernetes） |
| 4 | 部署 + 验证 `kubectl get nodes` 或 `sinfo` |

## 练习 2：DPU DOCA 服务部署

| 步骤 | 操作 |
|------|------|
| 1 | SSH 登录 BlueField DPU (ARM) |
| 2 | `doca_serv --status` 验证 DOCA 运行时 |
| 3 | 启动 DOCA Telemetry 服务 |
| 4 | `ibv_devinfo` 验证 RDMA 设备就绪 |

## 练习 3：BCM 镜像同步验证

```bash
# 1. 创建新镜像
bcm image create --name cuda12k --source /shared/cuda12

# 2. 应用到 GPU 节点组
bcm node-group set --image cuda12k --group gpus

# 3. 同步到节点
bcm sync --group gpus

# 4. 验证
bcm node check --group gpus
```

:::info 本章记忆锚点
Mission Control 编排 Day 0/1/2；DOCA 跑在 DPU ARM 上；BCM 同步 = bcm sync。
:::
