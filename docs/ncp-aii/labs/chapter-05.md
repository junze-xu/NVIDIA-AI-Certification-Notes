---
id: chapter-05
title: "第 5 章实验：存储配置"
description: "Lustre、NFS、NVMe 挂载配置实验"
sidebar_position: 5
---

# 实验：存储配置

:::note 预计用时
12 分钟
:::

## 实验目标

- 选择正确的存储类型
- 配置 Lustre/NFS 挂载
- 理解存储性能层级

## 练习 1：存储规划

| 数据类型 | 推荐存储 | 原因 |
|----------|----------|------|
| 训练热数据 | NVMe | 极低延迟 |
| 大规模并行 | Lustre | 高带宽 |
| 共享检查点 | NFS | 简单通用 |
| 归档数据 | S3 | 可扩展 |

## 练习 2：挂载配置

```bash
# NFS 挂载
mount -t nfsserver:/path /mnt/nfs

# Lustre 挂载
mount -t lustre mgs@tcp:/lustre /mnt/lustre
```

## 关键要点

:::info 本章记忆锚点
热数据 NVMe，并行星 Lustre，共享 NFS，归档 S3。
:::
