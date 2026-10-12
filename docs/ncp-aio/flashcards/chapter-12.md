---
id: chapter-12
title: "第 12 章：综合场景与冲刺 — 知识卡片"
description: "BCM/NGC 故障排除、端到端知识卡片"
sidebar_position: 12
---

# 第 12 章：综合场景与冲刺 — 知识卡片

## 卡片 1

**Q：BCM 节点无法加入集群如何排查？**

A：`bcm node check --id <node>` → 验证网络连通性 + SSH 免密 + 软件镜像挂载。考试：BCM 节点加入需要 SSH 可达 + 共享存储就绪。

---

## 卡片 2

**Q：NGC 部署容器 ImagePullBackOff 修复？**

A：创建 registry secret：`kubectl create secret docker-registry ngc-secret --docker-server=nvcr.io --docker-username='$oauthtoken' --docker-password=<NGC API Key>` + Pod imagePullSecrets 引用。

---

## 卡片 3

**Q：新团队加入集群的完整流程？**

A：1. `kubectl create namespace` → 2. `kubectl create quota --hard=nvidia.com/gpu=8` → 3. `runai project create --gpu-quota 4` → 4. 部署 NIM Pod。考试：Namespace→Quota→Project→Pod。

---

## 卡片 4

**Q：Slurm+K8s 混合架构中各自角色？**

A：Slurm 用于训练作业（MPI/分布式训练），K8s 用于推理服务（NIM/Triton），BCM 统一管理节点池。考试：训练→Slurm；推理→K8s。

