# NVIDIA AI 认证中文资料库（非官方）· JunzeXu 的转型实录

> ⚠️ 本仓库为非官方个人学习笔记，与 NVIDIA 无关联；商标归 NVIDIA Corporation。官方 Study Guide 只挂直链、不存副本；全部题目为自编题，不含真题。

**2026-10-12 开仓 · 目标：2026 年内完成 NCA-AIIO 首考（以官方预约为准）· 每天用 commit 公开进度**

![license](https://img.shields.io/badge/license-CC--BY--NC--SA--4.0-green) ![status](https://img.shields.io/badge/status-进行中-orange) ![lang](https://img.shields.io/badge/lang-中文-blue)

## 这是什么

一个做了多年 Linux / 嵌入式 / 运维的人，公开转 AI Infra 的全部学习证据：NVIDIA 认证备考笔记（NCA 四门 + NCP 主线三门）、真机 labs、中英术语对照。

给三种人用：**备考的人**（查覆盖度对照表）、**同样想转型的运维人**（按我的路线抄近道）、**招聘我的人**（看真实的动手记录，不是简历形容词）。

## 怎么读这个仓库

每门考试的 README 里有一张 **覆盖度对照表**：官方考纲要点逐条一行 → 点进去有文件就是内容，🟡 是进行中，⬜ 是未开始——**你随时能验证我有没有漏考点，也随时能抓到我还没学完**。

## 科目状态

| 考试 | 名称 | 权重最高域 | 状态 | 入口 |
|---|---|---|---|---|
| NCA-AIIO | AI 基础架构与运维 | AI 基础架构 40% | 🟡 进行中 | [aiio/](aiio/README.md) |
| NCA-GENL | 生成式 AI 与大语言模型 | 核心 ML 知识 30% | ⬜ 未开始 | [genl/](genl/README.md) |
| NCA-GENM | 多模态生成式 AI | 实验 25% | ⬜ 未开始 | [genm/](genm/README.md) |
| NCA-ADS | 加速数据科学 RAPIDS | 数据处理 23% | ⬜ 未开始 | [ads/](ads/README.md) |
| NCP-AII / AIO / AAI | Professional 级 | — | ⬜ 规划 | [ncp/](ncp/README.md) |

## 内容边界（先说清楚，免得互相误会）

- **本仓免费公开**：学习笔记、速查卡、闪卡、中英术语对照、真机 labs（脚本+输出+verify）、每域自编样题 10–15 道
- **站外付费（49 元冲刺包）**：整套模拟卷、错题详解——`mock/` 目录刻意留空并有说明
- **红线**：官方 PDF、真题/回忆题（dumps）永远不进仓、也不进付费包，详见 [meta/MAINTENANCE.md](meta/MAINTENANCE.md)

## 仓库地图

```
├── aiio|genl|genm|ads/   # 每门一目录：notes/ cheatsheets/ flashcards/ questions/ labs/ mock/
├── ncp/                  # NCP 三门规划占位
├── common/               # 中英术语对照 · 各目录模板
└── meta/                 # 免责 · 变更记录 · 维护规则 · LESSONS 踩坑手册
```

## 转型叙事与陪伴

- 7 天 × 8 小时速通四门的完整日志（含每日时间盒）：个人站 journal → `2rnlbxy4.qwenwork.host`
- 运维/嵌入式 → AI Infra 转型陪跑、1v1 诊断：<!-- 公众号注册后在此放名称与二维码 -->

## 许可与引用

文字内容 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans)：欢迎转载学习，请署名且勿商用；labs 代码 MIT。本仓引用官方资料一律使用官方直链。

## 反馈

发现题目或数字错误 → 开 Issue，改正后写进 CHANGELOG 并感谢你；后续 Discussions 兼作考生错题本。

—— [JunzeXu](https://github.com/junze-xu)，苏州，一个正在考证的运维。
