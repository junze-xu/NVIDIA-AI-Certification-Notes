---
id: chapter-01
title: "第 1 章：BCM 安装与初始化 — 知识卡片"
description: "BCM 架构、cmsh 命令知识卡片"
sidebar_position: 1
---

# BCM 安装与初始化 — 知识卡片

## 卡片 1

**Q：BCM 头节点的角色？**

A：运行 BCM 服务、数据库（PostgreSQL）、调度器（Slurm/PBS）。未配置 HA 时为单点故障。

---

## 卡片 2

**Q：管理网络的作用？**

A：控制平面通信（cmsh 命令、监控数据、镜像同步），隔离 VLAN，不用于作业数据。

---

## 卡片 3

**Q：BCM 添加节点的命令？**

A：`device add <name> ip=<ip>` — 必须指定 IP。
