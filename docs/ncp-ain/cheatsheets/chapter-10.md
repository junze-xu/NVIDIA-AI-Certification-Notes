---
id: chapter-10
title: "第 10 章：Fabric 安全与零信任 — 速查表"
description: "pkey 安全隔离、DOCA 安全能力、零信任边界"
sidebar_position: 10
---

# Fabric 安全与零信任 — 速查表

## Pkey 隔离原理

| 要点 | 说明 |
|------|------|
| 工作机制 | HCA + 交换机强制成员/隔离控制 |
| 通信前提 | 共享共同 pkey 才可建立 QP/交换流量 |
| 默认 pkey | 0x7FFF（管理流量），应设为 LIMITED |
| 隔离性质 | 硬性 fabric 级边界，非仅 QoS |

## Fabric 级 vs 主机级安全

| 层级 | 机制 |
|------|------|
| Fabric 级 | pkey 分区、交换机 ACL |
| 主机级 | BlueField DPU 防火墙卸载、DOCA App Shield |

## DOCA 安全能力

| 能力 | 功能 |
|------|------|
| DOCA Flow | 线速 ACL + 有状态防火墙（线速，从主机 CPU 卸载） |
| DOCA IPsec | 硬件线速加密/解密东西向流量 |
| DOCA App Shield | 无代理 DPU 主机内省与威胁检测 |
| DOCA Telemetry | 性能采集（非安全功能） |
| DOCA Firefly | PTP 时间同步（非安全功能） |

## 交换机加固

| 操作 | 效果 |
|------|------|
| 禁用 Telnet、HTTP | 减少攻击面 |
| 保留 SSH、HTTPS | 加密管理通道 |
| 分离管理面 | 带外网络 + 跳板机 |

## 跨租户广播泄漏排查

| 可能原因 | 说明 |
|----------|------|
| 主机默认 pkey 为 FULL | 在租户分区外接收/发送广播流量 |
| DOCA Flow 缺失 | IB 交换机级别，不导致广播泄漏 |
| SM 运行位置 | 不影响数据流量 pkey 强制 |
