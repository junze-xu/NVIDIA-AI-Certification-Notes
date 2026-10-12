---
id: chapter-11
title: "第 11 章：可视化与部署 — 速查表"
description: "cuxfilter、Datashader、批量评分、漂移检测"
sidebar_position: 11
---

# 可视化与部署 — 速查表

## GPU → CPU 转换（绘图所需）

| 对象 | 方法 | 结果 |
|------|------|------|
| cuDF DataFrame | `.to_pandas()` | pandas DataFrame |
| cuDF Series | `.to_numpy()` | NumPy 数组 |
| CuPy 数组 | `.get()` | NumPy 数组 |

:::note
matplotlib、seaborn 等经典绘图库仅 CPU，无法直接接受 GPU 驻留对象。
:::

## 可视化库选择

| 需求 | 工具 |
|------|------|
| 小/中型静态图，CPU 数据 | matplotlib / seaborn |
| 大型 GPU 驻留交互仪表板 | cuxfilter |
| 巨型点云聚合渲染 | Datashader |
| 快速交互式 Web 图表 | Plotly |

:::tip
GPU 驻留 + 大规模 + 需要交互性 → cuxfilter/Datashader。
:::

## 批量 vs 在线评分

| 因素 | 批量评分 | 在线/实时评分 |
|------|----------|--------------|
| 延迟 | 分钟—小时可接受 | 毫秒级 |
| 量 | 大、计划性 | 每请求、连续 |
| 示例 | 每夜流失评分 | 结账时欺诈检测 |

## 模型与数据漂移

| 术语 | 含义 | 检测信号 |
|------|------|----------|
| 数据漂移 | 输入特征分布偏移 | 比较特征分布变化 |
| 概念漂移 | 输入→目标关系变化 | 在新标注数据上性能下降 |

## 可复现性清单

1. **全部设种子**：NumPy、CuPy RNG 种子、cuML 的 `random_state`
2. **锁定环境**：`conda env export`、`pip freeze`、固定版本 Docker
3. **数据/模型版本化**：DVC 管理数据集、MLflow 管理模型
4. **脚本化执行**：将 notebook 逻辑转为参数化脚本
5. **记录运行**：跟踪参数、种子、数据版本和指标
