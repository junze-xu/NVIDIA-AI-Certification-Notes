---
id: chapter-09
title: "第 9 章：GPU 架构与内存管理 — 速查表"
description: "RMM、OOM 排查、统一内存 vs 显式溢出"
sidebar_position: 9
---

# GPU 架构与内存管理 — 速查表

## GPU vs CPU 执行模型

| 方面 | CPU | GPU |
|------|-----|-----|
| 核心数 | 少（个位/十位数） | 数千（简单核心） |
| 执行模型 | 串行、分支优化（MIMD） | 数据并行、SIMT |
| 最适合 | 分支密集、低延迟串行 | 大数据集上的统一运算 |

## 内存层次

| 层 | 说明 |
|----|------|
| VRAM（设备内存） | GPU 本地，带宽极高（数百 GB/s 到 TB/s） |
| 主机内存（RAM） | GPU 仅能通过 PCIe/NVLink 传输访问 |
| PCIe Gen4 x16 | 约 32 GB/s 双向 — 常见传输瓶颈 |
| NVLink | 带宽远高于 PCIe，用于 GPU-GPU 传输 |

## RMM（RAPIDS 内存管理器）

| 分配器 | 用途 |
|--------|------|
| 默认（cudaMalloc/cudaFree） | 简单，大量小分配时慢 |
| pool_memory_resource | 预保留大块内存，子分配极快 |

```python
import rmm
rmm.reinitialize(pool_allocator=True, initial_pool_size=2**30)
```

## GPU OOM 排查清单

1. 减小分区/块大小（dask-cudf）— 首要修复
2. 检查是否存在过多中间副本/物化
3. 碎片化驱动 OOM → 启用 RMM 池
4. 数据集 > VRAM → 启用 dask-cuda 溢出（`device_memory_limit`）
5. 使用 `nvidia-smi` / Dask dashboard 监控

## 统一内存 vs 显式溢出

| 方式 | 优点 | 缺点 |
|------|------|------|
| CUDA 统一内存（超额订阅） | 简单，自动分页 | 不可预测的缺页开销 |
| dask-cuda 显式溢出 | 可预测、可控 | 需要配置 |

:::tip
小型/一次性溢出 → 统一内存可接受。重复/生产工作负载 → 首选显式 dask-cuda 溢出。
:::
