---
id: chapter-04
title: "第 4 章实验：对齐与安全"
description: "RLHF 流程、幻觉检测、缓解技术实验"
sidebar_position: 4
---

# 实验：对齐与安全

:::note 预计用时
15 分钟
:::

## 实验目标

- 掌握 RLHF 的三阶段流程
- 能识别和缓解幻觉
- 理解 RAG 的架构优势

## 练习 1：RLHF 流程排序

```python
# 正确的 RLHF 顺序：
stages = [
    "1. SFT：在指令示例上微调基础模型",
    "2. 奖励模型：在人类偏好比较上训练",
    "3. PPO：借助奖励模型反馈优化"
]
# 考试陷阱：奖励模型必须在 RL 阶段之前训练！
```

## 练习 2：幻觉检测

```python
response = "莎士比亚于 1605 年写了《哈姆雷特》"
# 事实核查：《哈姆雷特》约 1599-1601 写成
# → 幻觉！模型生成了看似合理但错误的信息
```

## 练习 3：RAG 缓解幻觉

```python
# RAG 接地示例
query = "什么是 CUDA？"
retrieved_docs = ["CUDA 是 NVIDIA 的并行计算平台..."]
prompt = f"根据以下文档回答：{retrieved_docs}\n问题：{query}"
```

:::tip
RAG 是最有效的幻觉缓解技术 — 架构级约束。
:::

## 关键要点

:::info 本章记忆锚点
RLHF 顺序不可颠倒。Temperature 0.0 不能防幻觉。RAG 是最佳幻觉缓解。
:::
