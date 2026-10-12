# 中英术语对照（持续更新）
> 起点：S-NP-04 字幕里的易混术语；每学新单元补一行。英文列=考试/文档原文，中文列=惯用译法。

| 中文 | English | 一句话定位 |
|---|---|---|
| 并行计算平台 | CUDA | GPU 计算的基础层，一切加速库的地基 |
| 深度学习原语库 | cuDNN | 神经网络算子库，框架背后用，不直接写 |
| 推理优化器 | TensorRT | 训练后模型 → 低延迟生产推理（量化/层融合） |
| 推理服务器 | Triton Inference Server | 多模型部署、动态批处理、A/B |
| 加速数据科学栈 | RAPIDS（cuDF/cuML） | GPU 版 pandas/sklearn；小数据反而更慢，要会挑场景 |
| 分布式计算框架 | Dask | 大数据切片并行，衔接 RAPIDS |
| GPU 监控 | DCGM（dcgmi） | 健康检查/遥测/故障排查主力 |
| 作业调度 | Slurm | HPC 调度器，知道它解决什么问题即可 |
| 卡间互连 | NVLink | 单节点内 GPU 点对点高带宽 |
| 全互连芯片 | NVSwitch | 多 GPU 无阻塞交换 |
| 节点间网络 | InfiniBand / ConnectX | 跨节点（如 ConnectX-7，400Gb/s） |
| 数据处理器 | DPU（BlueField） | 三使命：卸载/加速/隔离；DOCA 是其开放 SDK |
| 直通技术 | GPUDirect RDMA / Storage | GPU 直读远端内存/存储，绕开 CPU 拷贝 |
| 硬件切分 | MIG | 单卡最多 7 个完全隔离实例（仅 Blackwell/Hopper） |
| 虚拟化 GPU | vGPU：vPC / vApps / RTX vWS | 多 VM 共享一卡；vApps/vPC=知识员工，RTX vWS=设计师 |
| 整机方案 | DGX / HGX | DGX=含软件栈整机；HGX=主板形态 |
| 超级芯片 | Grace Hopper / Grace Blackwell | GH=推荐系统/图数据库；GB=1CPU+2GPU→万亿参数 LLM |
| 集群参考设计 | BasePOD / SuperPOD | SuperPOD=可扩展整机柜集群；BasePOD 第三方灵活性在存储侧 |
| 容器与模型目录 | NGC | 认证容器（月更）/预训练模型（带 model card）/Helm charts |
| 企业软件套件 | NVAIE | 应用软件（NIM/NeMo）+基础设施软件（驱动/K8s operators） |
| 大模型框架 | NeMo / NIM | NeMo=训练与定制；NIM=推理微服务 |
| 微调工具包 | TAO | 迁移学习工具包（听写常误为 TOW） |
| 检索增强生成 | RAG | 检索+生成串联，LLM 应用高频考点 |
| 人类反馈强化学习 | RLHF | 预训练→微调→对齐的分水岭 |
| 图文对比预训练 | CLIP | 图像与文本进同一向量空间（GENM 枢纽概念） |
| 扩散模型 | Diffusion | 加噪→去噪；U-Net 主干（听写常误为 Unit） |
| 模型卡片 | Model Card | 数据集/轮次/batch size/准确率等可复现信息 |
