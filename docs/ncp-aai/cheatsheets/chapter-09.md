---
id: chapter-09
title: "第 9 章：护栏、可观测性与扩展 — 速查表"
description: "输入/输出 rail、PII 检测、prompt injection 拦截"
sidebar_position: 9
---

# 护栏、可观测性与扩展 — 速查表

## NeMo Guardrails 配置

| Rail 类型 | 运行位置 | 处理内容 |
|-----------|----------|----------|
| 输入 rail | 用户消息到达 LLM 前 | prompt injection 拦截 |
| 输出 rail | 生成响应给用户前 | PII 脱敏 |

## 关键场景

| 威胁 | 防御位置 |
|------|----------|
| prompt injection | 输入 rail |
| PII 泄露 | 输出 rail |

:::info 记忆锚点
注入→输入rail；PII→输出rail；两者配置不可颠倒
:::
