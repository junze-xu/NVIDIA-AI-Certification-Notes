---
id: chapter-08
title: "第 8 章：故障排查 — 速查表"
description: "Docker/Toolkit 故障、容器 GPU 访问问题"
sidebar_position: 8
---

# 故障排查 — 速查表

## Docker 与 Container Toolkit 故障排查

| 错误 | 原因 | 修复方法 |
|------|------|----------|
| `nvidia-container-cli: initialization error` | Toolkit 未安装或 Docker 未重启 | 重启 docker |
| `could not select device driver "nvidia"` | daemon.json 中缺少 runtime | 添加 nvidia runtime 配置 |
| `failed to create shim task` | Docker 未重新加载配置 | 重启 docker |
| 容器中看不到 GPU | runtime 错误或缺少 --gpus | `docker run --gpus all` |

## 关键配置：/etc/docker/daemon.json

```json
{
  "default-runtime": "nvidia",
  "runtimes": {
    "nvidia": {
      "path": "nvidia-container-runtime",
      "runtimeArgs": []
    }
  }
}
```
