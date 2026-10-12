---
id: chapter-08
title: "第 8 章：故障排查 — 知识卡片"
description: "Docker/Toolkit 故障排查知识卡片"
sidebar_position: 8
---

# 故障排查 — 知识卡片

## 卡片 1

**Q：容器中看不到 GPU 的原因？**

A：runtime 错误或缺少 `--gpus all` 标志。需在 daemon.json 中配置 nvidia runtime。

---

## 卡片 2

**Q：`could not select device driver "nvidia"` 错误的修复？**

A：在 /etc/docker/daemon.json 中添加 nvidia runtime 配置并重启 docker。
