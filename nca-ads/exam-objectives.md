# NCA-ADS 考纲逐条要点（来源：英伟达官方 Study Guide）

> 原文出处：NVIDIA NCA-ADS Study Guide (英文版) · 11 页 · 2026.02 版本
> ⚠️ 本门考试无官方中文版 Study Guide，以下为英文原文要点翻译版

---

## 域 1 · 数据操作与准备（考试权重 23%）

| # | 考点 | 覆盖 |
|---|---|---|
| 1.1 | 使用 cuDF 和 pandas 进行数据集成、连接和操作 | ⬜ |
| 1.2 | 数据清洗、质量处理和治理合规 | ⬜ |
| 1.3 | 使用 RAPIDS、Dask 或 Spark 的 GPU 加速 ETL 工作流 | ⬜ |
| 1.4 | 数值和分类变量的特征工程 | ⬜ |
| 1.5 | 处理类别不平衡并生成合成数据 | ⬜ |
| 1.6 | 降维和数据采样 | ⬜ |
| 1.7 | 使用 Parquet 和现代框架高效处理和存储 | ⬜ |

**推荐课程**：加速端到端数据科学工作流（S-DS-01）· 面向表格式数据的特征工程最佳实践（S-DS-06）

**推荐阅读**：
- [NVIDIA cuDF: GPU-Accelerated Dataframes](https://developer.nvidia.com/)
- [RAPIDS cuDF for Feature Engineering](https://docs.rapids.ai/)
- [Best Practices for Multi-GPU Data Analysis With Dask](https://docs.rapids.ai/)
- [Techniques to Deal With Class Imbalance](https://arxiv.org/)

---

## 域 2 · 机器学习与 RAPIDS（考试权重 16%）

| # | 考点 | 覆盖 |
|---|---|---|
| 2.1 | 使用 cuML 和 XGBoost 进行 GPU 加速模型训练 | ⬜ |
| 2.2 | 回归、分类和聚类技术 | ⬜ |
| 2.3 | 模型评估、比较和泛化能力评估 | ⬜ |
| 2.4 | 超参数调优和优化 | ⬜ |
| 2.5 | 交叉验证方法 | ⬜ |
| 2.6 | 性能指标和混淆矩阵解读 | ⬜ |

**推荐阅读**：
- [Accelerated Data Analytics: ML With GPU-Accelerated pandas/sklearn](https://www.nvidia.com/)
- [NVIDIA cuML Brings Zero-Code-Change Acceleration](https://developer.nvidia.com/)
- [XGBoost/RandomForest GPU HPO With Dask](://github.com/)
- [Confusion Matrix — scikit-learn](https://scikit-learn.org/)

---

## 域 3 · 数据科学流水线与工作流自动化（考试权重 13%）

| # | 考点 | 覆盖 |
|---|---|---|
| 3.1 | 端到端数据科学流水线设计 | ⬜ |
| 3.2 | 特征工程、选择和转换以改进模型 | ⬜ |
| 3.3 | 通过模型和特征调整缓解欠拟合和过拟合 | ⬜ |
| 3.4 | 数据集增强和集成以增强训练数据 | ⬜ |
| 3.5 | 数据科学工作流的自动化和扩展性 | ⬜ |
| 3.6 | 使用 RAPIDS 和 Dask 构建可重复的流水线 | ⬜ |
| 3.7 | 启用数据飞轮：生产数据持续改进已部署模型 | ⬜ |

**推荐阅读**：[Scaling Data Pipelines — AT&T Case](https://www.nvidia.com/) · [RAPIDS](https://rapids.ai/) · [NVIDIA AI Workbench Quickstart](https://www.nvidia.com/)

---

## 域 4 · 描述性分析与可视化（考试权重 13%）

| # | 考点 | 覆盖 |
|---|---|---|
| 4.1 | 探索性数据分析 (EDA) 和描述性统计 | ⬜ |
| 4.2 | 可视化技术 | ⬜ |
| 4.3 | 为不同分析目标选择适当的图表 | ⬜ |
| 4.4 | 假设检验和统计显著性评估 | ⬜ |
| 4.5 | 解读数据中的模式、趋势和关系 | ⬜ |

**推荐阅读**：[Guide to Data Visualization With RAPIDS](https://docs.rapids.ai/) · [Making Plotly Dash Census Viz — RAPIDS](https://developer.nvidia.com/) · [pandas Documentation](https://pandas.pydata.org/)

---

## 域 5 · 加速数据科学基础（考试权重 12%）

| # | 考点 | 覆盖 |
|---|---|---|
| 5.1 | Python 数据分析基础（NumPy、pandas、Jupyter） | ⬜ |
| 5.2 | 核心 GPU 加速概念和数据科学优势 | ⬜ |
| 5.3 | CPU vs GPU 工作负载和内存传输优化 | ⬜ |
| 5.4 | 端到端数据科学工作流（采集、ETL、清洗、转换） | ⬜ |
| 5.5 | 分布式计算框架 vs GPU 加速计算框架 | ⬜ |
| 5.6 | 模型参数、调优和过拟合 vs 欠拟合概念 | ⬜ |

**推荐阅读**：[Data Science With Python — GeeksforGeeks](https://www.geeksforgeeks.org/) · [RAPIDS cuDF Versus pandas Comparison](https://docs.rapids.ai/) · [What is Accelerated Computing?](https://www.nvidia.com/)

---

## 域 6 · 入门 MLOps 实践（考试权重 10%）

| # | 考点 | 覆盖 |
|---|---|---|
| 6.1 | 监控和优化 ML 流水线的性能和可靠性 | ⬜ |
| 6.2 | 使用 MLflow / Weights & Biases / 自定义工具管理跟踪实验 | ⬜ |
| 6.3 | 模型保存、加载和预测生成 | ⬜ |
| 6.4 | 监控生产模型的漂移和性能退化 | ⬜ |
| 6.5 | 管理模型工件和配置以实现可重复性 | ⬜ |
| 6.6 | 基准测试工作流并选择最优硬件 | ⬜ |

**推荐阅读**：[A Guide to Monitoring ML Models in Production](https://www.evidentlyai.com/) · [MLflow: Hyperparameter Tuning and Experiment Tracking](https://mlflow.org/) · [Mastering Version Control for ML Models — DagsHub](https://dagshub.com/)

---

## 域 7 · 高级数据结构（考试权重 7%）

| # | 考点 | 覆盖 |
|---|---|---|
| 7.1 | 时间序列数据处理、切分和预测评估 | ⬜ |
| 7.2 | 使用 cuDF 插值管理缺失或不规则时间戳 | ⬜ |
| 7.3 | 基于图的数据表示和分析 | ⬜ |
| 7.4 | 节点重要性评估和网络关系可视化 | ⬜ |

**推荐课程**：面向时间序列预测的加速机器学习（S-DS-10）

**推荐阅读**：[Accelerating Time Series Forecasting With RAPIDS cuML](https://developer.nvidia.com/) · [Beginner's Guide to GPU Graph Analytics — NVIDIA Blog](https://blogs.nvidia.com/)

---

## 域 8 · 软件与环境管理（考试权重 6%）

| # | 考点 | 覆盖 |
|---|---|---|
| 8.1 | 通过维护环境文件实现数据科学项目可重复性 | ⬜ |
| 8.2 | 使用 Conda / pip / Docker 配置可重复 Python 环境 | ⬜ |
| 8.3 | 在多人数据科学环境中高效管理软件依赖和协作 | ⬜ |
| 8.4 | 执行 GPU 环境检查（驱动/CUDA/RAPIDS 兼容性、nvidia-smi、设备可见性）并解决依赖冲突 | ⬜ |
| 8.5 | 了解使用 Git 的版本控制基础 | ⬜ |

**推荐阅读**：[Get Started With GPU Acceleration for Data Science](https://www.nvidia.com/) · [NVIDIA SMI User Guide](https://developer.nvidia.com/) · [Conda Environments Guide](https://docs.conda.io/) · [NVIDIA Container Toolkit — Docker Integration](https://developer.nvidia.com/)

---

## 岗位描述摘要

> 加速数据科学助理是使用 GPU 加速工具准备数据、构建机器学习模型并在现代数据平台上构建可重复流水线的早期职业从业者。

8 项关键职责：
1. 使用 cuDF、pandas 和 GPU 加速 ETL 工具执行数据集成、清洗、特征工程和质量处理
2. 使用 cuML 和 XGBoost 训练和评估 GPU 加速 ML 模型（回归、分类、聚类）
3. 使用 RAPIDS 和 Dask 设计、自动化和记录端到端数据科学流水线
4. 进行探索性数据分析、描述性统计、可视化和假设检验
5. 了解基础数据科学概念并在适当时加速工作负载
6. 实施入门 MLOps 实践（监控、实验跟踪、模型管理、硬件基准测试）
7. 使用 GPU 加速工具处理时间序列和图等高级结构
8. 管理软件环境、依赖和版本控制，支持可重复的 GPU 数据科学项目
