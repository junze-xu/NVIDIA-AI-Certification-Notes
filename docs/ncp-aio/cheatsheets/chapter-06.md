---
id: chapter-06
title: "第 6 章：多租户工作负载部署 — 速查表"
description: "NIM 部署、Triton、GPU 资源请求"
sidebar_position: 6
---

# 多租户工作负载部署 — 速查表

## Kubernetes 上的 NVIDIA NIM

```yaml
containers:
- name: nim
  image: nvcr.io/nim/<model>:latest
  resources:
    requests:
      nvidia.com/gpu: 2  # 必须指定
    limits:
      nvidia.com/gpu: 2  # 必须匹配 request
```

**考试陷阱：** 缺少 `nvidia.com/gpu` → Pod 永不调度。request ≠ limit → 报错。

## Triton Inference Server

- 多模型部署
- 动态批处理
- 并发执行
- 版本控制
