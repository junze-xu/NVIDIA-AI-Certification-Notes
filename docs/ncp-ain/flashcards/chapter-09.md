---
id: chapter-09
title: "第 9 章：NVUE、Ansible、WJH — 知识卡片"
description: "NVUE 配置、Ansible 幂等性、WJH 诊断知识卡片"
sidebar_position: 9
---

# NVUE、Ansible、WJH — 知识卡片

## 卡片 1

**Q：`nv set` 后如何把暂存变更提交到运行配置？**

A：`nv config apply`。`nv config save` 只是持久化到 startup 配置。

---

## 卡片 2

**Q：NVUE REST API 默认监听端口？**

A：8765。暴露与 `nv` CLI 和 Ansible collection 相同的对象模型。

---

## 卡片 3

**Q：Ansible nvidia.nvue 模块如何确认幂等性？**

A：重复运行无漂移时任务报告 'ok' 且无变更。当前状态与期望状态匹配时不产生任何改变。

---

## 卡片 4

**Q：WJH 是什么缩写？提供什么独特诊断能力？**

A：What Just Happened。实时分类每个被丢弃报文的确切丢弃原因（L1/L2/隧道/ACL/缓冲）。

---

## 卡片 5

**Q：突发期间队列 tail drop 属于哪个 WJH 丢弃类别？**

A：缓冲/拥塞。区别于 L1（物理层CRC）、L2（交换决策）、ACL（策略拒绝）。
