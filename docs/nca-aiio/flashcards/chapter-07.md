---
id: chapter-07
title: "第 7 章：GPU 监控、故障排查与优化 — 知识卡片"
description: "nvidia-smi、DCGM、驱动兼容性、OOM 解决方案知识卡片"
sidebar_position: 7
---

# GPU 监控、故障排查与优化 — 知识卡片

## 卡片 1

**Q：nvidia-smi 命令每 5 秒刷新一次 GPU 利用率和温度，正确语法是？**

A：
```bash
nvidia-smi --loop=5
```

若要以 CSV 格式查询特定指标：
```bash
nvidia-smi --query-gpu=utilization.gpu,memory.used,temperature.gpu --format=csv --loop=5
```

指标名称拼写必须精确：`utilization.gpu`、`memory.used`。

---

## 卡片 2

**Q：DCGM 架构的四个核心组件是什么？**

A：
1. **Host Engine**（nv-hostengine）：中央守护进程
2. **Agent**：每节点轻量进程
3. **Group**：逻辑 GPU 集合
4. **Policy**：健康检查和告警规则

---

## 卡片 3

**Q：GPU 热降频通常从什么温度开始？正常工作温度范围是多少？**

A：
- **正常工作**：60-75°C
- **热降频起点**：80-85°C（GPU 降低时钟频率保护自己）
- **临界温度**：>90°C（可能关机）

---

## 卡片 4

**Q：CUDA 12.4 需要的最低驱动版本是多少？**

A：530.30.02 或更高。驱动版本必须 ≥ CUDA 版本的最低要求。

:::caution
升级 CUDA 后忘记更新驱动 → CUDA 不可用。nvidia-smi 正常不代表 CUDA 能工作！
:::

---

## 卡片 5

**Q：Nsight Systems 和 Nsight Compute 分别用于什么 profiling 场景？**

A：
- **Nsight Systems**：系统级时间线、CPU-GPU 交互、数据流水线瓶颈
- **Nsight Compute**：单个 CUDA kernel 优化、内存带宽、warp 效率

先用 Systems 找到慢的 kernel，再用 Compute 深入分析。

---

## 卡片 6

**Q：为什么 nvidia-smi 能显示 GPU，但训练代码报 "no CUDA-capable device"？**

A：驱动版本与 CUDA 版本不匹配。nvidia-smi 使用驱动层面的 API（正常工作），但 CUDA 运行时需要兼容的驱动版本。解决：升级驱动。

---

## 卡片 7

**Q：混合精度（FP16）训练相比 FP32 能节省多少显存？**

A：激活和梯度约减少 50%（16 位 vs 32 位）。模型权重通常保持 FP32 确保数值稳定。使用 AMP（自动混合精度）+ 损失缩放防止下溢。

---

## 卡片 8

**Q：DCGM 中为 ID 为 5 的 GPU 组启动 profiling 的命令是？**

A：
```bash
dcgmi profile --start --group 5
```

常见流程：`dcgmi group -c` 创建组 → `dcgmi group -a` 添加 GPU → `dcgmi profile --start` 启动。

---

## 卡片 9

**Q：GPU 利用率 45%、显存 30%，但训练速度慢。瓶颈在哪里？**

A：**数据流水线瓶颈** —— GPU 空闲等待 CPU 预处理数据。解决方案：增加 DataLoader 的 `num_workers`、启用预取（prefetch）、使用 GPU 加速预处理（NVIDIA DALI）。

:::tip
低 GPU 利用率 + 低显存 = GPU 等数据（CPU 瓶颈）。
:::

---

## 卡片 10

**Q：遇到 "CUDA out of memory" 错误时，有哪些常见解决方案？（列举 4 个）**

A：
1. 减小批大小（最直接）
2. 启用梯度检查点（省 40-60%）
3. 使用混合精度 FP16
4. 调用 `torch.cuda.empty_cache()` 释放碎片

:::note
清理缓存解决的是碎片问题，不增加总容量。
:::

---

## 卡片 11

**Q：nvidia-smi 查询中，GPU 利用率和显存占用的精确指标名是什么？**

A：
- GPU 利用率：`utilization.gpu`（百分比）
- 显存占用：`memory.used`（MB）

常见错误写法：`gpu.utilization`、`gpu_util`、`memory_used`。

---

## 卡片 12

**Q：梯度累积（Gradient Accumulation）的作用和限制是什么？**

A：在 N 次前向传播后再更新权重，模拟更大 batch。

- **作用**：在不增加显存的情况下模拟大 batch 训练
- **限制**：不减少单步显存占用 —— 如果当前 batch 已经 OOM，梯度累积帮不了
- **区别**：梯度检查点才是省显存的技术，梯度累积是"用时间换空间"的策略
