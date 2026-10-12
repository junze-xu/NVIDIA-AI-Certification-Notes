---
id: chapter-12
title: "第 12 章实验：综合运维与考试冲刺"
description: "端到端场景演练 + 考试综合实验"
sidebar_position: 12
---

# 实验：综合运维与考试冲刺

:::note 预计用时 30 分钟 :::

## 实验目标

- 完成 BCM 端到端故障排查
- 掌握 NGC 部署完整流程
- 模拟考试综合场景

## 练习 1：BCM 集群恢复

**场景：集群中 2 个 GPU 节点突发宕机**

| 步骤 | 操作 |
|------|------|
| 1 | `bcm node-group health --group gpus` 识别故障节点 |
| 2 | `sinfo -N -l` 查看 Slurm 节点状态 |
| 3 | SSH 登录节点检查物理/系统日志 |
| 4 | 修复后 `bcm node check --id <node>` 验证 |
| 5 | `scontrol update node=<node> state=RESUME` 恢复 |

## 练习 2：NGC NIM 完整部署

```bash
# 1. 创建 registry secret
kubectl create secret docker-registry ngc-secret \
  --docker-server=nvcr.io \
  --docker-username='$oauthtoken' \
  --docker-password=<your-ngc-api-key>

# 2. 创建 Namespace + Quota
kubectl create namespace inference
kubectl create quota gpu-quota --hard=nvidia.com/gpu=4 -n inference

# 3. 部署 NIM Pod
cat <<EOF | kubectl apply -f -
apiVersion: v1
kind: Pod
metadata:
  name: nim-llm
  namespace: inference
spec:
  imagePullSecrets:
  - name: ngc-secret
  containers:
  - name: nim
    image: nvcr.io/nim/meta/llama3-8b-instruct:latest
    resources:
      requests:
        nvidia.com/gpu: 2
      limits:
        nvidia.com/gpu: 2
EOF

# 4. 验证
kubectl get pods -n inference -w
kubectl logs -n inference nim-llm
```

## 关键要点

:::info 本章记忆锚点
BCM 恢复 = node check + RESUME；NGC 部署 = secret + quota + NIM Pod；训练→Slurm；推理→K8s。
:::
