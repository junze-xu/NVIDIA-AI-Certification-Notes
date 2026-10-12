---
id: chapter-10
title: "第 10 章实验：Fabric 安全加固"
description: "pkey 隔离设计、DOCA 安全能力、零信任边界实验"
sidebar_position: 10
---

# 实验：Fabric 安全加固

:::note 预计用时
20 分钟
:::

## 实验目标

- 设计正确的 pkey 隔离方案
- 区分 DOCA 安全能力
- 理解 fabric 级 vs 主机级安全边界

## 练习 1：跨租户广播泄漏排查

租户 B 偶尔看到租户 A 的广播流量：

| 可能原因 | 是否正确 |
|----------|----------|
| 租户 A 主机在默认 pkey 0x7FFF 上为 FULL | ✓ |
| leaf 交换机上未安装 DOCA Flow | ✗ |
| SM 运行在 BlueField DPU 上 | ✗ |
| 流量使用 RoCEv2 而非原生 IB | ✗ |

## 练习 2：DOCA 安全能力匹配

| 需求 | DOCA 能力 |
|------|-----------|
| 线速 ACL + 有状态防火墙 | DOCA Flow |
| 硬件线速加密东西向流量 | DOCA IPsec |
| 主机被攻陷仍安全监控 | DOCA App Shield |
| 时间同步 | DOCA Firefly（非安全） |

## 练习 3：安全边界识别

| 示例 | 层级 |
|------|------|
| pkey 分区 | Fabric 级 |
| 交换机 ACL | Fabric 级 |
| BlueField DPU 防火墙卸载 | 主机级 |
| DOCA App Shield | 主机级 |

## 关键要点

:::info 本章记忆锚点
默认 pkey FULL = 跨租户泄漏根因。DOCA Flow = 线速 ACL。App Shield = DPU 内省。管理面带外独立。
:::
