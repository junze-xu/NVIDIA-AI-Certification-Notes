---
id: chapter-02
title: "第 2 章：工作负载管理器集成 — 知识卡片"
description: "Slurm 配置文件知识卡片"
sidebar_position: 2
---

# 工作负载管理器集成 — 知识卡片

## 卡片 1

**Q：Slurm 的三个关键配置文件？**

A：slurm.conf（集群配置/节点定义）、gres.conf（GPU 资源定义）、slurmdbd.conf（记账数据库）。

---

## 卡片 2

**Q：Slurm 节点定义的必填参数？**

A：NodeName、CPUs、Gres（gpu:TYPE:COUNT）、RealMemory（MB）。
