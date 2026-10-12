---
sidebar_position: 1
title: 考试概览
---

# NCA-AIIO · AI 基础架构与运维

> [英伟达官方认证页](https://www.nvidia.cn/training/certification/ai-infrastructure-operations-associate/)

## 考试基本信息

| 项目 | 详情 |
|---|---|
| 考试编号 | NCA-AIIO |
| 等级 | Associate（入门级） |
| 考试时长 | **60 分钟** |
| 题目数量 | **50 题**（每题平均 1.2 分钟） |
| 题型 | 单选题 / 多选题 |
| 考试语言 | 英语 |
| 考试费用 | **125 美元**（部分地区另计税费） |
| 考试形式 | 在线远程监考 |
| 证书有效期 | 2 年（可重考续证） |

## 面向人群

- 系统管理员、DevOps、网络工程师、IT 经理
- 数据中心技术人员、解决方案架构师
- Linux / 嵌入式 / 运维背景

## 高频易混考点（7 个）

> 详见 [notes/01-exam-focus-guide](./notes/01-exam-focus-guide.md)

1. **MIG 最多切 7 个**（非 8 个），A30 只有 4 个
2. **GPU Operator 管软件部署**，HPA 管扩缩容
3. **DCGM 看 GPU**，**BCM 看集群**
4. **DPU 三使命**：卸载 / 加速 / 隔离
5. **GDS↔存储 / RDMA↔网卡 / P2P↔GPU** — 看清传输端点
6. **H100: 1GbE 给 BMC，10GbE 带内起步**，SuperPOD 4 网
7. **训练重吞吐量，推理重时延**（设计侧重，非绝对规则）

## 考点权重

| 模块 | 权重 | 一句话抓总 |
|---|---|---|
| AI 基础知识 | 38% | NVIDIA 软件栈 + 训练推理负载差异 + GPU vs CPU |
| AI 基础架构 | 40% | DGX 拓扑 + 运维 + DPU 贯穿半张卷 |
| AI 运营 | 22% | DCGM + 排障 + 虚拟化加速 |

> 完整考纲逐条见 [exam-objectives.md](./exam-objectives.md)。

## 官方 Study Guide

[中文版 PDF](https://images.nvidia.cn/aem-dam/zh_cn/Solutions/training/certification/nvt-certification-exam-study-guide-aiio-web-cn.pdf)
