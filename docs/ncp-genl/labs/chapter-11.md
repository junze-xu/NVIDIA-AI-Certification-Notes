---
id: chapter-11
title: "第 11 章实验：生产监控与可靠性"
description: "监控仪表板搭建、漂移检测、RCA 实验"
sidebar_position: 11
---

# 实验：生产监控与可靠性

:::note 预计用时 25 分钟 :::

## 实验目标

- 搭建 LLM 监控仪表板
- 实现漂移检测 + 告警
- 完成一次完整的根因分析

## 练习 1：监控仪表板搭建

```bash
# 1. 部署 DCGM Exporter
helm install dcgm-exporter nvidia/dcgm-exporter -n monitoring

# 2. 部署 Prometheus + Grafana
helm install prometheus prometheus-community/kube-prometheus-stack -n monitoring

# 3. 导入 LLM 监控模板 (Grafana Dashboard ID: 1860 + 自定义 LLM 面板)
# 面板包含：GPU 显存、p99 延迟、token/s、队列深度
```

## 练习 2：漂移检测验证

```python
from scipy import stats
import numpy as np

# 1. 计算 PSI
def calc_psi(expected, actual, bins=10):
    breakpoints = np.linspace(0, 1, bins + 1)
    expected_pct = np.histogram(expected, bins=breakpoints)[0] / len(expected)
    actual_pct = np.histogram(actual, bins=breakpoints)[0] / len(actual)
    psi = np.sum((actual_pct - expected_pct) * np.log(actual_pct / expected_pct))
    return psi

# 2. PSI > 0.2 触发告警
psi = calc_psi(baseline_data, current_data)
print(f"PSI = {psi:.3f}")  # > 0.2 → 触发重训管道
```

## 练习 3：根因分析模拟

**场景：部署新模型后 p99 延迟从 200ms 飙升至 800ms**

| 排查步骤 | 操作 | 发现 |
|----------|------|------|
| 1. 确认告警 | Grafana 面板确认 p99 飙升 | 确认真警 |
| 2. 关联变更 | 检查最近 K8s Rollout | 2 小时前部署新模型 |
| 3. 分层排查 | DCGM 看 GPU 正常；看 CPU post-processing | CPU 利用率 95% |
| 4. 取证 | trace 分析显示 preprocessing 耗时占 70% | 新模型 token 数翻倍 |
| 5. 修复 | 优化 preprocessing 流水线 + 扩容 CPU 节点 | p99 恢复 180ms |

## 关键要点

:::info 本章记忆锚点
监控四层=硬件→服务→数据→业务；PSI>0.2=漂移；RCA=确认→关联→分层→取证→修复；DCGM+Prometheus+Grafana=标准监控栈。
:::
