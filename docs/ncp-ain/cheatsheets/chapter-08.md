---
id: chapter-08
title: "第 8 章：AR/PCC 与 IB vs Spectrum-X 权衡 — 速查表"
description: "自适应路由、可编程拥塞控制、fabric 选型权衡"
sidebar_position: 8
---

# AR/PCC 与 IB vs Spectrum-X 权衡 — 速查表

## 静态 ECMP 的 AI 流量问题

| 问题 | 原因 |
|------|------|
| 部分链路拥塞、部分闲置 | 少数超大 elephant flow 哈希冲突 |
| AI 流量特点 | 少量极大、长生命周期的流（all-reduce） |
| 企业 Web 流量特点 | 大量小型多样流 → ECMP 统计分布良好 |

## Spectrum-X vs 静态 ECMP 方案

| 方案 | 机制 |
|------|------|
| 自适应路由（AR） | 按报文喷洒到多条实时可用路径 |
| 可编程拥塞控制（PCC） | 摄取交换机/DPU 遥测 → 微秒级调整发送速率 |

## IB vs Spectrum-X 权衡矩阵

| 因素 | 选择 InfiniBand | 选择 Spectrum-X |
|------|----------------|-----------------|
| 性能要求 | 极致最低延迟 | 接近 IB 的性能 |
| 租户模式 | 单租户 | 多租户 |
| 团队技能 | 有子网管理经验 | 以太网/IP 工程师 |
| 网内计算 | 需要 SHARP | 无等效需求 |
| 隔离机制 | pkey | VXLAN/EVPN |

## PCC 与传统 DCQCN 对比

| 维度 | DCQCN | PCC |
|------|-------|-----|
| 信号来源 | 仅主机端 ECN 标记 | 交换机/DPU 实时遥测 |
| 收敛速度 | 较慢 | 微秒级 |
| 尾延迟控制 | 一般 | 优秀 |
