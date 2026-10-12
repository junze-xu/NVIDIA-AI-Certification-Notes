---
id: chapter-04
title: "第 4 章：AI 集群网络与存储 — 知识卡片"
description: "InfiniBand、RoCE、DPU、并行文件系统知识卡片"
sidebar_position: 4
---

# AI 集群网络与存储 — 知识卡片

## 卡片 1

**Q：InfiniBand NDR 的带宽和典型延迟是多少？**

A：400 Gb/s（50 GB/s），交换机间典型延迟低于 700 纳秒。是 HDR 带宽的两倍。

---

## 卡片 2

**Q：400GbE 上的 RoCEv2 与 InfiniBand NDR 的延迟差异是多少？**

A：
- RoCEv2：2-5 μs
- InfiniBand NDR：低于 1 μs（典型 700 ns）

RoCEv2 延迟高 3-5 倍，但多数 AI 工作负载可接受。

---

## 卡片 3

**Q：GPUDirect RDMA 消除了 GPU 间通信中的哪些开销？**

A：消除了三项开销：
1. CPU 参与（CPU 不再做数据搬运）
2. 系统内存拷贝（GPU 内存直通 GPU 内存）
3. 内核上下文切换（用户空间直接提交 RDMA 指令）

延迟从 20-30 μs 降至 2-5 μs。

---

## 卡片 4

**Q：BlueField-3 DPU 能卸载哪些类型的任务？**

A：
- **网络层**：RDMA 传输（RoCE、IB）、覆盖网络（VxLAN、GENEVE）
- **存储层**：NVMe-oF 协议
- **安全层**：IPsec 加密

效果：CPU 利用率降低 30-40%，但其**不做 ML 运算**。

---

## 卡片 5

**Q：Lustre 文件系统的条带计数（stripe count）参数控制什么？**

A：控制一个文件分布到多少个 OST（Object Storage Target）。默认是 1（单个 OST），检查点场景推荐 4-8。

```bash
lfs setstripe -c 8 /lustre/checkpoints
```

:::caution
低条带计数 = 即使底层总容量很大，也只有少数 OST 在工作，是常见瓶颈。
:::

---

## 卡片 6

**Q：InfiniBand 和 RoCEv2 在 AI 训练集群中各自适合什么场景？**

A：
- **InfiniBand**：需要低于 1 μs 延迟、>128 GPU 规模、纯 RDMA 工作负载、预算充足
- **RoCEv2**：2-5 μs 延迟可接受、混合工作负载（管理 + 训练）、已有以太网基础设施、成本敏感

---

## 卡片 7

**Q：检查点写入的带宽需求如何计算？**

A：
```
带宽（GB/s）= 模型大小（GB）/ 目标写入时间（秒）
```

示例：350 GB 模型要在 2 分钟（120 秒）内完成检查点 → 350 / 120 ≈ 2.92 GB/s。建议加 20% 冗余。

---

## 卡片 8

**Q：并行文件系统（Lustre、GPFS）和 NFS 各自适合什么训练场景？**

A：
- **并行文件系统**：带宽需求 >5 GB/s、节点 >32、频繁检查点、随机访问
- **NFS**：带宽低于 2 GB/s、节点小于 16、不频繁写入、简单数据集

---

## 卡片 9

**Q：InfiniBand 的 SHARP 技术有什么优势？**

A：SHARP（Scalable Hierarchical Aggregation and Reduction Protocol）让交换机内部执行 all-reduce 计算，将 all-reduce 延迟降低 5-10 倍。**仅 InfiniBand 可用，RoCEv2 不支持。**

---

## 卡片 10

**Q：S3 对象存储适合做实时训练存储吗？**

A：**不适合**。S3 的 GET 延迟 10-100 ms，最终一致性模型，无法支持检查点和实时数据加载。S3 适合：初始数据摄取、大数据集（>100 TB）归档、不频繁访问场景。

---

## 卡片 11

**Q：500 GB 模型检查点的 IOPS 需求和带宽需求分别是什么性质？**

A：
- **数据写入**：带宽受限（大块顺序写），关键指标是 GB/s
- **元数据操作**：IOPS 受限（文件创建、目录操作），需要 100K-500K IOPS

---

## 卡片 12

**Q：InfiniBand 自适应路由与静态路由对 AI 工作负载有什么影响？**

A：
- **自适应路由**：动态绕开拥塞路径，延迟一致性高
- **静态路由**：特定链路持续拥塞，延迟变化可达 10-20 倍

:::tip
低利用率 + 高延迟方差 → 静态路由配置错误。
:::
