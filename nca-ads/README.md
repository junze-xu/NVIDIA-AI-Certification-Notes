NCA-ADS · 加速数据科学 RAPIDS

> NVIDIA Certified Associate – Accelerated Data Science

本仓库对应英伟达 NCA 认证四门初级考试中的 **NCA-ADS（加速数据科学）**，聚焦 NVIDIA RAPIDS 生态（cuDF、cuML、Dask），用 GPU 全栈加速数据科学工作流。

> ⚠️ 本门考试**无官方中文版学习指南**，仅有英文版 Study Guide。官方介绍/参数/人群见 [overview.md](overview.md)，考纲逐条要点（英文翻译版）见 [exam-objectives.md](exam-objectives.md)。

---

## 考试基本信息

> 官方介绍、参数、面向人群、推荐培训见 [overview.md](overview.md)。

| 项目 | 详情 |
|---|---|
| 考试编号 | NCA-ADS |
| 考试时长 | 60 分钟 |
| 题型 | 50–60 道选择题 |
| 语言 | 支持中文（但部分题干可能仍涉及英文术语） |
| 及格线 | 约 70% |
| 考试费用 | 960 元 |
| 证书有效期 | 2 年 |
| [官方考试页面](https://www.nvidia.cn/training/certification/accelerated-data-science-associate/) | ↗ |

---

## 考点权重与模块拆解

| 模块 | 权重 | 核心考点 |
|---|---|---|
| **数据处理与准备** | **23%** | cuDF、GPU 版 pandas，CSV/Parquet 读写、分组、连接、空值处理，CPU-GPU 数据传输开销 |
| **机器学习（RAPIDS）** | **16%** | cuML，GPU 加速机器学习算法，模型训练/验证 |
| **数据科学流水线自动化** | **13%** | ETL 完整工作流，Dask 分布式框架，流水线调度 |
| **描述性分析 & 可视化** | **13%** | GPU 加速 EDA、统计指标、可视化解读、异常检测 |
| **加速数据科学基础 | **12%** | GPU 加速原理、CPU/GPU 负载对比、CUDA 基础概念、过拟合欠拟合 |
| **MLOps 实践入门** | **10%** | 模型版本管理、实验跟踪 |
| **高级数据结构** | **7%** | GPU 上数组、分布式数据结构 |
| **软件 & 环境管理** | **6%** | conda/docker 环境，nvidia-smi，CUDA/RAPIDS 兼容性检查，Git 基础 |

---

## 本仓库结构

```
ads/
├── README.md              # 本文件：考试概览 + 考点大纲
├── overview.md            # 官方《科目解读》章节
├── exam-objectives.md    # 官方 Study Guide 考纲逐条要点（英文翻译版）
├── references.md         # 官方 PDF 直链 + 推荐阅读链接
├── notes/                # 考纲域笔记
├── cheatsheets/          # 速查卡
├── flashcards/           # 闪卡
├── questions/            # 自编样题
├── labs/                 # 动手实操
├── mock/                 # 留壳导流
└── dli-courses.md        # DLI 课程清单
```

---

## 官方学习指南

- **官方 Study Guide（直链）**：https://dam-cdn.nvd.orangelogic.com/AssetLink/328u55865k15h7h0r28e70o023andi0r.pdf

> ⚠️ 官方仅发布英文版；社区中文译本存于本地/个人站，不入本仓（衍生作品版权风险）。以英文版为准。

---

## 学习建议（针对运维 / 嵌入式背景）

1. **有 pandas 上手 cuDF 最快**：cuDF API 几乎和 pandas 一一对照，如果你本来会 pandas，这一门上手很快
2. **重点记差异**：不是 API 本身，而是 CPU-GPU 数据传输开销、什么时候用 cuDF 反而更慢（小数据量）、Dask 怎么把大数据切片并行
3. **权重最高的是数据处理（23%）**：cuDF 操作、内存管理、IO 格式（CSV vs Parquet）是出题大头
4. **MLOps 入门占 10%**：MLflow / 实验跟踪 / 模型版本管理这些概念相对独立，单独拿一两小时背一下即可
5. **环境管理占 6%但容易拿分**：conda / docker / nvidia-smi / CUDA-RAPIDS 兼容性检查，属于知道就是知道的基础题

---

## DLI 推荐课程

详细课程清单见 [`dli-courses.md`](./dli-courses.md)，本门核心课程（共 3 门）：

| 课程 | 类型 |
|---|---|
| 加速端到端数据科学工作流 | 自主学习 S-DS-01 |
| 面向时间序列预测的加速机器学习 | 自主学习 S-DS-10 |
| 利用 GPU 加速处理表格式数据的特征工程最佳实践 | 自主学习 S-DS-06 |

---

## 备考进度

- [x] 挂官方 Study Guide 直链（不存副本）
- [x] 整理考点大纲
- [x] 官方科目解读章节 → overview.md
- [ ] 完成 3 门 DLI 课程
- [ ] Colab 跑 cuDF vs pandas 对比 notebook
- [ ] 产出 overview.md 完整知识梳理
- [ ] 整理 flashcards
- [ ] 模拟考试 / 报名正式考
