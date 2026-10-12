---
id: chapter-09
title: "第 9 章：GPU 架构与内存管理 — 知识卡片"
description: "RMM、OOM 排查、溢出配置知识卡片"
sidebar_position: 9
---

# GPU 架构与内存管理 — 知识卡片

## 卡片 1

**Q：RMM 池分配器的作用是什么？**

A：`rmm.reinitialize(pool_allocator=True, initial_pool_size=2**30)` — 预保留大块内存，子分配极快，修复大量小分配的性能瓶颈。

---

## 卡片 2

**Q：GPU OOM 的首要修复方法是什么？**

A：减小分区/块大小（dask-cudf）。这是第一优先操作。

---

## 卡片 3

**Q：CUDA 统一内存 vs dask-cuda 显式溢出的选择依据？**

A：
- 小型/一次性溢出 → 统一内存可接受
- 重复/生产工作负载 → 首选显式 dask-cuda 溢出（可预测性能）
