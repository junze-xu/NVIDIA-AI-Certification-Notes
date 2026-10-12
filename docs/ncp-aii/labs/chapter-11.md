---
id: chapter-11
title: "第 11 章实验：安全合规"
description: "RBAC 配置、加密、审计日志实验"
sidebar_position: 11
---

# 实验：安全合规

:::note 预计用时
10 分钟
:::

## 实验目标

- 配置 RBAC 访问控制
- 启用传输和静态加密
- 配置审计日志

## 练习 1：访问控制

```bash
# 配置 SSH 密钥认证
ssh-keygen -t ed25519
ssh-copy-id user@dgx-node

# 配置 MFA（使用 google-authenticator）
sudo apt install libpam-google-authenticator
```

## 练习 2：审计

```bash
# 查看登录记录
last
# 查看命令历史
cat /var/log/auth.log
```

## 关键要点

:::info 本章记忆锚点
RBAC 访问控制、TLS 传输加密、MFA 多因素认证、审计日志记录。
:::
