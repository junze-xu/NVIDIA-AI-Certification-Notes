---
id: chapter-07
title: "第 7 章实验：GPU 监控、故障排查与优化"
description: "nvidia-smi 诊断、DCGM 告警、流水线瓶颈分析实验"
sidebar_position: 7
---

# 实验：GPU 监控、故障排查与优化

:::note 预计用时
16 分钟
:::

## 实验目标

- 能使用 nvidia-smi 命令诊断常见 GPU 问题
- 理解 DCGM 在生产监控中的作用
- 能分析低利用率和 OOM 问题

## 练习 1：nvidia-smi 输出诊断

以下是三种 nvidia-smi 输出，请诊断问题并提出修复方案：

### 场景 A
```
GPU 0: temperature 87°C, clocks 1200MHz (max 1410MHz), utilization 65%
```

**诊断**：?
**修复**：?

### 场景 B
```
GPU 0: memory 100% (79.5/80 GB), process killed OOM
```

**诊断**：?
**修复**：?

### 场景 C
```
GPU 0: utilization 15%, memory 25%, temperature 45°C
```

**诊断**：?
**修复**：?

<details>
<summary>查看参考答案</summary>

**场景 A**：热降频。温度 >80°C，GPU 降频保护。
- 修复：检查风扇、环境温度、功率限制

**场景 B**：显存耗尽导致 OOM。
- 修复：减小批大小、梯度检查点、FP16 混合精度

**场景 C**：GPU 利用率低 + 显存低 → 数据流水线瓶颈。
- 修复：增加 DataLoader workers、使用 GPU 加速预处理

</details>

## 练习 2：nvidia-smi 查询命令

编写以下查询命令：

1. 每 10 秒导出 GPU 显存使用量，格式为 CSV：
```bash
nvidia-smi --query-gpu=memory.used --format=csv --loop=10
```

2. 查看 GPU 0 的温度和利用率：
```bash
nvidia-smi -i 0 --query-gpu=temperature.gpu,utilization.gpu --format=csv
```

3. 查看所有 GPU 的功率和时钟：
```bash
nvidia-smi --query-gpu=power.draw,clocks.current.sm --format=csv
```

## 练习 3：DCGM 告警配置

DCGM 配置示例：

```bash
# 启动 DCGM 守护进程
nv-hostengine

# 创建 GPU 组
dcgmi group -c gpu_group

# 添加 GPU 到组
dcgmi group -g 1 -a 0,1,2,3

# 配置温度告警（>85°C）
dcgmi policy -g 1 --set 2,2

# 检查健康状态
dcgmi health -g 1 -c
```

:::tip
DCGM 支持 Prometheus 导出，适合集成到 Grafana 做可视化监控。
:::

## 练习 4：内存优化决策树

为以下场景选择合适的内存优化技术：

| 场景 | 推荐方案 | 节省量 |
|------|----------|--------|
| batch=64 时 OOM，模型较小 | ? | ~50% |
| 大模型训练，需要更大 batch | ? | 40-60% |
| 显存略大于需求，可接受稍慢 | ? | 0% |
| 碎片导致的间歇性 OOM | ? | 不增加容量 |

<details>
<summary>查看参考答案</summary>

| 场景 | 推荐方案 | 节省量 |
|------|----------|--------|
| batch=64 OOM，小模型 | FP16 混合精度 | 激活值减少 ~50% |
| 大模型训练需大 batch | 梯度检查点 | 激活值减少 40-60% |
| 显存略大于需求 | 梯度累积（模拟大 batch） | 0%（不省显存） |
| 间歇性 OOM（碎片） | torch.cuda.empty_cache() | 解决碎片 |

</details>

## 关键要点

:::info 本章记忆锚点
nvidia-smi 用于临时查询（内存、温度、利用率），DCGM 用于生产监控/告警。低 GPU 利用率通常意味着数据流水线瓶颈（CPU），而非 GPU 问题。
:::
