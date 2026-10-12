---
id: chapter-07
title: "第 7 章：核外工作流与高效 Parquet/ORC I/O — 速查表"
description: "RMM 溢写、核外处理、dask_cudf 分块读取、Parquet 优化"
sidebar_position: 7
---

# 核外工作流与高效 Parquet/ORC I/O — 速查表

## 核外处理方案

| 场景 | 方案 |
|------|------|
| 500GB 数据 / 40GB VRAM | `dask_cudf` 分块读取 + RMM 主机溢写 |

## RMM 溢写

| 作用 | 说明 |
|------|------|
| 显存压力大时 | 缓冲区移到主机内存 |
| CUDF_SPILL_DEVICE_LIMIT | 不要设为 1.0（移除余量→OOM 后触发太晚）|

:::info 记忆锚点
数据>VRAM→dask_cudf+RMM溢写；溢写限制留余量。
:::
