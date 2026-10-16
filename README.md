# NVIDIA AI 认证中文资料库（非官方）· JunzeXu

> ⚠️ 本仓库为非官方个人学习笔记，与 NVIDIA 无关联；商标归 NVIDIA Corporation。官方 Study Guide 只挂直链、不存副本。

**2026-10-12 开仓 · 目标：2026 年内完成 NCA-AIIO 首考（以官方预约为准）· 每天用 commit 公开进度**

![license](https://img.shields.io/badge/license-CC--BY--NC--SA--4.0-green) ![lang](https://img.shields.io/badge/lang-中文-blue)

## 这是什么

NVIDIA 认证备考资料（NCA 四门初级 + NCP 六门中级）、真机 labs、中英术语对照。每门考试的考纲来自官方 Study Guide，逐条拆解并标注覆盖度。

全站内容免费公开在线浏览，可按考试拆分 PDF（每门一个）下载复习，关注公众号「JunzeXuInfra」领取。

**在线浏览**：[https://junze-xu.github.io/NVIDIA-AI-Certification-Notes/](https://junze-xu.github.io/NVIDIA-AI-Certification-Notes/)

English version → [README.en.md](README.en.md)

这里适合三种人：**备考的人**——十门考试逐域拆解，按自己节奏复习；**想转型的人**——想用NVIDIA 认证体系系统补齐 GPU/AI 知识的人；**交流讨论的人**——Issue / Discussions 里反馈错题，一起把资料改得更准。

## 怎么读这个仓库

每门考试的 README 里有一张 **覆盖度对照表**：官方考纲要点逐条一行 → 点进去有文件就是已完成，空的表示还没写——**你随时能验证我有没有漏考点，也随时能抓到我还没学完**。

考试目录下还附了 `overview.md`（官方《科目解读》原文）和 `references.md`（全部官方 PDF 直链 + 推荐阅读），入口处汇总、细节处深挖。

## 科目状态

### NCA 初级（Associate）

| 考试 | 名称 | 权重最高域 | 入口 |
|---|---|---|---|
| NCA-AIIO | AI 基础架构与运维 | AI 基础架构 40% | [nca-aiio/](nca-aiio/README.md) |
| NCA-GENL | 生成式 AI 与大语言模型 | 核心 ML 知识 30% | [nca-genl/](nca-genl/README.md) |
| NCA-GENM | 多模态生成式 AI | 实验 25% | [nca-genm/](nca-genm/README.md) |
| NCA-ADS | 加速数据科学 RAPIDS | 数据处理 23% | [nca-ads/](nca-ads/README.md) |

### NCP 中级（Professional）

| 考试 | 名称 | 前置 | 费用 | 入口 |
|---|---|---|---|---|
| NCP-AII | AI Infrastructure Professional | ← NCA-AIIO | 2880 元 | [ncp-aii/](ncp-aii/README.md) |
| NCP-AIO | AI Operations Professional | ← NCP-AII | 2880 元 | [ncp-aio/](ncp-aio/README.md) |
| NCP-AIN | AI Networking Professional | ← NCP-AII | 2880 元 | [ncp-ain/](ncp-ain/README.md) |
| NCP-GENL | Generative AI LLMs Professional | ← NCA-GENL | 1580 元 | [ncp-genl/](ncp-genl/README.md) |
| NCP-AAI | Agentic AI Professional | ← NCP-GENL | 1580 元 | [ncp-aai/](ncp-aai/README.md) |
| NCP-ADS | Accelerated Data Science Professional | ← NCA-ADS | 1580 元 | [ncp-ads/](ncp-ads/README.md) |

> ⚠️ NCP-OUSD（OpenUSD 开发）偏航科目，本仓不做覆盖。

## 内容边界（先说清楚，免得互相误会）

- **全站免费公开**：学习笔记、速查卡、闪卡、中英术语对照、真机 labs、官方 Study Guide 要点翻译——全部在线浏览
- **按考试拆分 PDF**：每门考试一个 PDF，方便离线复习，关注公众号「JunzeXuInfra」领取
- **红线**：官方 PDF 文件本身、真题/回忆题（dumps）永远不入仓，详见 [meta/MAINTENANCE.md](meta/MAINTENANCE.md)

## 仓库地图

```
├── nca-aiio|nca-genl|nca-genm|nca-ads/   # NCA 初级四门
├── ncp-aii|aio|ain|genl|aai|ads/          # NCP 中级六门
├── common/               # 中英术语对照 · 各目录模板
└── meta/                 # 免责 · 变更记录 · 维护规则 · LESSONS 踩坑手册
```

### 每门考试标准结构

```
<exam>/
├── README.md              # 考试概览 + 覆盖度对照表 + 进度清单
├── overview.md            # 官方《科目解读》章节（介绍/参数/人群/培训）
├── exam-objectives.md    # 官方 Study Guide 考纲逐条要点 + 推荐阅读（NCA 级已交付）
├── references.md         # 官方 PDF 直链 + 推荐阅读链接汇总（NCA 级已交付）
├── notes/                # 考纲域笔记（按域编号）
├── cheatsheets/          # 速查卡
├── flashcards/           # 闪卡
├── labs/                 # 真机实操记录（脚本+输出+verify）
└── dli-courses.md        # 官方 DLI 免费课程清单 + 学习顺序建议
```

## 许可与引用

文字内容基于 NVIDIA 官方公开资料整理，版权归原官方文档作者所有。本站原创部分采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans) 许可。labs 代码 MIT。

## 领取 PDF

关注微信公众号「JunzeXuInfra」，回复考试代码（如 `NCA-AIIO`），领取对应考试的完整 PDF（每门一份，离线可用）。

## 反馈

发现错误 → 开 Issue，改正后写进 CHANGELOG 并感谢你。

—— [JunzeXu](https://github.com/junze-xu)，苏州。
