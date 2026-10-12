---
id: chapter-03
title: "第 3 章实验：提示工程"
description: "Zero-shot、Few-shot、思维链、温度实验"
sidebar_position: 3
---

# 实验：提示工程

:::note 预计用时
15 分钟
:::

## 实验目标

- 掌握不同提示策略的使用场景
- 理解温度参数对输出的影响
- 能设计有效的提示

## 练习 1：Few-shot 提示

```python
prompt = """将以下评论分类为积极/消极。

评论：这家餐厅太棒了！ → 积极
评论：服务很糟糕。 → 消极
评论：食物还可以，但等待时间太长。 →"""
```

## 练习 2：思维链提示

```python
cot_prompt = "一个水池有 3 个进水管。第一个 6 小时注满，第二个 8 小时注满，第三个 12 小时注满。如果三个管道同时打开，几小时注满？ Let's think step by step。"
```

:::tip
"Let's think step by step" 提升推理准确率 20-40%。
:::

## 练习 3：温度对比

```python
# Temperature = 0：确定性输出
# Temperature = 0.3-0.4：事实问答
# Temperature = 0.7-0.9：创意写作
# Temperature = 1.0+：高度随机（仅实验）
```

## 关键要点

:::info 本章记忆锚点
Few-shot 用 1-5 个示例。CoT 用 "step by step"。温度越高越创意，温度越低越确定。
:::
