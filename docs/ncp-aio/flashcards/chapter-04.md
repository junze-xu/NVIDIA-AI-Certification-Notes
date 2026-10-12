---
id: chapter-04
title: "第 4 章：Slurm 集群管理 — 知识卡片"
description: "节点状态管理知识卡片"
sidebar_position: 4
---

# Slurm 集群管理 — 知识卡片

## 卡片 1

**Q：DRAIN 和 DOWN 的区别？**

A：DRAIN 不接收新作业但当前作业继续（用于维护）。DOWN 离线并终止运行中作业（用于硬件故障）。

---

## 卡片 2

**Q：维护后恢复节点的命令？**

A：`scontrol update NodeName=node01 State=RESUME`。
