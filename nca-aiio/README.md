# NCA-AIIO · AI 基础架构与运维

> NVIDIA Certified Associate – AI Infrastructure & Operations ｜ 四门 NCA 里最贴近 Linux/嵌入式/运维背景的一门，也是本转型路线的切入点。

## 考试基本信息

| 项目 | 详情 |
|---|---|
| 考试编号 | NCA-AIIO |
| 考试时长 | 60 分钟 · 50–60 道单选/多选 |
| 语言 | 支持中文 |
| 及格线 | 约 70% |
| 考试费用 | 960 元 ｜ [官方考试页](https://www.nvidia.cn/training/certification/ai-infrastructure-operations-associate/) |
| 官方介绍与推荐培训 | [overview.md](overview.md) |
| 证书有效期 | 2 年 |
| 官方 Study Guide（直链） | [中文 web 版 PDF](https://images.nvidia.cn/aem-dam/zh_cn/Solutions/training/certification/nvt-certification-exam-study-guide-aiio-web-cn.pdf) |

> ⚠️ 版权归 NVIDIA 所有；本仓只挂官方直链、不收录副本（.gitignore 里连 `*.pdf` 都拉黑了）。

## ★ 覆盖度对照表

> 状态：✅ 完整 ｜ 🟡 进行中 ｜ ⬜ 未开始。官方 exam objectives 逐条核对中（对齐 Study Guide 原文后每行补编号）。

| # | 考纲要点 | 权重域 | 内容 | DLI 来源 | 状态 |
|---|---|---|---|---|---|
| 1 | GPU vs CPU 架构；Blackwell/Hopper 代际特征 | 域1 40% | [notes/01-ai-基础架构](notes/01-ai-基础架构.md) | S-NP-04 U7 | 🟡 |
| 2 | 集群硬件组成；DGX；NVLink/NVSwitch 互连分层 | 域1 | [notes/01 同上](notes/01-ai-基础架构.md) | S-NP-04 U7 | 🟡 |
| 3 | InfiniBand/ConnectX 网络；多节点训练网络设计 | 域1 | notes/02（待建） | S-NP-04 U7 | 🟡 |
| 4 | DPU / BlueField / DOCA | 域1 | [notes/01 同上](notes/01-ai-基础架构.md) | S-NP-04 U7.4 | 🟡 |
| 5 | MIG / vGPU 边界与场景 | 域1/域2 | [notes/01 同上](notes/01-ai-基础架构.md) | S-NP-04 U7 | 🟡 |
| 6 | 存储选型；BasePOD/SuperPOD；机房供电散热 | 域1 | notes/03（待建） | U8–9 | ⬜ |
| 7 | 本地机房/公有云/混合方案对比 | 域1 | 待建 | U8 | ⬜ |
| 8 | AI/ML/DL 概念区分；训练 vs 推理负载特征 | 域2 38% | 待建 | U4–5 | 🟡 |
| 9 | 软件栈：CUDA/cuDNN/TensorRT/Triton/RAPIDS 分工 | 域2 | 待建 + [术语对照](../common/terms-zh-en.md) | U5 | 🟡 |
| 10 | NGC 三类资产；NVAIE 组成；DLI 生态 | 域2 | 待建 | U5 | 🟡 |
| 11 | AI 项目生命周期；产品线适用场景 | 域2 | 待建 | U1–3 | ⬜ |
| 12 | GPU 集群运维与监控：DCGM/dcgmi | 域3 22% | 待建 + labs | U10 | ⬜ |
| 13 | GPU 故障排查；性能瓶颈定位 | 域3 | 待建 + [labs/](labs/README.md) | U10 | ⬜ |
| 14 | Slurm 调度概念（知道解决什么即可） | 域3 | 待建 | U9 | ⬜ |
| 15 | 扩容/负载均衡；日常运维任务；节能 | 域3 | 待建 | U10（已总结） | 🟡 |

## 考点权重

| 模块 | 权重 | 一句话抓总 |
|---|---|---|
| AI 基础架构 | 40% | 硬件全局图：一张 DGX+网络拓扑贯穿半张卷 |
| AI 基础知识 | 38% | 概念分层：负载差异 + 软件栈各层职责 |
| AI 运维、监控与优化 | 22% | DCGM + 排障 + 扩容，运维背景白送分域 |

## 学习建议（运维/嵌入式背景版）

1. **先画硬件全局图**：GPU↔NVLink、节点↔ConnectX/IB、整机 DGX、集群 POD——40% 权重都在图上
2. **软件栈分层背**：CUDA（地基）/ cuDNN（算子）/ TensorRT（优化）/ Triton（服务）/ DCGM（监控），考试专考"谁干谁的活"
3. **labs 动手**：`nvidia-smi`、`dcgmi` 真实输出贴进 [labs/](labs/README.md)——这是本仓和"AI 一日拼装资料"最大的区别
4. **Slurm 不深究**：知道它是什么层、解决什么问题即可

## 目录

```
├── overview.md            # 官方《科目解读》章节（介绍/参数/人群/培训）
├── exam-objectives.md    # 官方 Study Guide 考纲逐条要点 + 阅读材料
├── references.md         # 官方 PDF 直链 + 推荐阅读链接汇总
├── notes/                # 考纲域笔记（按域编号）
├── cheatsheets/          # 速查卡
├── flashcards/           # 闪卡
├── questions/            # 自编样题 + 官方演示题
├── labs/                 # 真机实操记录
├── mock/                 # 留壳导流（整卷不进仓）
└── dli-courses.md        # DLI 课程清单与学习顺序
```

## 进度

- [x] 官方 Study Guide 挂直链（不存副本）
- [x] 考点大纲 + 覆盖度对照表 v0.1
- [x] 官方科目解读章节 → overview.md
- [x] 官方演示题收录 → [questions/01-sample.md](questions/01-sample.md)
- [ ] 对照表与官方 exam objectives 逐条核对
- [ ] 完成 DLI 课程 S-NP-04（进行中：单元 7 已总结）
- [ ] labs：nvidia-smi / DCGM / 拓扑实操
- [ ] 闪卡与速查卡成册
- [ ] 报名正式考
