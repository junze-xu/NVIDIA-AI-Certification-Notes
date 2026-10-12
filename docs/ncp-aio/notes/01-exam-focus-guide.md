---
sidebar_position: 1
title: 7 大高频易混考点
---

# NCP-AIO 备考：AI 运维与 BCM 7 个高频易混考点

> ⚠️ 本文基于官方考纲整理，仅覆盖高频易混考点，**不能替代完整考试大纲**。

## 考点 1：BCM 架构三组件

| 组件 | 用途 | 关键细节 |
|---|---|---|
| **头节点** | BCM 服务、数据库、调度器 | 未配置 HA 时为**单点故障** |
| **管理网络** | 控制平面通信 | 隔离 VLAN，不用于作业数据 |
| **计算节点** | GPU/CPU 工作负载 | 通过心跳向头节点汇报 |

**考试要点**：头节点默认是单点故障，需单独配置 HA。

## 考点 2：BCM 数据库是 PostgreSQL

BCM 使用的数据库是 **PostgreSQL 12+**（不是 MySQL/MariaDB）。

**考试陷阱**：初始化 BCM 之前必须先安装并运行 PostgreSQL 服务。

## 考点 3：cmsh 核心命令速查

| 任务 | 命令 | 说明 |
|---|---|---|
| 添加节点 | `device add <name> ip=<ip>` | 必须指定 IP |
| 列出设备 | `device list -s` | 显示状态、心跳 |
| 创建 category | `category add <name>` | 用于调度逻辑分组 |
| 同步软件 | `device sync <node>` | 将镜像推送到节点 |
| 更新固件 | `device update <node>` | 固件/BIOS，可能需重启 |

**考试要点**：`device update` = 固件；`device sync` = 软件。两者不同！

## 考点 4：节点状态四态

| 状态 | 含义 | 常见原因 |
|---|---|---|
| **ready** | 正常运行，接收作业 | — |
| **unknown** | 无心跳 | 网络问题、断电、节点崩溃 |
| **not ready** | 有响应但不接收作业 | 维护模式、健康检查失败 |
| **provisioning** | 安装镜像中 | 正在进行 sync/update |

## 考点 5：用户角色三级权限

| 角色 | 可执行 | 不可执行 |
|---|---|---|
| **admin** | 全部操作 | 无 |
| **operator** | 查看/管理所有作业、监控 | 添加/删除节点、创建用户 |
| **user** | 提交自己的作业、SSH 到自己的计算节点 | 查看他人作业、修改集群 |

**考试要点**：普通 user 角色**不能**查看其他用户的作业或修改集群设置。

## 考点 6：Base View GPU 遥测前提

Base View 仪表盘显示 GPU 指标（利用率、功耗、温度、显存利用率）的前提是：每个计算节点上必须运行 **NVIDIA DCGM**。

**考试陷阱**：GPU 指标显示 N/A → 检查 dcgm 服务：`systemctl restart nvidia-dcgm`

## 考点 7：软件镜像工作流

```
1. 创建镜像 → 定义 OS、驱动、应用、固件版本
2. 分配镜像 → device use <node>; image assign <name>
3. 同步应用 → device sync <node>（软件）或 device update <node>（固件）
4. 验证 → device show <node> 确认当前镜像
```

**考试要点**：同步（sync）和更新（update）操作不同。

---

## 速记总表

| 一句话考点 | 答案 |
|---|---|
| BCM 数据库？ | **PostgreSQL** |
| device sync 做什么？ | 同步软件镜像 |
| device update 做什么？ | 更新固件/BIOS |
| 头节点默认 HA 吗？ | **不**，需单独配置 |
| 普通 user 能看别人作业吗？ | **不能** |
| GPU 遥测需要什么？ | **必须运行 DCGM** |
| unknown 状态原因？ | **无心跳** |

---

> 📌 **完整速查表 + Anki 闪卡 + 模拟卷**：关注公众号「NVIDIA 认证备考」回复「NCP-AIO」领取 PDF 全家桶。
