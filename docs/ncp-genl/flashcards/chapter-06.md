---
id: chapter-06
title: "第 6 章：定制化策略 — 知识卡片"
description: "LoRA/QLoRA、RLHF/DPO、PEFT、NeMo Aligner 知识卡片"
sidebar_position: 6
---

# 定制化策略：LoRA/QLoRA、RLHF vs DPO 与 NVIDIA NeMo — 知识卡片

## 卡片 1

**Q：QLoRA 如何将 70B 模型放进单张 80GB GPU？**

A：把冻结基座权重量化为 4-bit NF4（70B 从 ~140GB 降至 ~35GB），只训练小型 LoRA 适配器。考试提示：单 GPU 大模型微调 → QLoRA。

---

## 卡片 2

**Q：DPO 与 RLHF 的核心概念区别是什么？**

A：RLHF 训练单独奖励模型 + PPO RL 循环；DPO 用闭式损失直接在偏好对上优化策略，无需奖励模型或 RL 循环。考试提示：更简单+更稳定 → DPO；需要显式奖励解释性 → RLHF。

---

## 卡片 3

**Q：NeMo Aligner 与 NeMo Curator 的区别是什么？**

A：NeMo Aligner = 偏好对齐（奖励模型 + PPO + DPO）；NeMo Curator = 数据整理（过滤+去重）。考试提示：Aligner 对齐；Curator 整理——功能完全不同。

---

## 卡片 4

**Q：P-tuning 与 LoRA 的机制区别是什么？**

A：P-tuning：在输入前附加可训练虚拟 token 嵌入，基座模型完全冻结；LoRA：向现有权重层注入可训练低秩矩阵。考试提示：虚拟 token → P-tuning；低秩矩阵注入 → LoRA。

---

## 卡片 5

**Q：无标注 50GB 法律文档想让模型先内化风格，应先做什么？**

A：在语料上做**继续预训练**（领域自适应预训练），适配词汇和风格，后续再做任务微调。考试提示：无标注领域文本 → 继续预训练；有标注指令对 → LoRA/DPO。
