---
id: chapter-05
title: "第 5 章：存储配置 — 速查表"
description: "Lustre、GPFS、NFS、NVMe、S3 对象存储"
sidebar_position: 5
---

# 存储配置 — 速查表

## 存储类型

| 类型 | 适用场景 | 特点 |
|------|----------|------|
| Lustre | HPC、大规模共享 | 高带宽并行 |
| GPFS | 企业、AI/ML | IBM Spectrum Scale |
| NFS | 通用共享 | 简单、广泛 |
| NVMe | 高性能本地 | 极低延迟 |
| S3 | 对象存储 | 可扩展、API |

---

## 存储性能考量

| 因素 | 影响 |
|------|------|
| IOPS | 随机读写性能 |
| 带宽 | 顺序读写性能 |
| 延迟 | 响应速度 |
| 并发 | 多客户端访问 |
