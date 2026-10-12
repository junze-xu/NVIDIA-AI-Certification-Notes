---
id: chapter-04
title: "第 4 章：cuDF 进阶 — 速查表"
description: "字符串/日期时间、category 编码、空值有效性位掩码"
sidebar_position: 4
---

# cuDF 进阶：字符串、日期时间、空值与分类类型 — 速查表

## category 编码

| 场景 | 方案 | 效果 |
|------|------|------|
| 低基数（60 唯一值 / 5 亿行） | `category` dtype | 字典存一次 + 整数码 → 大幅降低内存 |

## 空值处理

| 默认行为 | 说明 |
|----------|------|
| `nan_as_null=True` | NaN 自动转空值（有效性位掩码） |

:::info 记忆锚点
低基数大列→category；NaN 默认转空值；手动哈希不如 category 编码。
:::
