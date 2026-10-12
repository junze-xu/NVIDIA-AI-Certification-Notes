---
id: chapter-03
title: "第 3 章：子网管理器与 UFM — 速查表"
description: "OpenSM、UFM、LID 分配、SM 选举"
sidebar_position: 3
---

# 子网管理器与 UFM — 速查表

## SM 选举规则

| 优先级 | 规则 |
|--------|------|
| 1 | sm_priority 最高的 SM 获胜 |
| 2 | 优先级相同时，GUID 最小的节点上的 SM 获胜 |

## SM 故障切换

| 状态 | 行为 |
|------|------|
| 主 SM 运行 | 分配 LID、计算路由、响应 SMP |
| 主 SM 崩溃 | 最高优先级备用 SM 自动接管 → 重新发现扫描 |
| 同一时刻 | 只能有一个活动主 SM |

## LID 与 LMC

| 参数 | 说明 |
|------|------|
| LID | 16 位二层地址，用于转发表 |
| LMC | LID 掩码计数，每端口 LID 数 = 2^LMC |
| LMC=2 | 每端口 4 个 LID（多路径路由） |

## OpenSM vs UFM

| 功能 | OpenSM | UFM |
|------|--------|-----|
| 子网管理（LID、路由） | ✓ | ✓（内嵌 SM） |
| SM 故障切换 | ✓ | ✓ |
| 全网遥测/历史分析 | ✗ | ✓ |
| REST API 配置发放 | ✗ | ✓ |
| 拥塞/健康分析 | ✗ | ✓ |
| SHARP 聚合树管理 | ✗ | ✓ |

## 核心 SM 命令

| 命令 | 用途 |
|------|------|
| opensm | 子网管理器守护进程 |
| sminfo | 查询活动/备用 SM 信息 |
| ibportstate | 查询/修改端口物理/逻辑状态 |
| ibnetdiscover | 发现并报告 fabric 拓扑 |
