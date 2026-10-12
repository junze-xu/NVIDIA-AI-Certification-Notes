---
id: chapter-03
title: "第 3 章实验：子网管理器配置与 UFM 管理"
description: "SM 选举规则、LID 计算、UFM 功能验证实验"
sidebar_position: 3
---

# 实验：子网管理器配置与 UFM 管理

:::note 预计用时
20 分钟
:::

## 实验目标

- 理解 SM 选举规则
- 计算 LID 数量
- 区分 OpenSM 与 UFM 功能

## 练习 1：SM 选举推演

某 IB fabric 有 3 个 SM 实例：

| SM 实例 | 所在节点 GUID | sm_priority |
|---------|--------------|-------------|
| SM-A | 0x0021280000123456 | 5 |
| SM-B | 0x0021280000000001 | 10 |
| SM-C | 0x0021280000000002 | 10 |

<details>
<summary>答案</summary>

**SM-B 成为主节点**。SM-B 和 SM-C 优先级均为 10（最高），但 SM-B GUID 更小（0x...0001 < 0x...0002）。

</details>

## 练习 2：LID 计算

管理员设置 LMC=2。每端口分配多少个 LID？

<details>
<summary>答案</summary>

**4 个 LID**。公式：2^LMC = 2^2 = 4。

</details>

## 练习 3：OpenSM vs UFM 功能匹配

| 功能 | OpenSM | UFM |
|------|--------|-----|
| LID 分配 | ✓ | ✓ |
| 路由计算 | ✓ | ✓ |
| 全网遥测历史分析 | ✗ | ✓ |
| SHARP 聚合树管理 | ✗ | ✓ |
| REST API 配置发放 | ✗ | ✓ |

## 关键要点

:::info 本章记忆锚点
SM 选举：优先级高 → 平局时 GUID 最小。LID = 2^LMC。UFM 在 OpenSM 基础上叠加遥测+API+SHARP。
:::
