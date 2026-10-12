---
id: chapter-11
title: "第 11 章：拥塞诊断、RDMA 验证与 K8s 集成 — 知识卡片"
description: "GPUDirect、perftest、K8s RDMA 知识卡片"
sidebar_position: 11
---

# 拥塞诊断、RDMA 验证与 K8s 集成 — 知识卡片

## 卡片 1

**Q：`--use_cuda` 开启后 RDMA 吞吐量骤降的可能原因？**

A：PCIe ACS 启用，强迫 GPU↔NIC P2P 流量经 root complex。禁用 ACS 恢复 GPUDirect 直连路径。

---

## 卡片 2

**Q：无物理错误的 ECN CE 标记表明什么？**

A：DCQCN 拥塞性标记。修复路径是拥塞控制调优（限速器、缓冲阈值），而非更换线缆/收发器。

---

## 卡片 3

**Q：需要 per-pod 独占硬件 RDMA 资源的 K8s 配置？**

A：SR-IOV VF + SR-IOV device plugin。每 pod 分配专用 VF，提供 GPUDirect 所需的独占硬件级 RDMA 访问。

---

## 卡片 4

**Q：哪个 CRD 负责编排 NIC 驱动和 RDMA 子系统安装？**

A：NicClusterPolicy（Network Operator 的 CRD）。声明部署 MOFED 驱动容器、RDMA device plugin、IPoIB 组件等。

---

## 卡片 5

**Q：ib_write_bw 启用 GPUDirect RDMA 测试的标志？**

A：`--use_cuda=<gpu_id>`。将 RDMA 注册缓冲区分配到指定 GPU 内存，走 GPUDirect 数据路径。
