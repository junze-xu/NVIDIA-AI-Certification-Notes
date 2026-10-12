NCA-GENM · 多模态生成式 AI

> NVIDIA Certified Associate – Generative AI Multimodal

本仓库对应英伟达 NCA 认证四门初级考试中的 **NCA-GENM（多模态生成式 AI）**，涉及 CLIP、扩散模型（文生图）、图像/音频/文本融合等多模态技术。官方介绍/参数/人群见 [overview.md](overview.md)，考纲逐条要点见 [exam-objectives.md](exam-objectives.md)。

---

## 考试基本信息

> 官方介绍、参数、面向人群、推荐培训见 [overview.md](overview.md)。

| 项目 | 详情 |
|---|---|
| 考试编号 | NCA-GENM |
| 考试时长 | 60 分钟 |
| 题型 | 50–60 道选择题 |
| 语言 | 支持中文 |
| 及格线 | 约 70% |
| 考试费用 | 960 元 |
| 证书有效期 | 2 年 |
| [官方考试页面](https://www.nvidia.cn/training/certification/generative-ai-multimodal-associate/) | ↗ |

---

## 考点权重与模块拆解

| 模块 | 权重 | 核心考点 |
|---|---|---|
| **实验** | **25%** | 多模态数据集预处理、模型测试、精度验证、实验评估 |
| **核心机器学习和 AI 知识** | **20%** | 基础深度学习、多模态模型原理、CLIP、扩散模型（文生图）、图像/音频/文本融合原理 |
| **多模态数据** | **15%** | 图像、音频、视频数据特点，模态转换、数据对齐 |
| **软件开发** | **15%** | 多模态 API、应用开发、多模态 Agent、部署流程 |
| **性能优化** | **10%** | 量化、推理加速、显存优化 |
| **数据分析** | **10%** | 多模态数据集清洗、数据质量检查 |
| **可信 AI** | **5%** | 多模态内容风险、版权、伦理 |

---

## 本仓库结构

```
genm/
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

- **官方 Study Guide（直链）**：https://images.nvidia.cn/aem-dam/zh_cn/Solutions/training/certification/9-dli-china-certification-exam-study-guide-genm-a4-web-zhCN-3802950-R2.pdf

> ⚠️ 版权归 NVIDIA 所有；本仓只挂官方直链、不收录副本。

---

## 学习建议（针对运维 / 嵌入式背景 + 创业协同）

1. **CLIP 是枢纽**：CLIP 把图像和文本拉进同一个向量空间，理解它就理解了多模态为什么能"对齐"
2. **扩散模型直觉**：不要求推导，但要记住"加噪 → 去噪"的训练/推理链路，知道 Stable Diffusion 里 U-Net 在干什么
3. **模态对齐是高频考点**：图像/音频/文本怎么映射到同一表征，不同融合策略（early / late / hybrid fusion）是选择题热点
4. **和你带货场景强绑定**：做 labs 时直接用文生图（Stable Diffusion / FLUX）做一组食品包装 / 带货素材，产出直接复用为 `labs/` 案例 + 小红书 / X 的内容素材
5. **权重最大的是实验（25%）**：搞清楚实验设计、精度验证、模型评估的常用指标

---

## DLI 推荐课程

详细课程清单见 [`dli-courses.md`](./dli-courses.md)，本门核心课程（共 6 门）：

| 课程 | 类型 |
|---|---|
| 深度学习新手入门 | 自主学习 S-FX-01 |
| Fundamentals of Deep Learning | 讲师带班 C-FX-01 |
| Accelerating End-to-End Data Science Workflows | 自主学习 S-DS-01 |
| Fundamentals of Accelerated Data Science | 讲师带班 C-DS-02 |
| Building Conversational AI Applications | 讲师带班 C-FX-06 |
| Computer Vision for Industrial Inspection | 讲师带班 C-MF-01 |

---

## 备考进度

- [x] 挂官方 Study Guide 直链（不存副本）
- [x] 整理考点大纲
- [x] 官方科目解读章节 → overview.md
- [ ] 完成 6 门 DLI 课程
- [ ] 产出 overview.md 完整知识梳理
- [ ] 完成文生图 labs 实操 + 带货素材产出
- [ ] 整理 flashcards
- [ ] 模拟考试 / 报名正式考
