---
id: chapter-09
title: "第 9 章实验：NVUE 配置与 WJH 诊断"
description: "NVUE 命令、Ansible 幂等性、WJH 诊断实验"
sidebar_position: 9
---

# 实验：NVUE 配置与 WJH 诊断

:::note 预计用时
20 分钟
:::

## 实验目标

- 掌握 NVUE 配置工作流
- 理解 Ansible 幂等性验证
- 识别 WJH 丢弃类别

## 练习 1：NVUE 工作流

```bash
# 1. 暂存变更
nv set interface swp1 ip address 10.0.0.1/24

# 2. 查看变更差异
nv config diff

# 3. 提交到运行配置
nv config apply

# 4. 持久化到启动配置
nv config save
```

## 练习 2：WJH 丢弃分类

| 丢弃现象 | WJH 类别 |
|----------|----------|
| CRC 错误 + 链路抖动 | L1（物理层） |
| 队列突发期间 tail drop | 缓冲/拥塞 |
| VLAN 不匹配 | L2（交换） |
| 显式 ACL 拒绝 | ACL/安全 |

## 练习 3：Ansible 幂等性验证

重复运行 nvidia.nvue playbook，交换机已处于期望状态时：

| 结果 | 说明 |
|------|------|
| 任务报告 'ok' | 幂等 — 当前状态 = 期望状态，无变更 |
| 任务报告 'changed' | 非幂等或配置有漂移 |

## 关键要点

:::info 本章记忆锚点
nv config apply = 提交 pending。nv config save = 持久化。tail drop = 缓冲/拥塞类别。幂等 = 重复运行无变更。
:::
