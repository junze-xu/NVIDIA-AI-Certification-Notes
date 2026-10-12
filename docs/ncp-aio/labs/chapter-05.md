---
id: chapter-05
title: "第 5 章实验：Kubernetes GPU 操作"
description: "GPU Operator 部署、资源配额实验"
sidebar_position: 5
---

# 实验：Kubernetes GPU 操作

:::note 预计用时
15 分钟
:::

## 实验目标

- 部署 GPU Operator
- 配置资源配额

## 练习 1：GPU Operator

```bash
helm install gpu-operator nvidia/gpu-operator -n gpu-operator --create-namespace
```

## 练习 2：GPU 配额

```bash
kubectl create namespace ml-team-a
kubectl create quota gpu-limit --hard=nvidia.com/gpu=8 -n ml-team-a
```

## 关键要点

:::info 本章记忆锚点
GPU Operator 自动化 GPU 栈部署。ResourceQuota 用 --hard=nvidia.com/gpu=N。
:::
