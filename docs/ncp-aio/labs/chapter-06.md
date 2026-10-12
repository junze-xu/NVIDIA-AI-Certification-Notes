---
id: chapter-06
title: "第 6 章实验：多租户部署"
description: "NIM 部署、GPU 资源请求实验"
sidebar_position: 6
---

# 实验：多租户部署

:::note 预计用时
12 分钟
:::

## 实验目标

- 部署 NIM 容器
- 配置 GPU 资源

## 练习 1：NIM 部署

```yaml
containers:
- name: nim
  image: nvcr.io/nim/<model>:latest
  resources:
    requests:
      nvidia.com/gpu: 2
    limits:
      nvidia.com/gpu: 2
```

:::caution
request 必须等于 limit。缺少 GPU 资源 → Pod 永不调度。
:::

## 关键要点

:::info 本章记忆锚点
NIM 部署必须指定 nvidia.com/gpu 资源。request = limit。
:::
