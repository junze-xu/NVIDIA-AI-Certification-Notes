---
id: chapter-08
title: "第 8 章实验：故障排查"
description: "Docker/Toolkit 故障、GPU 访问问题排查实验"
sidebar_position: 8
---

# 实验：故障排查

:::note 预计用时
12 分钟
:::

## 实验目标

- 排查容器 GPU 访问问题
- 修复 nvidia runtime 配置

## 练习 1：诊断 Docker GPU

```bash
# 检查 nvidia-container-toolkit
nvidia-ctk --version

# 检查 /etc/docker/daemon.json
cat /etc/docker/daemon.json

# 修复
sudo systemctl restart docker
```

## 练习 2：测试 GPU 容器

```bash
docker run --gpus all nvidia/cuda:12.0-base nvidia-smi
```

## 关键要点

:::info 本章记忆锚点
daemon.json 需配置 nvidia runtime。--gpus all 访问 GPU。重启 docker 使配置生效。
:::
