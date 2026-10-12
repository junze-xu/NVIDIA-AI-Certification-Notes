---
id: chapter-06
title: "第 6 章实验：电源、制冷与链路验证"
description: "功率预算、BER 测试、光模块诊断实验"
sidebar_position: 6
---

# 实验：电源、制冷与链路验证

:::note 预计用时
15 分钟
:::

## 实验目标

- 计算机架功率预算
- 使用 BER 阈值验证链路
- 诊断光模块状态

## 练习 1：功率预算

```
DGX H100 × 3 台 = 3 × 10.2kW = 30.6kW
考虑 N+1 冗余 + PDU 降率 + 峰值余量
```

## 练习 2：链路验证

```bash
# 查看 InfiniBand 端口错误
ibqueryerrors

# 光模块诊断
ethtool -m eth0      # DDM 诊断数据
mlxlink -d mlx5_0    # Mellanox 链路信息
```

:::tip
BER 阈值 1e-12。Rx 功率低 → 检查脏污连接器/线缆过长。
:::

## 关键要点

:::info 本章记忆锚点
BER 阈值 1e-12。N+1 不是冷备件。液冷应对高密度。ethtool -m 诊断光模块。
:::
