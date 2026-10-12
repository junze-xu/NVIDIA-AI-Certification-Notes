---
sidebar_position: 1
title: 7 大高频易混考点
---

# NCA-AIIO 备考：7 个高频易混考点

> 来源整合自 [Eason Cao 的实战备考经验](https://easontechtalk.com/zh-CN/nvidia-nca-aiio-exam/)（已获作者授权思路整合）。
>
> ⚠️ 本文整合自第三方备考经验，仅覆盖易混考点，**不能替代完整考试大纲**。
> 时间分配仍以官方 38%／40%／22% 领域占比为准。

---

## 考试基本信息（补充）

| 项目 | 内容 |
|---|---|
| 考试时长 | 60 分钟 |
| 题目数量 | **50 题**（平均每题只有 1.2 分钟） |
| 考试费用 | 125 美元（部分地区另计税费） |
| 考试语言 | 英语 |
| 考试形式 | 在线远程监考 |
| 有效期 | 两年（可通过重考取证） |

---

## 速记口诀

| 一句话 | 详情 |
|---|---|
| MIG 最多切 **7** 个（ flagship 卡） | A30 最多 4 个 |
| GPU Operator 管**软件**，HPA 管**扩缩** | 职责单一 |
| DCGM 看**GPU**，BCM 看**集群** | 监控粒度不同 |
| DPU 三使命：**卸载/加速/隔离** | offload / accelerate / isolate |
| GDS↔存储，RDMA↔网卡，P2P↔GPU | 看清传输**端点** |
| H100：1GbE 给 BMC，10GbE 带内起步 | 4 套 SuperPOD 网络 |
| 训练看**吞吐量**，推理看**时延** | 设计侧重点 |

---

## 7 大易混考点详解

### 1. MIG 最多可切 7 个（不是 8 个）

| GPU 型号 | 最大 MIG 实例数 |
|---|---|
| A100、H100、H200、B200、GB200 | **7 个** |
| A30 | 4 个 |
| RTX PRO Blackwell | 2 或 4 个（因型号而异） |

- 超出上限的工作负载可能改用 **time-slicing**（时间分片）或其他软件共享机制
- time-slicing **没有**显存或故障隔离（MIG 有）
- 👉 考试会考"A100/H100 切 8 个对不对？"→ **错，最多 7 个**

### 2. GPU Operator vs HPA / Cluster Autoscaler

| 工具 | 职责 |
|---|---|
| **GPU Operator** | 部署 + 管理 NVIDIA 软件组件：驱动、Container Toolkit、Device Plugin、DCGM Exporter |
| **HPA** | 根据负载自动扩缩**应用副本** |
| **Cluster Autoscaler** | 根据调度需求扩缩**集群节点** |

> ⚠️ GPU Operator **不会** 自动扩缩副本或节点！

### 3. DCGM vs Base Command Manager (BCM)

| 工具 | 层级 | 职责 |
|---|---|---|
| **DCGM** | 节点级 | GPU 遥测、诊断、健康检查、拓扑、作业统计（温度/功耗/XID） |
| **BCM** | 集群级 | 部署、工作负载管理、基础设施监控 |

**速记**：题目强调"集群部署"→ BCM；强调"GPU 健康/遥测"→ DCGM

### 4. DPU 三大使命：Offload / Accelerate / Isolate

以 BlueField 为例：

| 使命 | 解释 |
|---|---|
| **Offload**（卸载） | 从主机 CPU 接管基础设施服务（网络、存储、安全） |
| **Accelerate**（加速） | 用专用硬件引擎处理这些服务（比通用 CPU 快） |
| **Isolate**（隔离） | 将基础设施控制平面与应用工作负载物理隔离 |

> BlueField = 把 CPU 不擅长的活拿过来、干得更快、还互不干扰

### 5. GDS vs GPUDirect RDMA vs CUDA P2P

| 技术 | 数据路径 | 避免的中转 |
|---|---|---|
| **GPUDirect Storage (GDS)** | GPU ↔ 本地/远程**存储** | CPU 系统内存中转 |
| **GPUDirect RDMA** | GPU ↔ **第三方 PCIe 设备**（通常=网卡） | 数据存到主机内存 |
| **CUDA P2P** | GPU ↔ **GPU**（同系统内） | 主机内存中转 |

**解题关键**：先找"两端"是什么
- 网络数据进显存 → **GPUDirect RDMA**
- 文件/块 I/O GPU 直读 → **GDS**
- 同一系统内 GPU 显存互访 → **CUDA P2P**

### 6. DGX H100 端口与 SuperPOD 网络

| 接口类型 | 速率 | 用途 |
|---|---|---|
| BMC 管理口 | **1 GbE** RJ45 | 带外管理（IPMI） |
| 带内系统管理 | **10 GbE** 起步 | 系统管理流量 |

DGX H100 SuperPOD 参考架构：**4 套独立网络**

| 网络 | 用途 |
|---|---|
| 计算网络 | GPU 间数据交换 |
| 存储网络 | 存储访问 |
| 带内管理网络 | 系统管理 |
| 带外管理网络 | BMC/IPMI |

> ⚠️ 这是参考设计，不是所有 AI 集群的统一规则

### 7. 训练 vs 推理设计侧重

| 维度 | 训练 | 推理 |
|---|---|---|
| **侧重** | 吞吐量（throughput） | 时延（latency） |
| 批次大小 | 大 batch | 小 batch |
| 网络要求 | InfiniBand 等高带宽低延迟 | 不一定需要 IB |
| 精度 | FP32/FP16/BF16 | INT8/FP8 等低精度 |
| 优化工具 | PyTorch, Megatron | TensorRT, Triton |

> ⚠️ 这是常见侧重，**不是绝对规则**。现实中存在大批次推理、低精度训练。

---

## 备考方法论（三阶段）

| 阶段 | 时间 | 内容 |
|---|---|---|
| 1. 官方课程打基础 | ~8h | Coursera / Academy 同名课程 |
| 2. 模拟题诊断 | ~4h | ExamPro NCA-AIIO + 复盘错题 |
| 3. 整理笔记 | ~4h | AI 生成模拟题 + 精简笔记 |

**高 ROI 方法**：用 Gemini/LLM 根据笔记生成练习题，多次命中遗漏知识点。

## 推荐资源

| 资源 | 链接 |
|---|---|
| 官方认证页 | [NVIDIA 官网](https://www.nvidia.cn/training/certification/ai-infrastructure-operations-associate/) |
| Study Guide (PDF) | [Web PDF](https://images.nvidia.cn/aem-dam/zh_cn/Solutions/training/certification/nvt-certification-exam-study-guide-aiio-web-cn.pdf) |
| Coursera 课程 | [AI Infrastructure and Operations Fundamentals](https://www.coursera.org/) |
| NVIDIA Academy | [AIIO Fundamentals](https://www.nvidia.cn/training/certification/) |
| ExamPro | [NCA-AIIO](https://exampro.co/) |

---

> 📜 版权声明：本文备考经验整合自 Eason Cao（FANNG / AWS SA Pro / CKA）。
> 原始技术内容 © NVIDIA Corporation。本页面仅做思路整理与转述，未复制原文段落。
