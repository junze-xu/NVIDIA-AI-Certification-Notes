---
id: chapter-01
title: "第 1 章实验：BCM 安装与初始化"
description: "BCM 集群初始化、节点添加实验"
sidebar_position: 1
---

# 实验：BCM 安装与初始化

:::note 预计用时
15 分钟
:::

## 实验目标

- 掌握 BCM 架构
- 初始化集群
- 添加计算节点

## 练习 1：前置检查

```bash
# 检查 PostgreSQL
systemctl status postgresql

# 检查 NTP
timedatectl status

# 检查 DNS
cat /etc/hosts
```

## 练习 2：添加节点

```bash
device add gpu-node01 ip=192.168.1.101
device list -s
```

## 关键要点

:::info 本章记忆锚点
头节点运行 BCM 服务+数据库+调度器。管理网络隔离 VLAN。前置条件：PostgreSQL 12+、NTP、静态 IP。
:::
