---
id: chapter-07
title: "第 7 章：GPU 监控、故障排查与优化"
description: "nvidia-smi、DCGM、驱动兼容性、OOM 解决方案、性能优化速查表"
sidebar_position: 7
---

# GPU 监控、故障排查与优化速查

## nvidia-smi 关键命令

| 命令 | 功能 | 考试要点 |
|------|------|----------|
| `nvidia-smi` | 基础状态概览 | 显存、温度、功耗、利用率 |
| `nvidia-smi --query-gpu=utilization.gpu,memory.used --format=csv` | 精确查询指标 | 注意指标名称拼写 |
| `nvidia-smi --loop=5` | 每 5 秒刷新 | `--loop=N`，N 为秒数 |
| `nvidia-smi -i 0` | 仅查看 GPU 0 | 用 `-i` 指定编号 |
| `nvidia-smi -r` | 重置 GPU | 用于卡死的 GPU，慎用 |

## 关键指标健康阈值

| 指标 | 正常范围 | 异常判断 | 考试频率 |
|------|----------|----------|----------|
| GPU 利用率 | 训练时 70-100% | 低于 50% 可能存在数据瓶颈 | 高频 |
| 显存占用 | 训练时 80-95% | >95% 有 OOM 风险 | 高频 |
| 温度 | 60-75 °C | >80 °C 触发降频 | 有 |
| 功耗 | 训练时接近 TDP | 持续满载需检查散热 | 有 |

## DCGM 企业监控架构

DCGM（Data Center GPU Manager）是 NVIDIA 企业级 GPU 监控方案：

```
Host Engine (nv-hostengine)
  └── 节点 Agent（每节点一个）
       └── GPU 组（逻辑集合）
            └── 健康策略 / 告警规则
```

### DCGM 关键命令

| 命令 | 作用 |
|------|------|
| `nv-hostengine` | 启动 DCGM 守护进程 |
| `dcgmi discovery -l` | 列出所有 GPU |
| `dcgmi group -c mygroup` | 创建 GPU 组 |
| `dcgmi health -g 1 -c` | 检查组健康状态 |
| `dcgmi profile --start --group 1` | 启动 Profiling |
| `dcgmi stats -g 1 -e` | 查看统计数据 |

:::tip
DCGM 支持 Prometheus 导出，适合多节点集群的集中监控。
:::

## 驱动 vs CUDA 兼容性

| CUDA 版本 | 最低驱动版本 | 发布时间 |
|-----------|-------------|----------|
| 12.4 | 530.30.02 | 2024 Q1 |
| 12.3 | 525.60.13 | 2023 Q4 |
| 12.2 | 525.60.13 | 2023 Q3 |
| 12.1 | 525.60.13 | 2023 Q2 |
| 12.0 | 525.60.13 | 2022 Q4 |
| 11.8 | 520.61.05 | 2022 Q3 |

:::caution
`nvidia-smi` 看到 GPU **不代表** CUDA 能工作。必须确认驱动版本 ≥ CUDA 所需的最低驱动。
:::

## 常见 GPU 问题排查

| 问题现象 | 根因 | 解决方案 |
|----------|------|----------|
| CUDA 显存不足 | 批大小过大或内存泄漏 | 减小批大小 / 梯度检查点 / 混合精度 |
| GPU 利用率低 | 数据加载跟不上 GPU | 增加 DataLoader workers 数 |
| 温度过高 + 降频 | 散热不足 | 检查风扇、环境温度、功率限制 |
| nvidia-smi 正常但 CUDA 失败 | 驱动版本与 CUDA 不匹配 | 升级驱动 |
| 某块 GPU 始终空闲 | 应用逻辑跳过该 GPU | 检查 CUDA_VISIBLE_DEVICES |

## 内存优化技术对比

| 技术 | 显存节省 | 额外开销 | 考试频率 |
|------|----------|----------|----------|
| 混合精度 (FP16) | ~50% | 极小（需 Loss Scaling） | 高频 |
| 梯度检查点 | 40-60% | 计算时间增加 20-30% | 高频 |
| 减小批大小 | 线性节省 | 训练变慢、收敛性变化 | 总是选项 |
| 梯度累积 | 0%（模拟更大 batch） | 每一步更多迭代 | 中等 |

:::tip 组合优化
FP16 + 梯度检查点 → 理论上批大小可增加到原来的 4 倍。
:::

## Profiling 工具选择

| 工具 | 适用场景 | 输出形式 |
|------|----------|----------|
| nvidia-smi | 快速查看终端指标 | 命令行 |
| DCGM | 多节点集群监控 | Prometheus |
| Nsight Systems | CPU-GPU 交互瓶颈分析 | 时间线 GUI |
| Nsight Compute | 单个 CUDA Kernel 级优化 | 详细 Kernel 指标 |
| TensorBoard Profiler | 训练循环中的算子级分析 | TF/PyTorch op 时间线 |

:::note 定位规则
**Nsight Systems 看全局**；**Nsight Compute 看细节**；**DCGM 看生产**。
:::

## 批大小估算公式

```
最大批大小 ≈ (GPU 显存 - 模型权重 - 开销) / 单样本激活值显存
```

- FP32 激活值：批大小 × 序列长度 × 隐藏维度 × 层数 × 4 字节
- FP16 激活值：批大小 × 序列长度 × 隐藏维度 × 层数 × 2 字节

## 快速诊断六步法

```
① GPU 是否被识别？ → nvidia-smi（无输出 = 驱动问题）
② CUDA 是否可用？ → 运行测试代码（失败 = 驱动/CUDA 不匹配）
③ 利用率偏低？ → 数据管道瓶颈，增加 workers
④ 显存过高？ → 减小 batch 或启用优化
⑤ 温度过高？ → 检查散热系统
⑥ 某 GPU 空闲？ → 应用逻辑或设备分配问题
```
