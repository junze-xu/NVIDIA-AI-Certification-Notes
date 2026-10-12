---
id: chapter-06
title: "第 6 章：ETL 设计与 Dask-cuDF — 速查表"
description: "LocalCUDACluster、NVLink 跨 GPU shuffle、分区再平衡"
sidebar_position: 6
---

# ETL 设计与 Dask-cuDF 的多 GPU 扩展 — 速查表

## 集群拓扑

| 场景 | 最佳方案 |
|------|----------|
| 60GB 数据 / 4x24GB GPU 单节点 | LocalCUDACluster（每 GPU 一 worker）|
| 跨节点 | UCX over InfiniBand（仅数据量超单节点聚合显存时）|

## 分区不均

| 问题 | 方案 |
|------|------|
| 20 分区大小极不均（0行 vs 数百万行）| 再平衡（repartition）

:::info 记忆锚点
单节点多GPU→LocalCUDACluster；NVLink 跨 GPU shuffle 优于 InfiniBand 跨节点。
:::
