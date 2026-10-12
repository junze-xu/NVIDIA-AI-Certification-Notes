---
id: chapter-05
title: "第 5 章：分区、QoS 与诊断工具 — 速查表"
description: "pkey 分区、SL2VL、ib 系列诊断工具"
sidebar_position: 5
---

# 分区、QoS 与诊断工具 — 速查表

## Pkey 成员规则

| 成员类型 | Bit 15 | 通信权限 |
|----------|--------|----------|
| Full 成员 | 1 | 可与 full 和 limited 通信 |
| Limited 成员 | 0 | 只能与 full 成员通信 |
| Limited-Limited | - | **永远被阻止** |

## 多租户 Pkey 设计

| 角色 | 成员类型 | Pkey |
|------|----------|------|
| 租户 A 主机 | Full | 0x8001 |
| 租户 B 主机 | Full | 0x8002 |
| 共享存储 | Limited | 0x8001 + 0x8002 |

## IB QoS 机制

| 步骤 | 内容 |
|------|------|
| 1. 分类 | OpenSM QoS 策略按 pkey/service-id 分配 Service Level |
| 2. 映射 | SL2VL 表将 SL 映射到 Virtual Lane |
| 3. 仲裁 | 不同 VL 独立缓冲/仲裁，防止队头阻塞 |

## 诊断工具速查

| 命令 | 功能范围 | 核心能力 |
|------|----------|----------|
| ibstat | 本地 HCA | 端口速率、宽度、状态 |
| ibnetdiscover | 全网 SMP | 拓扑映射 |
| ibdiagnet | 全网 | 一站式健康扫描（布线+路由+计数器） |
| ibqueryerrors | 全网 | 计数器阈值违规报告 |
| ibportstate | 单端口 | 查询/修改物理/逻辑状态（启用/禁用） |
| ibclearcounters | 全网 | 将 PM 性能计数器清零 |
