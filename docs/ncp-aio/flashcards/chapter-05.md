---
id: chapter-05
title: "第 5 章：Kubernetes 与 Run:ai — 知识卡片"
description: "GPU Operator、资源配额知识卡片"
sidebar_position: 5
---

# Kubernetes 与 Run:ai — 知识卡片

## 卡片 1

**Q：GPU Operator 中各组件的功能？**

A：device-plugin 广告 GPU、dcgm-exporter 暴露指标、container-toolkit 运行时配置、gpu-feature-discovery 节点标签。

---

## 卡片 2

**Q：Kubernetes GPU 资源配额语法？**

A：`kubectl create quota gpu-limit --hard=nvidia.com/gpu=8 -n namespace`。
