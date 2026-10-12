---
id: chapter-10
title: "第 10 章实验：故障排除"
description: "GPU 故障诊断、链路错误分析、日志排查实验"
sidebar_position: 10
---

# 实验：故障排除

:::note 预计用时
12 分钟
:::

## 实验目标

- 诊断 GPU 硬件故障
- 分析网络链路错误
- 使用日志排查问题

## 练习 1：GPU 诊断

```bash
# 查看 XID 错误
dmesg | grep -i xid

# 生成完整诊断报告
nvidia-bug-report.sh

# 查看 ECC 错误
nvidia-smi -q -d ECC
```

## 练习 2：网络错误分析

```bash
# IB 端口错误
ibqueryerrors

# 链路质量
mlxlink -d mlx5_0 -m
```

:::tip
CRC 错误上升 + 符号错误为零 = 临界电缆/脏污连接器/劣化光模块。
:::

## 关键要点

:::info 本章记忆锚点
nvidia-bug-report.sh 完整诊断。XID 错误 = 硬件/驱动问题。ibqueryerrors 扫描 IB 网络。
:::
