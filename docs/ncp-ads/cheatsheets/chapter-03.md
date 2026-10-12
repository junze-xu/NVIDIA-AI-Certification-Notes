---
id: chapter-03
title: "第 3 章：cuDF 基础 — 速查表"
description: "GPU DataFrame、read_csv、向量化 groupby、避免 Python for 循环"
sidebar_position: 3
---

# cuDF 基础：GPU 速度的 DataFrame 操作 — 速查表

## 核心规则

| 操作 | 正确做法 | 错误做法 |
|------|----------|----------|
| 加载 CSV | `cudf.read_csv`（直接在 GPU 上解析） | `pandas.read_csv` 再 `from_pandas` |
| groupby 聚合 | `df.groupby('col').agg(...)` | Python for 遍历唯一键 |
| 列运算 | `df['c'] = df['a'] + df['b']`（向量化）| `df.apply(lambda row: ..., axis=1)` |

:::warning 性能杀手
Python for 循环 + `apply(axis=1)` 强制逐行 Python 执行 → 破坏 GPU 向量化 → 性能回退数百倍。
:::

:::info 记忆锚点
cudf.read_csv 直接上 GPU；向量化 > apply > for 循环。
:::
