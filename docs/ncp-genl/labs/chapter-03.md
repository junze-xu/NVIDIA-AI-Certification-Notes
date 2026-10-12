---
id: chapter-03
title: "第 3 章实验：提示与解码技术"
description: "CoT、ReAct、受限解码、自洽性 动手实验"
sidebar_position: 3
---

# 实验：高级提示与解码

:::note 预计用时 20 分钟 :::

## 练习 1：受限解码场景
需要输出严格 JSON/枚举值 → 受限解码（token 级屏蔽无效输出）

## 练习 2：ReAct 序列
正确步骤：Thought → Action → Observation → 重复 → Final Answer

## 练习 3：自洽性配置
温度 > 0（如 0.7）+ 多次采样（5-10 次）+ 多数投票

## 练习 4：零样本 vs 少样本
零样本=仅指令无示例；少样本=多个输入/输出示例

:::info 记忆锚点
受限解码=格式保证；ReAct=交错推理+工具；自洽=温度>0+投票
:::
