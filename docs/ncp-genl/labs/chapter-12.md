---
id: chapter-12
title: "第 12 章实验：全真模拟与策略"
description: "模拟考试、错题分析、考试策略实验"
sidebar_position: 12
---

# 实验：全真模拟与策略

:::note 预计用时
120 分钟
:::

## 实验目标

- 体验完整 NCP-GENL 考试节奏
- 练习跨域综合推理
- 巩固高频陷阱识别

## 练习 1：综合推理题

**Q1. 某电商平台部署 LLM 客服，高峰时段延迟从 300ms 飙升至 1200ms，但 GPU 仅 40% 利用率。首选扩容策略？**

A. 增加 GPU 节点
B. 扩容 CPU + 优化 post-processing
C. 切换至更大模型
D. 减少并发连接

<details>
<summary>答案</summary>

**B** — GPU 利用率低 + 延迟高 → 瓶颈在 CPU/IO。扩容 CPU + 优化 preprocessing 是正确方向。

</details>

**Q2. 微调后模型在验证集上 loss 下降但线上用户投诉增加，最可能原因？**

A. 欠拟合
B. 过拟合验证集分布
C. 提示词工程不当
D. GPU 显存不足

<details>
<summary>答案</summary>

**B** — 验证集 loss 降但线上退化 = 过拟合验证集分布；需增加数据多样性 + 正则。

</details>

**Q3. 以下哪种分词器变更必须使用蓝绿部署而非金丝雀？**

A. 增加新 token 但保留旧 token ID
B. 完全替换词表（旧 token ID 不再有效）
C. 仅调整 BPE merge 顺序
D. 增加 special token

<details>
<summary>答案</summary>

**B** — 完全替换词表 = 向后不兼容 → 必须蓝绿部署清缓存。

</details>

## 关键要点

:::info 本章记忆锚点
GPU利用低+延迟高=非GPU瓶颈；验证集loss降但线上退化=过拟合；分词器不兼容=蓝绿部署；域权重前三合计44%（模型优化+GPU加速+提示/微调）。
:::
