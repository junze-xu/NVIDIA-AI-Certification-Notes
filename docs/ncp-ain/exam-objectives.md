---
sidebar_position: 2
title: 考纲要点
---

# NCP-AIN AI Networking Professional 考纲逐条要点

> 来源：英伟达官方考试页面 · [AI Networking Professional](https://www.nvidia.cn/training/certification/ai-networking-professional/)
>
> ⚠️ 版权归 NVIDIA 所有；本仓只整理覆盖度清单，不含 PDF 副本。

## 域 1 · AI 数据中心设计与优化（考试权重 5%）

| # | 考点 | 状态 |
|---|---|---|
| 1.1 | 描述 AI 工厂网络架构及其组件 (GPU、BlueField、可扩展单元 SU、交换机) | ⬜ |
| 1.2 | 描述高性能 AI 工作负载的轨道优化拓扑结构 | ⬜ |
| 1.3 | 描述 GPU 间的通信方式 | ⬜ |

## 域 2 · NVIDIA Spectrum 网络（考试权重 30%）

| # | 考点 | 状态 |
|---|---|---|
| 2.1 | 配置 NVIDIA Spectrum-X 交换机，支持 RoCE (RDMA over Converged Ethernet) | ⬜ |
| 2.2 | 启用并验证 QoS、ECN、PFC、自适应路由、遥测 | ⬜ |
| 2.3 | 配置多租户 BGP-EVPN，实现租户工作负载隔离 | ⬜ |
| 2.4 | 使用 NVIDIA Air 模拟网络环境并识别潜在问题 | ⬜ |
| 2.5 | 使用带内遥测和 NVIDIA What Just Happened (WJH) 诊断拥塞或丢包 | ⬜ |
| 2.6 | 使用 NetQ™ 进行实时网络监控 (拥塞检测和延迟测量) | ⬜ |
| 2.7 | 安装 DOCA™ 配置 SuperNIC™ 功能 | ⬜ |

## 域 3 · NVIDIA InfiniBand 网络（考试权重 30%）

| # | 考点 | 状态 |
|---|---|---|
| 3.1 | 执行初始配置和资源部署，包括高可用性 (HA) | ⬜ |
| 3.2 | 配置分区键 (PKeys)，确保 InfiniBand 网络多租户安全 | ⬜ |
| 3.3 | 配置 QoS 和自适应路由，根据拥塞动态调整路径 | ⬜ |
| 3.4 | 使用 UFM 监控 InfiniBand 链路状态和带宽利用率 | ⬜ |

## 域 4 · Kubernetes 集成（考试权重 5%）

| # | 考点 | 状态 |
|---|---|---|
| 4.1 | 部署 NVIDIA Network Operator，管理集群中的 RDMA 接口和 InfiniBand 网络 | ⬜ |
| 4.2 | 验证 NVIDIA Network Operator 功能 | ⬜ |

## 域 5 · 故障排除工具（考试权重 20%）

| # | 考点 | 状态 |
|---|---|---|
| 5.1 | 使用 cl-resource-query 检查 Spectrum-X 环境中的资源分配 | ⬜ |
| 5.2 | 使用 WJH 服务进行实时事件分析 | ⬜ |
| 5.3 | 验证 GPU、CPU 和存储系统之间的低延迟互连 | ⬜ |
| 5.4 | 使用 UFM 系统健康功能排查 InfiniBand 故障 | ⬜ |
| 5.5 | 使用 ib_write_lat、ib_write_bw、ibping、ibstat、ibdiagnet、ibnodes、iblinkinfo 等命令排查连接故障 | ⬜ |

## 域 6 · 自动化和配置（考试权重 10%）

| # | 考点 | 状态 |
|---|---|---|
| 6.1 | 通过 NVUE 模板管理 Spectrum-X 交换机配置 | ⬜ |
| 6.2 | 写 Ansible Playbook 自动化网络设置任务（VLAN、RoCE 等） | ⬜ |

## 推荐阅读

- [NVIDIA 官方认证页](https://www.nvidia.cn/training/certification/ai-networking-professional/)
- [NVIDIA Spectrum-X](https://www.nvidia.cn/networking/spectrumx/)
- [NVIDIA InfiniBand](https://www.nvidia.cn/networking/infiniband/)
- [NVIDIA DOCA](https://developer.nvidia.com/networking/doca)
