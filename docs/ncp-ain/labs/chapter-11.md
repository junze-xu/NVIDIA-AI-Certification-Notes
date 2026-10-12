---
id: chapter-11
title: "第 11 章实验：RDMA 验证与 K8s 集成"
description: "perftest 工具、GPUDirect、K8s RDMA Operator 实验"
sidebar_position: 11
---

# 实验：RDMA 验证与 K8s 集成

:::note 预计用时
25 分钟
:::

## 实验目标

- 掌握 perftest 工具选择
- 理解 GPUDirect RDMA 故障排查
- 正确选择 K8s RDMA 机制

## 练习 1：Perftest 工具选择

| 需求 | 正确工具 |
|------|----------|
| 单边 RDMA READ 带宽 | `ib_read_bw` |
| 单边 RDMA WRITE 带宽 | `ib_write_bw` |
| 双边 SEND/RECEIVE 带宽 | `ib_send_bw` |
| 原子操作吞吐量 | `ib_atomic_bw` |

## 练习 2：GPUDirect 故障排查

```bash
# 普通测试（接近线速）
ib_write_bw

# GPUDirect 测试（吞吐量骤降）
ib_write_bw --use_cuda=0
```

| 现象 | 根因 | 解决 |
|------|------|------|
| 仅 --use_cuda 时慢 | PCIe ACS 启用 | 禁用 ACS |

## 练习 3：K8s RDMA 方案决策

| 需求 | 方案 |
|------|------|
| 每 pod 独占硬件 RDMA 资源 | SR-IOV VF + SR-IOV Device Plugin |
| 多 pod 共享（开发环境） | RDMA Shared Device Plugin |
| 编排 NIC 驱动 + RDMA 栈安装 | NicClusterPolicy |

## 关键要点

:::info 本章记忆锚点
ib\_read\_bw = 单边读。--use\_cuda=&lt;id&gt; = GPUDirect。SR-IOV = 独占 VF。NicClusterPolicy = 驱动编排。
:::
