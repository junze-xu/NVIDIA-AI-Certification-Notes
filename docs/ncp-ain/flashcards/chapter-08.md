---
id: chapter-08
title: "第 8 章：AR/PCC 与 IB vs Spectrum-X 权衡 — 知识卡片"
description: "大流冲突、PCC、fabric 选型知识卡片"
sidebar_position: 8
---

# AR/PCC 与 IB vs Spectrum-X 权衡 — 知识卡片

## 卡片 1

**Q：静态 ECMP 对 AI 训练流量伤害更大的原因？**

A：AI 训练由少量超大 elephant flow 组成。一次哈希冲突将巨大负载集中到少数链路，而其他链路闲置。Web 流量大量小流统计分布良好。

---

## 卡片 2

**Q：Spectrum-X 如何把单条大流分布到多条并行路径？**

A：自适应路由按报文喷洒到多条可用路径（按流/按报文），而非像 ECMP 把整条流固定到一条路径。直接解决静态 ECMP 的大流冲突。

---

## 卡片 3

**Q：PCC 如何利用网内遥测做实时拥塞决策？**

A：PCC 消费交换机/DPU 的实时拥塞信号（队列深度、流统计），微秒级调整发送行为。比仅依赖主机端 ECN 的传统 DCQCN 收敛更快。

---

## 卡片 4

**Q：单租户超算（团队已有 IB 技能）应选哪种 fabric？**

A：InfiniBand。原生自适应路由 + 更低确定性延迟 + SHARP = 极致性能。团队技能匹配。

---

## 卡片 5

**Q：InfiniBand 比标准以太网抖动更低的原因？**

A：原生无损 fabric 设计 + 硬件自适应路由 + 集中式子网管理器 = 确定性低抖动传输。无需依赖以太网拥塞变通手段。
