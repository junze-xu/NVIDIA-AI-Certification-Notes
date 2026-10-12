---
id: chapter-03
title: "第 3 章：Dask 多 GPU 工作流 — 知识卡片"
description: "dask-cudf、LocalCUDACluster、分区参数知识卡片"
sidebar_position: 3
---

# Dask 多 GPU 工作流 — 知识卡片

## 卡片 1

**Q：Dask 是否总是需要多 GPU？**

A：**不是**。Dask 可在单 GPU 上以外存模式运行，处理超出单 GPU VRAM 的数据。

---

## 卡片 2

**Q：`blocksize` 和 `device_memory_limit` 的区别是什么？**

A：
- `blocksize` / `chunksize`：摄入时（read_csv/read_parquet）的分区大小
- `device_memory_limit`：GPU→主机内存溢出的阈值

---

## 卡片 3

**Q：数据轻松装入单 GPU VRAM 时应选择 Dask 吗？**

A：**不应该**。此时 Dask 引入不必要的开销，单 GPU cuDF 更合适。

---

## 卡片 4

**Q：如何解决 Dask 洗牌的 OOM 错误？**

A：**减小**分区大小（增加 npartitions）+ 通过 `device_memory_limit` 启用溢出。更大的分区不能修复洗牌 OOM — 恰恰相反！

---

## 卡片 5

**Q：Dask 多 GPU 洗牌时 worker 间使用什么通信？**

A：UCX 通信（可用时 NVLink，否则 TCP 回退）。
