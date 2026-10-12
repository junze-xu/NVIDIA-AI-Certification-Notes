---
id: chapter-06
title: "第 6 章：Spectrum-X 架构 — 速查表"
description: "Spectrum 交换机、BlueField DPU、DOCA 框架"
sidebar_position: 6
---

# Spectrum-X 架构 — 速查表

## Spectrum-X 核心组件

| 组件 | 角色 |
|------|------|
| Spectrum-4 ASIC | 最高带宽交换机芯片（800GbE） |
| BlueField-3 DPU | RoCE 端点 + 乱序重组 + 遥测 |
| DOCA 框架 | DPU 上开发与运行加速服务 |
| 自适应路由 | 基于遥测的实时路径选择 |
| 拥塞控制 | 遥测驱动的性能隔离 |

## Spectrum 平台世代

| 平台 | ASIC 基础 | 端口速率 |
|------|-----------|----------|
| Spectrum-X400 | Spectrum-3 | 400GbE |
| Spectrum-X800 | Spectrum-4 | 800GbE |

## BlueField DPU 核心功能

| 功能 | 说明 |
|------|------|
| RoCE 传输终结 | 处理乱序报文重组 |
| 拥塞响应 | 接收 ECN/CNP 信号调整速率 |
| 遥测上报 | 实时导出队列深度、流统计 |
| 性能隔离 | 防止多租户"吵闹邻居" |

## DOCA vs NVUE vs UFM

| 框架 | 运行位置 | 用途 |
|------|----------|------|
| DOCA | BlueField DPU | 开发网络/安全/遥测卸载服务 |
| NVUE | Cumulus Linux 交换机 | 声明式交换机配置 |
| UFM | 管理服务器 | InfiniBand fabric 管理+遥测 |
