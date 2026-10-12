---
id: chapter-06
title: "第 6 章：多租户工作负载部署 — 知识卡片"
description: "NIM 部署、GPU 资源请求知识卡片"
sidebar_position: 6
---

# 多租户工作负载部署 — 知识卡片

## 卡片 1

**Q：NIM Pod 缺少 nvidia.com/gpu 资源会怎样？**

A：Pod 永不调度 — 必须指定 GPU 资源请求和限制。

---

## 卡片 2

**Q：NIM 部署中 request 和 limit 的关系？**

A：request 必须等于 limit — 否则报错。
