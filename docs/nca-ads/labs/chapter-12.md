---
id: chapter-12
title: "第 12 章实验：全真模拟与策略"
description: "限时模拟考试、答案解析、薄弱点分析实验"
sidebar_position: 12
---

# 实验：全真模拟与策略

:::note 预计用时
60 分钟
:::

## 实验目标

- 体验完整的 60 分钟考试节奏
- 练习关键词驱动的答题策略
- 识别 RAPIDS 工具速配

## 练习 1：RAPIDS 工具速配测试

给出以下场景，选择正确的 RAPIDS 工具：

| 场景 | 正确工具 |
|------|----------|
| 单 GPU DataFrame 操作 | ? |
| 多 GPU/外存 DataFrame | ? |
| GPU ML 算法（单 GPU） | ? |
| 图算法 PageRank | ? |
| 地理空间操作 | ? |

<details>
<summary>查看参考答案</summary>

| 场景 | 正确工具 |
|------|----------|
| 单 GPU DataFrame 操作 | cuDF |
| 多 GPU/外存 DataFrame | Dask-cuDF |
| GPU ML 算法（单 GPU） | cuML |
| 图算法 PageRank | cuGraph |
| 地理空间操作 | cuSpatial |

</details>

## 练习 2：关键词解码

匹配关键词和优先考虑因素：

| 关键词 | 优先考虑 |
|--------|----------|
| BEST | ? |
| FASTEST | ? |
| MOST memory-efficient | ? |
| MOST scalable | ? |

## 练习 3：排除法练习

**以下哪种情况应该选择 Dask-cuDF？**

A. 数据 1000 行，单 GPU 轻松容纳
B. 数据 10TB，需要跨 4 个 GPU 处理
C. 场景要求最小化成本
D. 只需做简单的 describe() 统计

<details>
<summary>答案</summary>

**B** — 数据 10TB 且需多 GPU 时才需要 Dask-cuDF。其他场景单 GPU cuDF 即可。

</details>

## 关键要点

:::info 本章记忆锚点
先读关键词，再排除错误工具-规模匹配。数据适合单 GPU 就不选 Dask。时间分配：90 秒标记阈值，最后 5-8 分钟处理标记题。
:::
