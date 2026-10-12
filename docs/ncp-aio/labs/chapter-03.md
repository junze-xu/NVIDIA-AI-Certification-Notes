---
id: chapter-03
title: "第 3 章实验：BCM 高级运维"
description: "固件更新、IB 网络验证实验"
sidebar_position: 3
---

# 实验：BCM 高级运维

:::note 预计用时
12 分钟
:::

## 实验目标

- 固件管理
- InfiniBand 网络验证

## 练习 1：固件更新

```bash
cmsh device update firmware -c gpu-nodes --backup
```

:::tip
--backup 创建固件回滚点。
:::

## 练习 2：IB 验证

```bash
ibstat               # 查看链路状态
ibdiagnet            # 全网验证（仅从 SM 节点）
```

## 关键要点

:::info 本章记忆锚点
固件更新用 --backup 回滚。IB Polling = SM 问题。ibdiagnet 从 SM 节点运行。
:::
