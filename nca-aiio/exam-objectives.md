# NCA-AIIO 考纲逐条要点（来源：英伟达官方 Study Guide）

> 原文出处：NVIDIA NCA-AIIO Study Guide (中文版) · 6 页 · 2024.10 版本
> 每行对应官方 exam objectives 一个可考点；✅ = 已有对应 notes/ 覆盖

---

## 域 1 · AI 基础知识（考试权重 38%）

| # | 考点 | 覆盖 |
|---|---|---|
| 1.1 | 描述 AI 环境中使用的 NVIDIA 软件堆栈 | [notes/01-ai-基础架构.md](notes/01-ai-基础架构.md) 🟡 |
| 1.2 | 比较和对比训练和推理架构的要求和注意事项 | ⬜ |
| 1.3 | 区分 AI、机器学习和深度学习的概念 | [notes/01-ai-基础架构.md](notes/01-ai-基础架构.md) 🟡 |
| 1.4 | 解释促成近期 AI 快速改进和采用的因素 | ⬜ |
| 1.5 | 说明关键的 AI 用例和行业 | ⬜ |
| 1.6 | 说明各种 NVIDIA 解决方案的用途和用例 | ⬜ |
| 1.7 | 描述与 AI 开发和部署生命周期相关的软件组件 | ⬜ |
| 1.8 | 比较和对比 GPU 和 CPU 架构 | ⬜ |

**推荐培训**：AI 基础架构和运营基础（DLI S-NP-04）第 1、2、4、5、7、14 单元

**推荐阅读**：
- [NVIDIA TensorRT](https://developer.nvidia.com/tensorrt)
- [Deep Learning Training vs. Inference — Medium](https://medium.com/)
- [Understanding Machine Learning Inference — Run:ai](https://www.run.ai/)
- [Tips on Scaling Storage for AI — NVIDIA Blog](https://blogs.nvidia.com/)
- [What Is Machine Learning — IBM](https://www.ibm.com/)
- [Machine Learning: What It Is and Why It Matters — SAS](https://www.sas.com/)
- [What Are Large Language Models Used For? — NVIDIA Blog](https://blogs.nvidia.com/)
- [NVIDIA GPU Operator — NVIDIA Blog](https://blogs.nvidia.com/)
- [CPU vs GPU — Intel](https://www.intel.com/)

---

## 域 2 · AI 基础架构（考试权重 40%）

| # | 考点 | 覆盖 |
|---|---|---|
| 2.1 | 理解使用数据挖掘、数据可视化和类似技术从大型数据集中提取见解的过程 | ⬜ |
| 2.2 | 使用统计性能指标（损失函数 / 解释方差比例）比较模型 | ⬜ |
| 2.3 | 在高级团队成员的监督下进行数据分析 | ⬜ |
| 2.4 | 使用专用软件创建图形、图表或其他可视化效果，以传达数据分析结果 | ⬜ |
| 2.5 | 识别关系和趋势或任何可能影响研究结果的因素 | ⬜ |

**推荐培训**：DLI S-NP-04 第 4、7.1、10、7.4、8、11、12.4 单元

**推荐阅读**：
- [Offloading Workloads With BlueField DPU — NVIDIA Blog](https://blogs.nvidia.com/)
- [NVIDIA DGX SuperPOD Reference Architecture — NVIDIA Docs](https://docs.nvidia.com/)
- [Power Constraints and AI Workloads — LinkedIn](https://www.linkedin.com/)
- [Introduction to NVIDIA DGX H100 — NVIDIA Docs](https://docs.nvidia.com/)
- [InfiniBand Key Features — NVIDIA Academy Vimeo](https://vimeo.com/)
- [Modernizing GPU Network Data Transfer With NVSwitch — AMAX](https://www.amax.com/)
- [Accelerating IO in the Modern Data Center — NVIDIA Blog](https://blogs.nvidia.com/)

---

## 域 3 · AI 运营（考试权重 22%）

| # | 考点 | 覆盖 |
|---|---|---|
| 3.1 | 说明 AI 数据中心管理和监控要点 | ⬜ |
| 3.2 | 说明 AI 集群编排和作业调度要点 | ⬜ |
| 3.3 | 阐明与监控 GPU 相关的关键措施和标准 | ⬜ |
| 3.4 | 确定虚拟化加速基础设施的关键注意事项 | [notes/01-ai-基础架构.md](notes/01-ai-基础架构.md) 🟡 |

**推荐培训**：DLI S-NP-04 第 5、8、13、14 单元

**推荐阅读**：
- [Baseboard Management Controller — NVIDIA Docs](https://docs.nvidia.com/)
- [NVIDIA Base Command](https://www.nvidia.com/)
- [NVIDIA DCGM](https://developer.nvidia.com/dcgm)
- [Out-of-Band Management Networks — Dell Technologies](https://www.delltechnologies.com/)
- [Kubernetes Documentation](https://kubernetes.io/)
- [Job Scheduling in a Cloud Environment — Samsung SDS](https://www.samsungsds.com/)
- [What Is a Container? — Docker](https://www.docker.com/)
- [Slurm Workload Manager — SchedMD](https://slurm.schedmd.com/)
- [6 Reasons for Low GPU Utilization — Run:ai](https://www.run.ai/)
- [NVIDIA MIG](https://www.nvidia.com/)

---

## 考试适用人群摘要

> 面向刚开始接触 AI 运营和基础架构，但需要了解和阐述数据中心环境和本地环境中采用 AI 的不同组件和方面的 IT 专业人员。
> 考生需要了解企业中的 AI 和 ML、AI 运营的基本任务和要求、AI 部署所需的软件和硬件、NVIDIA 软件/硬件和网络。

---

## 相关工作职责要求

1. 了解 AI 工作负载和用例
2. 区分 AI 和机器学习概念
3. 描述专门针对 AI 的数据中心运营的关键概念
4. 基本了解 AI 环境的网络需求
5. 深入了解 GPU 和 DPU 及其与 CPU 架构的区别
6. 与专业管理员协作，支持或负责 AI 数据中心的运营
7. 了解集群编排和管理、作业调度和监控要点
8. 说明如何在 AI 工作负载中使用虚拟化环境
9. 了解 AI 部署所使用的 NVIDIA 软件和硬件
