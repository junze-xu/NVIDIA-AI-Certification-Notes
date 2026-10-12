---
id: chapter-07
title: "第 7 章实验：集群管理与监控"
description: "DCGM 部署、告警配置、健康检查实验"
sidebar_position: 7
---

# 实验：集群管理与监控

:::note 预计用时
12 分钟
:::

## 实验目标

- 使用 DCGM 监控 GPU
- 配置告警阈值
- 执行健康检查

## 练习 1：DCGM 部署

```bash
# 部署 DCGM
docker run -d --gpus all --rm nvcr.io/nvidia/dcgm:3.1.7-1-ubuntu20.04
# 查看 GPU 指标
dcgmi discovery -l
```

## 练习 2：关键监控指标

| 指标 | 告警阈值 |
|------|----------|
| GPU 温度 | 超过 85°C |
| 显存使用 | 超过 90% |
| ECC 错误 | 任何不可纠 |

## 关键要点

:::info 本章记忆锚点
DCGM 监控 GPU 温度/功耗/显存/利用率。ECC 错误 = 硬件故障信号。
:::
