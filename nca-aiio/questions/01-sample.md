# NCA-AIIO 官方演示题（来源：科目解读第 9 页）

> 此题出自 NVIDIA 官方《科目解读》演示，用于说明真实考试的题型与难度风格。本仓自编题模板见 [../common/templates/question.md](../common/templates/question.md)。

## 题目

一个运维团队正在构建一个多租户 AI 集群，并将使用 **Slurm** 与 **NVIDIA Base Command Manager（BCM）** 相结合。相比仅依赖 Slurm 的基本操作系统调度，添加 BCM 最能满足以下哪项需求？

**A.** 强制执行 GPU 和项目级别的配额，以实现公平的多租户资源共享  
**B.** 对所有计算节点执行滚动 Linux 内核升级  
**C.** 基于电力和能源价格选择成本最低的云区域  
**D.** 在初始服务器配置期间管理 BIOS 配置设置

---

## 答案与解析

**正确答案：A**

**关键概念：**

| 组件 | 角色 | 层级 |
|---|---|---|
| Slurm | 作业调度器 — 把作业排到节点上 | 基础调度 |
| NVIDIA Base Command Manager (BCM) | 多租户平台 — GPU 配额/项目隔离/资源共享 | 多租户编排层 |

**解析：**

- **A ✅**：BCM 的核心能力就是在 Slurm 基础上叠加**多租户资源治理**——按项目/用户设定 GPU 配额、公平调度策略。这正是 Slurm 本身解决不了的。
- **B ❌**：滚动内核升级是集群生命周期管理工具（如 Bright Cluster Manager、Ansible）的活，不管 Slurm 也不管 BCM。
- **C ❌**：选择成本最低的云区域是云成本管理平台（FinOps 工具）或CMP 的决策，与调度/多租户层无关。
- **D ❌**：BIOS 配置是 BMC/iLO/iDRAC 等带外管理的工作，在初始装机阶段完成，不与 Slurm+BCM 组合相关。

**记忆锚点：** Slurm 解决"排谁"，BCM 解决"排多少、谁能用多少"。两者叠加 = 多租户公平调度。
