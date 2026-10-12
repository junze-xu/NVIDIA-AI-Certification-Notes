---
id: chapter-07
title: "第 7 章：资源分配与 NGC 容器 — 知识卡片"
description: "Run:ai 配额、优先级知识卡片"
sidebar_position: 7
---

# 资源分配与 NGC 容器 — 知识卡片

## 卡片 1

**Q：Guaranteed Quota 和 Over-quota Limit 的区别？**

A：Guaranteed = 始终可用的最低资源。Over-quota = 集群空闲时的最大资源（Fair-share）。

---

## 卡片 2

**Q：Run:ai 创建项目的命令？**

A：`runai project create team-a --gpu-quota 4 --over-quota-limit 8`。
