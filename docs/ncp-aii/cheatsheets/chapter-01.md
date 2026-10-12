---
id: chapter-01
title: "第 1 章：DGX H100/H200 硬件与开机 — 速查表"
description: "DGX 硬件规格、NVLink、显存对比、开机流程"
sidebar_position: 1
---

# DGX H100/H200 硬件与开机 — 速查表

## GPU 与显存对比

| 系统 | GPU | 单卡显存 | GPU 总显存 |
|------|-----|----------|-----------|
| DGX H100 | 8x H100 SXM5 | 80GB HBM3 | 640GB |
| DGX H200 | 8x H200 SXM5 | 141GB HBM3e | 1128GB |

---

## 节点内互连架构

| 项目 | 规格 |
|------|------|
| 每块基板 NVSwitch 数量 | 4 |
| 每 GPU NVLink 带宽 | 900GB/s（双向） |
| 节点总双向带宽 | 7.2TB/s |
| 互连类型 | NVLink4 全互联（经 NVSwitch） |

---

## 供电与冗余

| 项目 | 规格 |
|------|------|
| DGX H100/H200 最大功耗 | 约 10.2 kW |
| 冗余模型 | A/B 双路供电 — 每路 PDU 按 100% 负载配置 |
| N+1 含义 | 在最低需求（N）之外多一个活动单元 |

---

## 开机流程

1. 连接电源和网络
2. 上电自检（POST）
3. BIOS/UEFI 初始化
4. OS 启动（DGX OS 或经验证的 Linux）
5. 驱动加载（NVIDIA GPU Driver）
6. 验证 GPU 可见性：`nvidia-smi`
