---
id: chapter-06
title: "第 6 章：Kubernetes 与 Slurm 编排"
description: "K8s GPU 配置、Slurm 调度、Base Command 平台速查表"
sidebar_position: 6
---

# Kubernetes 与 Slurm 编排速查

## 编排器应用场景

| 工作负载类型 | 首选编排器 | 原因 |
|-------------|-----------|------|
| 实时推理 API（长期运行） | Kubernetes | 自动扩缩容、负载均衡、滚动更新 |
| 批量模型训练 | Slurm | Gang 调度、MPI 集成、回填调度 |
| MLOps 流水线（容器化） | Kubernetes | CI/CD 原生集成、Helm 管理 |
| 多节点 HPC 仿真 | Slurm | InfiniBand 原生支持、紧耦合作业 |

:::tip 记忆口诀
**K8s = 长期运行、弹性推理**；**Slurm = 批量作业、刚性分配**。
:::

## Kubernetes GPU 资源配置

GPU 资源在 Pod 中以扩展资源请求：

```yaml
resources:
  requests:
    nvidia.com/gpu: 2  # requests 必须 = limits
  limits:
    nvidia.com/gpu: 2
```

关键约束：
- 资源名为 `nvidia.com/gpu`
- 仅支持整数值（不支持 GPU 分片）
- `requests` 必须等于 `limits`（不可超卖）
- 需要部署 NVIDIA GPU Device Plugin DaemonSet

## Pod 调度控制

**Node Selector**（简单场景）：

```yaml
nodeSelector:
  nvidia.com/gpu.product: NVIDIA-A100-SXM4-80GB
```

**Pod 反亲和性**（分散副本，避免同节点）：

```yaml
affinity:
  podAntiAffinity:
    requiredDuringSchedulingIgnoredDuringExecution:
    - topologyKey: kubernetes.io/hostname
      labelSelector:
        matchLabels:
          app: inference-service
```

:::note 拓扑域说明
- `kubernetes.io/hostname`：每个节点最多 1 个 Pod
- `topology.kubernetes.io/zone`：每个可用区最多 1 个 Pod
:::

## Slurm GPU 调度指令

### Gres 语法

```bash
# 4 个节点，每节点 2 块 GPU = 共 8 块
sbatch --nodes=4 --gres=gpu:2 train.sh

# 指定 GPU 类型
sbatch --gres=gpu:a100:4 train.sh

# 指定高显存型号
sbatch --gres=gpu:a100-80gb:2 train.sh
```

:::caution 高频陷阱
`--gres=gpu:4` = **每节点** 4 块；`--gpus=4` = **整个作业** 共 4 块。差异要分清。
:::

### Slurm 常用参数速查

| 参数 | 含义 | 示例 |
|------|------|------|
| `--nodes=N` | 节点数量 | `--nodes=4` |
| `--gres=gpu:N` | 每节点 GPU 数 | `--gres=gpu:2` |
| `--ntasks-per-node=N` | 每节点任务数 | `--ntasks-per-node=1` |
| `--cpus-per-task=N` | 每任务 CPU 数 | `--cpus-per-task=16` |
| `--mem=XG` | 每节点内存 | `--mem=256G` |
| `--time=HH:MM:SS` | 最大运行时间 | `--time=48:00:00` |

## Base Command 平台

### Base Command Manager（BCM）

- 面向 DGX 系统的本地集群管理方案
- 提供 Web 界面、LDAP/AD 集成、作业提交与监控
- 底层调度引擎为 Slurm

### Base Command Platform（BCP）

- 统一作业调度与数据管理平台
- 支持本地或云部署
- 可对接 Slurm（批量）或 Kubernetes（容器）
- 提供数据集版本管理、作业模板、多租户隔离

:::tip 考试定位
BCP 是**管理层**，不是调度器替代品。底层仍然依赖 Slurm 或 K8s 完成实际调度。
:::

## GPU Device Plugin 工作流程

```
① Device Plugin DaemonSet 发现节点上的 GPU
② 向 kubelet 注册 nvidia.com/gpu 扩展资源
③ Kubelet 向调度器广播 GPU 容量
④ 调度器根据请求将 Pod 分配到合适节点
⑤ Device Plugin 将具体 GPU ID 注入容器环境
```

## 常见陷阱汇编

1. **GPU 不可超卖**：K8s 中 `requests < limits` 对 GPU 无效
2. **gres vs gpus**：`--gres=gpu:4` = 每节点；`--gpus=4` = 总计
3. **反亲和性拓扑域**：优先用 `kubernetes.io/hostname` 做节点级分散
4. **BCP 不替代调度器**：它是上层管理层，需要 K8s/Slurm 支撑
5. **Node Selector 不保证资源**：没有反亲和性约束时，多 Pod 仍可能挤在同一节点
