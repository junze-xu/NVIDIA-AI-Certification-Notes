---
id: chapter-09
title: "第 9 章：NVUE、Ansible、WJH — 速查表"
description: "NVUE 配置模型、Ansible 自动化、WJH 诊断"
sidebar_position: 9
---

# NVUE、Ansible、WJH — 速查表

## NVUE 核心命令

| 命令 | 用途 |
|------|------|
| `nv set interface swp1 ip address 10.0.0.1/24` | 暂存配置变更 |
| `nv config apply` | 提交 pending → running |
| `nv config save` | 持久化 running → startup |
| `nv config diff` | 比较 pending 与 running |
| `nv show interface swp1` | 查看端口状态 |

## NVUE vs NCLU

| 维度 | NVUE | NCLU |
|------|------|------|
| 模型 | 声明式，基于 YANG 对象树 | 命令式，逐行执行 |
| 配置状态 | staged/applied/startup | 直接生效 |
| REST API | 端口 8765 | 无等效 |

## WJH 丢弃类别

| 类别 | 原因示例 |
|------|----------|
| L1（物理层） | CRC 错误、链路抖动 |
| L2（交换） | VLAN 不匹配、STP 阻塞 |
| 缓冲/拥塞 | 队列耗尽 tail drop |
| ACL/安全 | 显式策略拒绝 |
| 隧道 | 隧道头错误 |

## Ansible nvidia.nvue Collection

| 特性 | 说明 |
|------|------|
| 幂等性 | 匹配时期望状态报告 'ok'，无漂移 |
| 配置应用 | 模块自动 apply，无需手工 `nv config apply` |
| REST API 端口 | 8765 |

## DOCA 遥测服务

| 要素 | 说明 |
|------|------|
| 运行位置 | BlueField DPU Arm 核心 |
| 作用 | 从主机 CPU 卸载遥测采集与处理 |
| 数据路径 | 不影响 GPU 数据面 |
