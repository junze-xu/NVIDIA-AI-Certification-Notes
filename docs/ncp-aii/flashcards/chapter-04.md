---
id: chapter-04
title: "第 4 章：GPU 配置与驱动 — 知识卡片"
description: "MIG、SR-IOV、驱动安装、nvidia-smi 知识卡片"
sidebar_position: 4
---

# GPU 配置与驱动 — 知识卡片

## 卡片 1

**Q：MIG 的作用和限制？**

A：将单 GPU 分为最多 7 个隔离实例（计算+内存）。仅 Ampere 及更新架构。适用推理密度，不常用于大型训练。

---

## 卡片 2

**Q：nvidia-smi 的适用场景？**

A：查看 GPU 状态（温度、功耗、显存、利用率）。需要已启动的 OS + 驱动 — 开机前不可用。

---

## 卡片 3

**Q：SR-IOV 的作用？**

A：单根 I/O 虚拟化，允许虚拟机直接访问 GPU，适用于虚拟化环境。
