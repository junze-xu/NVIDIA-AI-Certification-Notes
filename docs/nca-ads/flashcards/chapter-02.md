---
id: chapter-02
title: "第 2 章：cuDF 实战 — 知识卡片"
description: "哈希连接、分组聚合、空值处理、数据重塑知识卡片"
sidebar_position: 2
---

# cuDF 实战 — 知识卡片

## 卡片 1

**Q：cuDF merge 在 GPU 上使用什么连接算法？**

A：哈希连接（build/probe）。小表自动作为 build 侧，将大事实表与小维度表连接无需手动广播。

---

## 卡片 2

**Q：cuDF 内部如何表示空值？**

A：Arrow 风格的有效性位掩码（每个值 1 位）与数据缓冲区一起存储在 GPU 上。isna/dropna/fillna 因此极快。

---

## 卡片 3

**Q：cuDF fillna() 的 dtype 规则是什么？**

A：填充值的 dtype 必须匹配列 dtype，否则抛出 TypeError。对字符串列执行 `fillna(0)` 会失败！

---

## 卡片 4

**Q：pivot() 和 pivot_table() 的关键区别是什么？**

A：
- `pivot()`：长→宽，索引/列组合重复时报错（无聚合）
- `pivot_table()`：用聚合函数处理重复项

---

## 卡片 5

**Q：cuDF melt() 将什么格式转换为什么格式？**

A：宽格式 → 长格式（与 pivot 相反）。核心参数：id_vars, value_vars, var_name, value_name。

---

## 卡片 6

**Q：cuDF concat 的默认行为和常见陷阱？**

A：默认 axis=0（堆叠行）。不加 `ignore_index=True` 时原始索引被保留，可能在拼接的 DataFrame 间重复。

---

## 卡片 7

**Q：CuPy 中创建可复现随机数据的现代 API 是？**

A：`cp.random.default_rng(seed=N)` 返回 Generator 对象，在其上调用 `.random()`、`.integers()`、`.standard_normal()`。

---

## 卡片 8

**Q：cuDf 的 regex 引擎限制是什么？**

A：仅支持 Python `re` 语法的子集。变长 lookbehind 或 backreference 等高级特性可能不支持。遇到复杂模式应重写为更简的等价形式。
