---
id: chapter-02
title: "第 2 章：RAPIDS 环境配置与 GPU/CPU 决策 — 速查表"
description: "CPU vs GPU 阈值、MIG 分区、NGC 容器、dask-cuDF"
sidebar_position: 2
---

# RAPIDS 环境配置与 GPU/CPU 决策 — 速查表

## CPU vs GPU 阈值规则

| 数据规模 | 任务类型 | 最佳选择 |
|----------|----------|----------|
| < 1 GB | 一次性探索 | CPU pandas（初始化开销 < GPU 收益）|
| > 1 GB | 重复/生产 | GPU cuDF |

## MIG（多实例 GPU）

| 用途 | 说明 |
|------|------|
| 多租户隔离 | 一块物理 GPU 分多个独立实例 |
| 不适用 | 单次小任务（无关） |

## NGC RAPIDS 容器

| 优势 | 说明 |
|------|------|
| 可复现 | 固定 tag = 相同结果 |
| 不依赖主机 conda | 容器化自带依赖 |

:::info 记忆锚点
亚 GB 单次→CPU cuDF；多租户隔离→MIG；可复现→NGC 固定tag。
:::
