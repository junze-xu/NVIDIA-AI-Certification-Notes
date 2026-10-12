---
id: chapter-03
title: "第 3 章实验：机架上架"
description: "安装顺序、布线、NGC 认证实验"
sidebar_position: 3
---

# 实验：机架上架

:::note 预计用时
15 分钟
:::

## 实验目标

- 掌握正确的安装顺序
- 理解机架气流管理
- 完成 NGC 认证

## 练习 1：安装顺序排序

```bash
# 正确的顺序：
1. 服务器上架 + 布线
2. 安装 OS
3. 安装驱动
4. 安装容器引擎
5. 安装 Container Toolkit
6. nvidia-ctk runtime configure --runtime=docker
7. docker login nvcr.io -u '$oauthtoken' -p <API_KEY>
8. docker pull nvcr.io/nvidia/cuda:12.0-base
```

:::caution
Container Toolkit 必须在驱动和容器引擎之后安装。
:::

## 练习 2：机架气流

- 前进后出
- 冷通道封闭正面
- 热通道封闭背面

## 关键要点

:::info 本章记忆锚点
上架→OS→驱动→引擎→toolkit→运行时配置→NGC→测试。气流前进后出。
:::
