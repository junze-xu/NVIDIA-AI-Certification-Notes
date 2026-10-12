---
id: chapter-09
title: "第 9 章实验：NIM vs Triton"
description: "NIM 微服务、Triton ensemble 选型 动手实验"
sidebar_position: 9
---

# 实验：LLM 服务化选型

:::note 预计用时 15 分钟 :::

## 练习 1：选型决策
| 场景 | 最佳选择 | 原因 |
|------|----------|------|
| 两天内部署 70B OpenAI API | NIM | 预打包分钟级 |
| 多后端 ensemble 流水线 | Triton | NIM 不支持 ensemble |

## 练习 2：NIM 架构
NIM = TensorRT-LLM（引擎）+ Triton（服务层）+ 容器化

:::info 记忆锚点
快速标准→NIM；灵活/ensemble→Triton；NIM底层=TensorRT-LLM
:::
