---
id: chapter-09
title: "第 9 章：Slurm 调度 — 知识卡片"
description: "Slurm vs Kubernetes、Slurm 命令、GPU 分配知识卡片"
sidebar_position: 9
---

# Slurm 调度 — 知识卡片

## 卡片 1

**Q：紧耦合 MPI 训练选 Slurm 还是 Kubernetes？**

A：**Slurm** — 提供全有或全无的聚合调度，确保作业同步启动。

---

## 卡片 2

**Q：自动扩缩的推理服务选哪个？**

A：**Kubernetes**（HPA/KEDA + Triton/KServe）— 弹性扩缩、滚动更新、自愈。

---

## 卡片 3

**Q：Slurm 中申请 GPU 的标志？**

A：`--gres=gpu:N` — 申请 N 个 GPU。

---

## 卡片 4

**Q：`--exclusive` 标志的作用？**

A：节点不与其他作业共享 — 用于需要整节点带宽/显存的大型训练。

---

## 卡片 5

**Q：MIG 适用于什么场景？**

A：推理密度/利用率提升 — 将单 GPU 分为最多 7 个隔离实例。不常用于需要完整 GPU 的大型分布式训练。
