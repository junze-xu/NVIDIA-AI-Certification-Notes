---
id: chapter-02
title: "第 2 章实验：网络布线"
description: "计算/存储/管理网络配置、线缆选择实验"
sidebar_position: 2
---

# 实验：网络布线

:::note 预计用时
12 分钟
:::

## 实验目标

- 区分三类网络
- 选择正确的线缆类型
- 理解 InfiniBand 配置

## 练习 1：网络规划

| 需求 | 网络类型 | 技术 |
|------|----------|------|
| GPU 间 MPI 通信 | 计算网络 | InfiniBand NDR |
| 训练数据加载 | 存储网络 | NVMe-oF / Lustre |
| SSH/监控 | 管理网络 | 10GbE |

## 练习 2：线缆选择

| 距离 | 正确选择 |
|------|----------|
| 机架内（<3m） | DAC 铜缆 |
| 机架间（3-100m） | AOC 光缆 |
| 跨数据中心 | 光模块 + 光纤 |

## 关键要点

:::info 本章记忆锚点
计算用 InfiniBand/RoCE，存储用 NVMe-oF/Lustre，管理用 GbE。短距 DAC、中距 AOC、长距光模块。
:::
