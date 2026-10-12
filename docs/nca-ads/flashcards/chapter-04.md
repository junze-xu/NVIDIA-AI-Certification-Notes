---
id: chapter-04
title: "第 4 章：I/O 与 GPU 流水线 — 知识卡片"
description: "Parquet 下推、压缩编解码、Spark RAPIDS 知识卡片"
sidebar_position: 4
---

# I/O 与 GPU 流水线 — 知识卡片

## 卡片 1

**Q：Parquet 的列裁剪和谓词下推语法是什么？**

A：
```python
cudf.read_parquet(path, columns=['id','amount'], filters=[('amount','>',1000)])
```

在 `read_parquet()` **之后**再过滤 ≠ 谓词下推。

---

## 卡片 2

**Q：解码速度最快的压缩编解码是什么？**

A：Snappy（最快但压缩比低）。吞吐关键、频繁热读场景首选。

---

## 卡片 3

**Q：Spark RAPIDS Accelerator 的作用是什么？**

A：让现有 Spark SQL/DataFrame 任务无需重写即可 GPU 加速。关键是"无代码重写"措辞。

---

## 卡片 4

**Q：CSV 可以用 cuDF 读取吗？**

A：**可以** — 只是不高效，并非不可能。考试干扰项"GPU 不能读 CSV"是错误的。
