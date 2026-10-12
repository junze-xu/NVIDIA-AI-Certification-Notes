---
id: chapter-04
title: "第 4 章：GPU 配置与驱动 — 速查表"
description: "SR-IOV、GPU 分区、MIG、驱动安装、nvidia-smi"
sidebar_position: 4
---

# GPU 配置与驱动 — 速查表

## 驱动安装

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nvidia-driver-XXX

# 验证
nvidia-smi
```

---

## MIG（多实例 GPU）

| 特性 | 说明 |
|------|------|
| 作用 | 将单 GPU 分为多个独立实例 |
| 隔离 | 计算 + 内存隔离 |
| 适用 | 推理、多租户共享 |
| 限制 | 仅 Ampere 及更新架构 |

---

## SR-IOV

- 单根 I/O 虚拟化
- 允许虚拟机直接访问 GPU
- 适用于虚拟化环境
