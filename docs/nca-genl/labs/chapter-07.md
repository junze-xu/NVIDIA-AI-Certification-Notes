---
id: chapter-07
title: "第 7 章实验：LLM 集成与部署"
description: "RAG 构建、向量搜索、决策矩阵实验"
sidebar_position: 7
---

# 实验：LLM 集成与部署

:::note 预计用时
20 分钟
:::

## 实验目标

- 能构建完整的 RAG 流水线
- 掌握 FAISS 向量搜索
- 理解微调 vs RAG vs 提示工程的取舍

## 练习 1：构建 RAG 流水线

```python
from sentence_transformers import SentenceTransformer
import faiss
import numpy as np

# 嵌入模型
encoder = SentenceTransformer('all-MiniLM-L6-v2')

# 知识库
documents = ["CUDA 是 NVIDIA 的并行计算平台", "cuDF 是 GPU 加速的 DataFrame"]
doc_embeddings = encoder.encode(documents)

# 构建 FAISS 索引
index = faiss.IndexFlatL2(doc_embeddings.shape[1])
index.add(doc_embeddings.astype('float32'))

# 查询
query = "什么是 CUDA？"
query_embedding = encoder.encode([query]).astype('float32')
D, I = index.search(query_embedding, k=2)
print(f"最相似文档: {[documents[i] for i in I[0]]}")
```

## 练习 2：决策矩阵

| 场景 | 正确方案 |
|------|----------|
| 低于 500 示例 | 提示工程/RAG |
| 动态知识/新鲜度 | RAG |
| 永久改变风格 | 微调 |

## 关键要点

:::info 本章记忆锚点
RAG 架构：查询→嵌入→搜索→检索→注入→生成。FAISS 用于原型。低于 500 示例选提示工程/RAG。
:::
