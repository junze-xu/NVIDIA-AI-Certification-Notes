NCA-GENL · 生成式 AI 与 大语言模型

> NVIDIA Certified Associate – Generative AI LLMs

本仓库对应英伟达 NCA 认证四门初级考试中的 **NCA-GENL（生成式 AI / 大语言模型）**，覆盖从 Transformer 架构到 LLM 应用开发的全链路。官方介绍/参数/人群见 [overview.md](overview.md)，考纲逐条要点见 [exam-objectives.md](exam-objectives.md)。

---

## 考试基本信息

> 官方介绍、参数、面向人群、推荐培训见 [overview.md](overview.md)。

| 项目 | 详情 |
|---|---|
| 考试编号 | NCA-GENL |
| 考试时长 | 60 分钟 |
| 题型 | 50–60 道选择题 |
| 语言 | 支持中文 |
| 及格线 | 约 70% |
| 考试费用 | 960 元 |
| 证书有效期 | 2 年 |
| [官方考试页面](https://www.nvidia.cn/training/certification/generative-ai-llm-learning-path/) | ↗ |

---

## 考点权重与模块拆解

| 模块 | 权重 | 核心考点 |
|---|---|---|
| **核心机器学习和 AI 知识** | **30%** | 神经网络、Transformer 架构、注意力机制、Embedding、基础模型生命周期、预训练-微调-RLHF 对齐、提示工程、幻觉问题、LLM 常见任务（问答/摘要/代码生成） |
| **软件开发** | **24%** | LLM Python 库、RAG 检索增强生成、API 调用、大模型应用集成、Triton 推理服务器、TensorRT 加速、NeMo 基础使用 |
| **实验** | **22%** | 数据集预处理、特征工程、实验设计、超参、评估指标 BLEU/ROUGE |
| **数据分析与可视化** | **14%** | 文本数据清洗、探索性数据分析、可视化解读结果 |
| **可信 AI** | **10%** | 偏见、隐私安全、合规、AI 伦理风险 |

---

## 本仓库结构

```
genl/
├── README.md              # 本文件：考试概览 + 考点大纲
├── overview.md            # 官方《科目解读》章节
├── exam-objectives.md    # 官方 Study Guide 考纲逐条要点 + 阅读材料
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

- **官方 Study Guide（直链）**：https://images.nvidia.cn/aem-dam/zh_cn/Solutions/training/certification/nvt-certification-exam-study-guide-genl-web-zhcn.pdf

> ⚠️ 版权归 NVIDIA 所有；本仓只挂官方直链、不收录副本。

---

## 学习建议（针对运维 / 嵌入式背景）

1. **先啃 Transformer**：这门课里权重最高的模块底层都是 Transformer，建议先搞懂注意力机制、Self-Attention、多头注意力的数学直觉（不要求推导，但要知道每个在干什么）
2. **RLHF 是分水岭**：预训练 → 微调 → RLHF 对齐，这条线是 LLM 和传统 ML 最大的差异，考试占比不低
3. **RAG 动手做一个**：用 LangChain 或 LlamaIndex + 免费 API 做一个最小的 RAG demo，输出贴进 `labs/`，理解检索 + 生成怎么串起来
4. **Triton 和 TensorRT 记职责**：不要求深入，但要知道 Triton 是推理服务器、TensorRT 是模型优化/加速引擎
5. **可信 AI 注意对比题**：偏见 / 隐私 / 合规 / 幻觉这几个维度经常出对比型选择题

---

## DLI 推荐课程

详细课程清单见 [`dli-courses.md`](./dli-courses.md)，本门核心课程（共 5 门）：

| 课程 | 类型 |
|---|---|
| 深度学习新手入门 | 自主学习 S-FX-01 |
| 加速端到端的数据科学工作流 | 自主学习 S-DS-01 |
| 基于 Transformer 的自然语言处理入门 | 自主学习 S-FX-08 |
| 开发基于提示工程的大语言模型（LLM）应用 | 自主学习 S-FX-12 |
| 快速搭建大语言模型（LLM）应用 | 自主学习 S-FX-26 |

---

## 备考进度

- [x] 挂官方 Study Guide 直链（不存副本）
- [x] 整理考点大纲
- [x] 官方科目解读章节 → overview.md
- [ ] 完成 5 门 DLI 课程
- [ ] 产出 overview.md 完整知识梳理
- [ ] 完成 RAG / 提示工程 labs 实操
- [ ] 整理 flashcards
- [ ] 模拟考试 / 报名正式考
