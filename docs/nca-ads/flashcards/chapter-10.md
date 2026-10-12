---
id: chapter-10
title: "第 10 章：RAPIDS 环境与性能分析 — 知识卡片"
description: "Conda/Docker、云 GPU、Nsight 工具知识卡片"
sidebar_position: 10
---

# RAPIDS 环境与性能分析 — 知识卡片

## 卡片 1

**Q：Conda 安装 RAPIDS 时省略 `cuda-version` 会怎样？**

A：可能解析到不兼容或 CPU-only 构建 → 导入错误。

---

## 卡片 2

**Q：场景说"GPU 间通信是瓶颈"应选什么云实例？**

A：选择 NVLink 实例。仅 PCIe 实例无法满足高速 GPU 通信需求。

---

## 卡片 3

**Q：Nsight Systems 和 Nsight Compute 的区别？**

A：
- Nsight Systems：系统级时间线，CPU/GPU/内存拷贝
- Nsight Compute：单内核深度优化（占用率、寄存器、带宽）
