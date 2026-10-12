---
id: chapter-04
title: "第 4 章：AI 集群网络与存储"
description: "InfiniBand、RoCE、DPU、并行文件系统、存储决策速查表"
sidebar_position: 4
---

# AI 集群网络与存储速查

## 网络技术对比

| 网络类型 | 带宽 | 延迟 | 拥塞机制 | 网络内计算 | 每端口成本 |
|----------|------|------|----------|-----------|-----------|
| InfiniBand NDR | 400 Gb/s (50 GB/s) | 低于 700 ns | 基于信用（硬件） | SHARP | $3,000-4,000 |
| InfiniBand HDR | 200 Gb/s (25 GB/s) | 低于 1 μs | 基于信用（硬件） | SHARP | $2,000-3,000 |
| 400GbE RoCEv2 | 400 Gb/s | 2-5 μs | PFC | 不支持 | $800-1,200 |
| 100GbE RoCEv2 | 100 Gb/s | 3-8 μs | PFC | 不支持 | $400-600 |

:::tip 选网口诀
需要 低于 1 μs 延迟 → InfiniBand；需要兼容现有以太网设备 → RoCEv2。
:::

## GPUDirect RDMA 原理

GPUDirect RDMA 是 NVIDIA 的高性能数据传输技术：

- **零拷贝**：GPU 内存 ↔ 网络 ↔ GPU 内存，不经过系统内存
- **内核绕过**：用户空间程序直接向网卡提交 RDMA 指令
- **CPU 卸载**：CPU 不参与数据搬运
- **延迟**：2-5 μs，相比非 GPUDirect 降低一个数量级

:::caution
GPUDirect 必须运行在支持 RDMA 的网络上（InfiniBand 或 RoCE）。标准 TCP/IP 不支持。
:::

## BlueField DPU 技术规格

| 参数 | BlueField-3 |
|------|-------------|
| CPU | 16× Arm Cortex-A78 @ 3.0 GHz |
| 网络 | 400 Gb/s 或 2×200 Gb/s |
| 内存 | 16-32 GB DDR5 |
| 存储接口 | PCIe Gen5 NVMe |

DPU 的四大卸载能力：

1. **网络层**：RDMA 传输、VxLAN/GENEVE 隧道、IPsec 加密
2. **存储层**：NVMe-oF、NVMe/TCP、virtio-blk 虚拟块设备
3. **安全层**：线速加密、防火墙规则、DDoS 防护
4. **效果**：为网络/存储任务节省 30-40% CPU 利用率

:::note
DPU 卸载的是网络/存储协议处理，**不是** AI 计算任务。释放出来的 CPU/GPU 资源用于训练。
:::

## 检查点带宽计算

```
所需带宽（GB/s）= 模型大小（GB）/ 目标写入时间（秒）
```

**示例**：一个 350 GB 的模型需要在 2 分钟内完成检查点：

- 基础带宽：350 / 120 ≈ 2.92 GB/s
- 加上 20% 冗余：2.92 × 1.2 ≈ **3.5 GB/s 最低需求**

## 存储性能需求分层

| 操作类型 | 瓶颈维度 | 典型需求 |
|----------|----------|----------|
| 检查点写入 | 带宽（大块顺序写） | 3-20 GB/s |
| 训练数据加载 | 带宽（大块顺序读） | 10-50 GB/s |
| 元数据操作 | IOPS（文件创建、目录遍历） | 100K-500K IOPS |

## 并行文件系统选择

| 系统 | 典型带宽 | IOPS | 适用场景 |
|------|----------|------|----------|
| Lustre | 3-30 GB/s | 200K-1M | 通用场景，成熟稳定 |
| GPFS/Spectrum Scale | 5-40 GB/s | 500K-2M | 企业级高可靠场景 |
| WekaFS | 20-100 GB/s | 2M-10M | 超高性能，价格溢价 |
| NFS | 0.5-2 GB/s | 20K-50K | 小型集群（低于 16 节点） |

### Lustre 条带设置

```bash
# 为目录设置条带计数（新文件自动继承）
lfs setstripe -c 8 /lustre/checkpoints

# 查看当前条带配置
lfs getstripe /lustre/checkpoints
```

:::caution 高频陷阱
条带计数设成 1 是常见瓶颈——尽管总存储空间很大，却只有 1-2 个 OST 在工作。检查点建议设为 4-8。
:::

## 存储决策树

- **训练检查点** → Lustre/GPFS（带宽 >3 GB/s，并行写入）
- **小数据集（低于 1 TB）** → NFS 可用
- **中等规模（1-50 TB）** → Lustre/GPFS，调高条带
- **海量数据（>50 TB）** → 并行 FS 或从 S3 预缓存到本地 NVMe
- **归档备份** → S3 对象存储（成本低、持久性强）

:::note
S3 对象存储不适合做实时训练存储——高延迟 + 最终一致性。
:::
