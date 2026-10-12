---
id: chapter-08
title: "第 8 章实验：多节点扩展"
description: "NVLink 拓扑、扩展策略、NCCL 测试实验"
sidebar_position: 8
---

# 实验：多节点扩展

:::note 预计用时
12 分钟
:::

## 实验目标

- 理解 NVLink 拓扑
- 测试多节点通信
- 规划扩展策略

## 练习 1：NCCL 通信测试

```bash
# 节点内 NVLink 带宽测试
./all_reduce_perf -b 8 -e 128M -f 2 -g 8

# 跨节点 RDMA 带宽测试
./all_reduce_perf -b 8 -e 128M -f 2 -g 8 --use-hca
```

## 练习 2：扩展策略

| 层级 | 技术 | 带宽 |
|------|------|------|
| 节点内 | NVLink/NVSwitch | 900GB/s/GPU |
| 机架内 | InfiniBand NDR | 400Gbps |
| 跨机架 | 以太网 | 100-400Gbps |

## 关键要点

:::info 本章记忆锚点
节点内 NVLink 最快，机架内 IB，跨节点以太网。NCCL 测试通信带宽。
:::
