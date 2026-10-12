---
id: chapter-01
title: "第 1 章：cuDF 基础 — 速查表"
description: "GPU DataFrame、pandas 桥接、Arrow 列式格式"
sidebar_position: 1
---

# cuDF 基础 — 速查表

## cudf.pandas 启用方式

| 场景 | 命令 | 规则 |
|------|------|------|
| 脚本（CLI） | `python -m cudf.pandas script.py` | 必须在 `import pandas` 之前调用 |
| Jupyter/IPython | `%load_ext cudf.pandas` | 必须在 `import pandas` 之前 |
| 脚本内部 | `import pandas as pd`（无需修改） | 激活后代码不变 |

:::caution 核心陷阱
在 `import pandas` **之后**才激活 cudf.pandas → 静默禁用加速，不会报错。
:::

## cuDF 原生 API

| 任务 | 函数 |
|------|------|
| 创建 DataFrame | `cudf.DataFrame({...})` |
| 读取 CSV | `cudf.read_csv(path)` |
| 读取 Parquet | `cudf.read_parquet(path)` |
| pandas → cuDF | `cudf.from_pandas(df)` |
| cuDF → pandas | `df.to_pandas()` |

## CPU 回退行为

- **支持的操作** → cuDF 在 GPU 上执行
- **不支持的操作**（自定义 `.apply()`、冷门方法）→ 自动回退到 CPU pandas，不报错
- 回退保证正确性，但失去 GPU 速度

## GPU dtype

| dtype | 说明 |
|-------|------|
| 数值（int/float） | 标准数学运算 |
| 字符串 | Arrow 偏移 + 字符缓冲区 |
| **分类（categorical）** | 字典编码整数码，省内存加速 groupby/join |
| 日期时间 | 时间序列运算 |

:::note
cuDF **没有** pandas 的 `object` dtype — 每一列都严格类型化。
:::

## cuDF vs pandas 数据规模

- **小数据（数千行）** → GPU 启动开销可能让 pandas 更快
- **百万级+ 行** → cuDF 并行计算优势明显
- 考试经验法则：题目强调"大规模" → cuDF；强调"小数据" → pandas 可能更合适
