---
id: chapter-05
title: "第 5 章实验：分区配置与诊断工具使用"
description: "pkey 设计、SL2VL 调优、ib 诊断命令实验"
sidebar_position: 5
---

# 实验：分区配置与诊断工具使用

:::note 预计用时
25 分钟
:::

## 实验目标

- 设计正确的 pkey 多租户隔离方案
- 理解 SL2VL 映射
- 选择正确的 ib 诊断命令

## 练习 1：Pkey 成员规则验证

判断以下配置是否允许通信：

| 场景 | 节点 A 成员类型 | 节点 B 成员类型 | 同 pkey | 可通信？ |
|------|----------------|----------------|---------|----------|
| 1 | Full | Full | 是 | ✓ |
| 2 | Full | Limited | 是 | ✓ |
| 3 | Limited | Limited | 是 | **✗** |

## 练习 2：诊断命令选择

| 需求 | 正确命令 |
|------|----------|
| 查询本地 HCA 端口速率和状态 | `ibstat` |
| 全网一站式健康扫描 | `ibdiagnet` |
| 将 PM 计数器清零 | `ibclearcounters` |
| 启用被管理性禁用的端口 | `ibportstate <lid> <port> enable` |

## 练习 3：多租户 Pkey 设计

要求：租户 A 与 B 完全隔离，但共享存储。

| 主机/存储 | Pkey | 成员类型 |
|-----------|------|----------|
| 租户 A 主机 | 0x8001 | Full |
| 租户 B 主机 | 0x8002 | Full |
| 共享存储 | 0x8001 + 0x8002 | Limited |

> 存储为 Limited：响应但不同租户 pkey 不重叠，跨租户流量不可能。

## 关键要点

:::info 本章记忆锚点
Limited-Limited 永远被阻止。ibdiagnet = 一站式扫描。ibportstate = 端口状态控制。
:::
