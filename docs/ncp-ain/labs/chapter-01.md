---
id: chapter-01
title: "第 1 章实验：网络拓扑规划与设计"
description: "rail-optimized 拓扑设计、对分带宽计算实验"
sidebar_position: 1
---

# 实验：网络拓扑规划与设计

:::note 预计用时
20 分钟
:::

## 实验目标

- 掌握 rail-optimized 拓扑设计原则
- 计算 fat-tree 对分带宽
- 区分 scale-up 与 scale-out 边界

## 练习 1：Rail-Optimized Leaf 数量计算

某 GPU 集群每节点 8 GPU、8 NIC（NIC 与 GPU 1:1）。

| 节点数 | 每节点 NIC 数 | 所需 rail 交换机数 | 说明 |
|--------|--------------|-------------------|------|
| 64 | 8 | ? | 每 rail 序号对应一台 leaf |

<details>
<summary>答案</summary>

**8 台 rail 交换机**。每节点 8 个 rail 序号（0-7），每个序号需要专属 leaf 交换机。

</details>

## 练习 2：对分带宽计算

某 512 节点集群，每节点 400Gb/s NIC。

| 参数 | 值 |
|------|----|
| 端点总带宽 | 512 × 400Gb/s = 204.8 Tb/s |
| 无阻塞对分带宽 | 204.8 ÷ 2 = **102.4 Tb/s** |

## 练习 3：拓扑选型

判断应采用 scale-up (NVLink) 还是 scale-out (NIC+Clos)：

| 场景 | 选择 | 原因 |
|------|------|------|
| 单机 8 GPU 张量并行 | scale-up | NVLink 域内 |
| 跨 100 机架的 8192 GPU 训练 | scale-out | 超出 NVLink 域 |
| NVL72 机架内 72 GPU 通信 | scale-up | NVLink 域覆盖 |

## 关键要点

:::info 本章记忆锚点
每节点 N GPU = N 台 rail 交换机。对分带宽 = 端点总带宽 ÷ 2。NVLink 限于域内；跨域必走 scale-out。
:::
