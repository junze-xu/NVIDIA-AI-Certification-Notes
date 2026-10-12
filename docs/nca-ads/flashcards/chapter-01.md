---
id: chapter-01
title: "第 1 章：cuDF 基础 — 知识卡片"
description: "GPU DataFrame、cudf.pandas、Arrow 格式知识卡片"
sidebar_position: 1
---

# cuDF 基础 — 知识卡片

## 卡片 1

**Q：脚本和 Jupyter 中启用 cudf.pandas 的正确方式分别是什么？**

A：
- 脚本：`python -m cudf.pandas script.py`
- Jupyter：`%load_ext cudf.pandas`

**核心规则**：必须在任意 `import pandas` **之前**激活。

---

## 卡片 2

**Q：在 `import pandas` 之后才加载 cudf.pandas 会怎样？**

A：该会话的 GPU 加速被静默禁用，不会报错。pandas 代码正常运行但不会获得 GPU 加速。

---

## 卡片 3

**Q：cuDF 的底层内存格式是什么？有什么好处？**

A：基于 Apache Arrow 的列式格式。好处：
- 与其他 Arrow 兼容库零拷贝交换
- 列式布局让 GPU 向量化内核按列高效操作

---

## 卡片 4

**Q：cuDF 有没有 `object` dtype？**

A：**没有**。cuDF 仅使用类型化列（数值、字符串、分类、日期时间），与 pandas 不同。每一列都严格类型化。

---

## 卡片 5

**Q：对包含数百万行且唯一值很少的字符串列，最佳 dtype 是什么？**

A：**categorical（分类）**。字典编码整数码，最小化 GPU 内存并加速 groupby/join 操作。

---

## 卡片 6

**Q：cudf.pandas 遇到不支持的操作时会怎样？**

A：自动、透明地回退到 CPU pandas 执行该操作 — 不报错、无需改代码。保证正确性但失去 GPU 速度。

---

## 卡片 7

**Q：cuDF 通常在什么数据规模上开始胜过 pandas？**

A：行数进入百万级时优势显现。小 DataFrame（数千行）上 GPU 内核启动和 PCIe 传输开销可能让 pandas 更快。

---

## 卡片 8

**Q：`import cudf as pd` 和 cudf.pandas 有什么区别？**

A：`import cudf as pd` — 不受支持的 pandas API 会硬失败（报错）；cudf.pandas — 不受支持的操作会回退到 CPU 执行。

---

## 卡片 9

**Q：将 Parquet 文件读入 GPU 内存的最佳方式是什么？**

A：`cudf.read_parquet(path)` — 直接读入 GPU。避免 `pd.read_parquet()` + `cudf.from_pandas()` 的 CPU 往返。

---

## 卡片 10

**Q：cuDF 字符串列的存储方式与 pandas 有何不同？**

A：cuDF 使用 Arrow 风格布局（偏移量 + 字符缓冲区），支持 GPU 并行字符串操作。pandas 使用 Python 字符串对象数组。
