---
id: chapter-02
title: "第 2 章：cuDF 实战 — 速查表"
description: "合并连接、分组聚合、空值处理、字符串操作"
sidebar_position: 2
---

# cuDF 实战 — 速查表

## 合并连接

- **算法**：GPU 哈希连接（build/probe），无需 sort-merge
- **自动选择**：小表自动作为 build 侧，无需手动广播
- **语法**：`df1.merge(df2, on='key', how='left')`（与 pandas 一致）

## 分组聚合

| 任务 | 语法 |
|------|------|
| 多列分组 | `df.groupby(['a','b'])['x'].agg(['sum','mean'])` |
| 命名聚合 | `df.groupby('a').agg(total=('x','sum'))` |

:::tip
用 `.agg([...])` 计算多个统计量，而非链式 `.sum().mean()`。
:::

## 空值处理

| 方法 | 行为 |
|------|------|
| `isna()` / `notna()` | Arrow 有效性位掩码生成布尔值 |
| `dropna()` | 默认 `axis=0, how='any'` |
| `fillna(value)` | 值 dtype 必须匹配列 dtype，否则 TypeError |

:::caution
对字符串列执行 `fillna(0)` 会失败！
:::

## 字符串方法

- `.str.contains/replace/extract(regex=True)` 仅支持 Python `re` 子集
- 变长 lookbehind 和 backreference 可能不支持
- 分类列（categorical）对重复字符串值 GPU 优化比较

## 数据重塑

| 操作 | 方向 | 说明 |
|------|------|------|
| `melt()` | 宽 → 长 | id_vars, value_vars, var_name, value_name |
| `pivot()` | 长 → 宽 | 重复索引/列时报错（无聚合） |
| `pivot_table()` | 长 → 宽 | 聚合函数处理重复项 |
| `concat()` | 堆叠 | 默认 axis=0；用 `ignore_index=True` 避免重复索引 |

## CuPy 随机数生成

| 任务 | 调用 |
|------|------|
| 可复现生成器 | `rng = cp.random.default_rng(seed=42)` |
| 均匀浮点数 | `rng.random(n)` |
| 整数 | `rng.integers(low, high, size=n)` |
| 正态分布 | `rng.standard_normal(n)` |

:::note
推荐 Generator API，而非遗留的 `cp.random.seed()` 全局状态。
:::
