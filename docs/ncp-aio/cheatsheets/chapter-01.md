---
id: chapter-01
title: "第 1 章：BCM 安装与集群初始化 — 速查表"
description: "BCM 架构、安装前置条件、cmsh 命令"
sidebar_position: 1
---

# BCM 安装与集群初始化 — 速查表

## BCM 架构组件

| 组件 | 用途 | 关键细节 |
|------|------|----------|
| 头节点 | BCM 服务、数据库、调度器 | 未配置 HA 时为单点故障 |
| 管理网络 | 控制平面通信 | 隔离 VLAN；不用于作业数据 |
| 计算节点 | GPU/CPU 工作负载执行 | 通过心跳向头节点汇报 |

## 安装前置条件

- 头节点须使用 NVIDIA 认证服务器
- PostgreSQL 12+
- 管理网络静态 IP
- 所有节点 NTP 时间同步
- DNS 或 /etc/hosts 含所有节点主机名

## 核心 cmsh 命令

| 任务 | 命令 |
|------|------|
| 添加节点 | `device add <name> ip=<ip>` |
| 列出设备 | `device list -s` |
| 创建 category | `category add <name>` |
