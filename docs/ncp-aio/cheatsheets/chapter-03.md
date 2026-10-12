---
id: chapter-03
title: "第 3 章：BCM 高级运维 — 速查表"
description: "固件管理、InfiniBand 配置、更新回滚"
sidebar_position: 3
---

# BCM 高级运维 — 速查表

## 固件管理

| 组件 | 更新命令 | 回滚标志 |
|------|----------|----------|
| GPU | `cmsh device update firmware -c <cat>` | `--backup` |
| BMC | `cmsh device update bmc --version <ver>` | `--verify-ipmi` |
| NIC | `cmsh device update nic --sync --version <ver>` | N/A |

**要点：**
- 基于 category 的更新（`-c`）为必考
- `--backup` 用于固件回滚
- `--skip-unreachable` 防止离线节点导致失败
- 默认超时：30 秒

## InfiniBand 配置

| 任务 | 命令 |
|------|------|
| 子网管理器 | BCM 网络策略中配置 |
| 链路状态 | `ibstat`（Polling = SM 问题） |
| 网络验证 | `ibdiagnet`（仅从 SM 节点运行） |
