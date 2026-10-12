---
id: chapter-03
title: "第 3 章：服务器架构与 GPU 互连 — 知识卡片"
description: "PCIe、NVLink、DGX 系统、HGX 平台知识卡片"
sidebar_position: 3
---

# 服务器架构与 GPU 互连 — 知识卡片

## 卡片 1

**Q：PCIe Gen4 x16 的单向带宽大约是多少？**

A：约 32 GB/s 双向。各代翻倍关系：Gen3 ≈ 16 GB/s，Gen4 ≈ 32 GB/s，Gen5 ≈ 64 GB/s。即使 Gen5 也远不及 NVLink。

---

## 卡片 2

**Q：A100 和 H100 各自的 NVLink 带宽是多少？**

A：
- **A100**：600 GB/s 双向（12 条 NVLink 通道）
- **H100**：900 GB/s 双向（18 条 NVLink 通道）

---

## 卡片 3

**Q：DGX A100 的二分带宽是多少？使用了多少颗 NVSwitch 芯片？**

A：4.8 TB/s 的二分带宽（8 × A100 × 600 GB/s），使用 6 颗 NVSwitch 芯片。

---

## 卡片 4

**Q：DGX H100 的二分带宽是多少？使用了多少颗 NVSwitch 芯片？**

A：7.2 TB/s 的二分带宽（8 × H100 × 900 GB/s），使用 18 颗 NVSwitch 芯片（A100 的 3 倍）。

---

## 卡片 5

**Q：HGX 平台和独立 PCIe GPU 的使用场景有什么不同？**

A：
- **HGX**：GPU 间带宽需求 >200 GB/s，需要 NVLink 互连（如多卡训练）
- **独立 PCIe**：GPU 独立工作（推理、隔离训练），带宽限于 ~32-64 GB/s

---

## 卡片 6

**Q：`nvidia-smi topo -m` 输出中的 "NV12" 代码代表什么？**

A：NV12 表示两块 GPU 之间有 12 条 NVLink 直接连接（高速通路）。NV 后面的数字越大 = 通道越多 = 带宽越高。

---

## 卡片 7

**Q：`nvidia-smi topo -m` 输出中的 "PHB" 代码代表什么？**

A：PHB = PCIe Host Bridge，表示 GPU 之间通过 CPU/芯片组的 PCIe 总线通信（约 32 GB/s），是一条慢速路径。

---

## 卡片 8

**Q：DGX A100 系统中 GPU 和 NVSwitch 的数量分别是多少？**

A：8 × A100 GPU + 6 × NVSwitch 芯片。打造了完整的 NVLink 全互连拓扑，每 GPU 600 GB/s。

---

## 卡片 9

**Q：HGX 基板和 DGX 系统有什么核心区别？**

A：
- **HGX**：NVIDIA 提供给 OEM 厂商的组件级别底板（含 GPU + NVSwitch）
- **DGX**：NVIDIA 出厂的完整交钥匙系统

HGX 需要 OEM 集成整机，DGX 出厂即验证优化。

---

## 卡片 10

**Q：nvidia-smi topo 输出的互连代码中，NV##、PHB、SYS 的速度排序是什么？**

A：NV##（最快，直连 NVLink）> PHB（PCIe 桥接）> SYS（多跳系统连接，最慢）。

---

## 卡片 11

**Q：需要 GPU 间带宽 >400 GB/s 时，应该选择什么平台？**

A：必须选择带 NVSwitch 的 HGX 或 DGX 平台。PCIe Gen5 x16 仅 ~64 GB/s，无法满足。

---

## 卡片 12

**Q：nvidia-smi topo -m 命令的作用是什么？**

A：显示 GPU 互连拓扑矩阵。其中：
- `NV##` = NVLink 通道数（直连，快）
- `PHB` = PCIe Host Bridge（经 CPU/芯片组，慢）
- `SYS` = 多跳系统连接（最慢）
