---
id: chapter-04
title: "第 4 章：视觉模型架构 — 速查表"
description: "ViT、ResNet、CNN、目标检测、图像分割"
sidebar_position: 4
---

# 视觉模型架构 — 速查表

## ViT（Vision Transformer）

| 参数 | 值 |
|------|-----|
| Patch 数量 | (image_size / patch_size)² |
| ViT-B/16，224×224 | (224/16)² = 196 个 patch |
| 展平后 patch 维度 | patch_h × patch_w × 通道数 |

**权衡：** patch 越小 → token 越多、细节更细、注意力成本更高（O(n²)）。

---

## CNN vs ViT

| 特性 | CNN | ViT |
|------|-----|-----|
| 归纳偏置 | 平移不变性 | 需从数据学习 |
| 数据效率 | 高（少数据即可） | 需大量数据 |
| 计算效率 | 高（局部连接） | 注意力 O(n²) |
| 典型架构 | ResNet、EfficientNet | ViT、DeiT |

---

## 目标检测

| 模型 | 特点 |
|------|------|
| YOLO | 单阶段，实时检测 |
| Faster R-CNN | 两阶段，高精度 |
| DETR | Transformer 端到端 |

---

## 图像分割

| 类型 | 输出 |
|------|------|
| 语义分割 | 每个像素的类别 |
| 实例分割 | 每个像素的实例 ID |
| 全景分割 | 语义 + 实例 |
