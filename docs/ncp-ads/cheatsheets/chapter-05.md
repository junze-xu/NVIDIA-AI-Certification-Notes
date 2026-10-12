---
id: chapter-05
title: "第 5 章：cuDF 互操作与合成数据 — 速查表"
description: "to_pandas 回退、最小化传输、cudf.datasets.timeseries()"
sidebar_position: 5
---

# cuDF 互操作、合成数据与流水线效率 — 速查表

## CPU 回退最小化

| 场景 | 最佳做法 |
|------|----------|
| cuDF 不支持的方法仅涉及一列 | `to_pandas()` 仅提取该列 → 处理 → 赋回 |
| 不要 | 转整个 DataFrame（2000 万行全拷） |

## 合成数据

| 方法 | 用途 |
|------|------|
| `cudf.datasets.timeseries()` | 匹配 schema 的驻 GPU 合成数据 |

:::info 记忆锚点
to_pandas 仅转所需列；合成数据→cudf.datasets.timeseries。
:::
