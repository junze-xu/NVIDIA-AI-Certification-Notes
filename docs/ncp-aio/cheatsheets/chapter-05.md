---
id: chapter-05
title: "第 5 章：Kubernetes 与 Run:ai — 速查表"
description: "GPU Operator、资源配额、GPU 调度"
sidebar_position: 5
---

# Kubernetes 与 Run:ai — 速查表

## GPU Operator 组件

| 组件 | 功能 |
|------|------|
| nvidia-device-plugin | 向 kubelet 广告 GPU，调度 Pod 到 GPU 节点 |
| nvidia-dcgm-exporter | Prometheus 格式暴露 GPU 指标 |
| nvidia-container-toolkit | 修改容器运行时以启用 GPU 访问 |
| gpu-feature-discovery | 为节点打 GPU 属性标签 |

## Kubernetes GPU 资源配额

```bash
kubectl create namespace ml-team-a
kubectl create quota gpu-limit --hard=nvidia.com/gpu=8 -n ml-team-a
```

**考试提示：** ResourceQuota 是独立对象，使用 `--hard=nvidia.com/gpu=N` 语法。
