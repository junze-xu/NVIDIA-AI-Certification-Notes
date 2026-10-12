---
id: chapter-11
title: "第 11 章：高级故障排除 — 知识卡片"
description: "NVLink/Magnum IO/存储/MIG 知识卡片"
sidebar_position: 11
---

# 第 11 章：高级故障排除 — 知识卡片

## 卡片 1

**Q：NVLink 链路故障如何排查？**

A：1. `systemctl status nvidia-fabricmanager` 检查 FM 服务 → 2. `nvidia-smi nvlink --status` 查看链路 → 3. 物理检查光纤/铜缆。考试：FM 服务 = NVLink 链路管理软件。

---

## 卡片 2

**Q：Magnum IO 包含哪些核心组件？**

A：GPUDirect RDMA（GPU↔InfiniBand）、GPUDirect Storage（GPU↔NVMe/并行FS）、UCX（统一通信传输层）。考试：Magnum IO 解决 GPU ↔ 网络/存储直连。

---

## 卡片 3

**Q：训练 IO 瓶颈如何排查？**

A：`iostat -x 1` 看磁盘利用率 → NFS 延迟高检查 MTU/RDMA → 迁移到 Lustre/WEKA 并行FS。考试：并行 FS = 训练 IO 最终方案。

---

## 卡片 4

**Q：MIG 配置有哪些前提条件？**

A：仅 A100/H100 及以上 GPU 支持；配置命令 `nvidia-smi mig -cgi 19,19 -C` 创建 GPU 实例；硬性隔离非共享。考试：MIG = 安培+硬性隔离。

