---
id: chapter-01
title: "第 1 章：DGX 硬件与开机 — 知识卡片"
description: "DGX H100/H200、NVLink、显存、开机流程知识卡片"
sidebar_position: 1
---

# DGX 硬件与开机 — 知识卡片

## 卡片 1

**Q：DGX H100 和 H200 的显存区别？**

A：
- H100：8 × 80GB HBM3 = 640GB
- H200：8 × 141GB HBM3e = 1128GB
- 区别在显存容量/带宽，不是 NVLink 代际

---

## 卡片 2

**Q：DGX H100/H200 的 NVLink 带宽？**

A：每 GPU 900GB/s（双向），整机对分带宽 7.2TB/s（8 × 900GB/s）。4 颗 NVSwitch 基板。

---

## 卡片 3

**Q：开机前用什么检查 DGX 健康状态？**

A：BMC 管理端口 + Redfish/IPMI — 完全带外管理，独立于 OS。nvidia-smi 需要 OS + 驱动。

---

## 卡片 4

**Q：DGX H100 额定最大功耗？**

A：约 10.2kW — 机柜功率预算用这个数字。
