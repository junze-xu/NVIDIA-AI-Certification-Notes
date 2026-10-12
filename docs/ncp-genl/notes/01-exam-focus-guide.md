---
sidebar_position: 1
title: 7 大高频易混考点
---

# NCP-GENL 备考：高级 LLM 机制 7 个高频易混考点

> ⚠️ 本文基于官方考纲整理，仅覆盖高频易混考点，**不能替代完整考试大纲**。

## 考点 1：KV 缓存三变体

| 变体 | KV 头数 | KV 缓存大小 | 代表使用者 |
|---|---|---|---|
| **MHA** | = 查询头数 | 最大 | 原始 Transformer |
| **GQA** | 分组（子集） | 中等（MHA 的 1/4–1/8） | Llama 2/3、Mistral |
| **MQA** | 1（全体共享） | 最小 | PaLM、Falcon |

**KV 缓存公式**：缓存大小 ∝ num_layers × num_kv_heads × head_dim × 2(K 和 V) × bytes/param

**考试要点**：GQA 的 KV 头数 = num_query_heads / group_size

## 考点 2：FlashAttention —— 精确算法，非近似

| 特性 | 说明 |
|---|---|
| **精确性** | 精确算法，**不是近似** |
| 切块技术 | Q/K/V 切成 SRAM 大小的块 + 在线 softmax |
| 内存 | **O(N)** vs 标准 O(N²) |
| FLOPs | 仍为 O(N²)（未减少计算） |
| 解决什么 | **内存带宽瓶颈**，非算力瓶颈 |

**考试陷阱**：FlashAttention 是精确的，不要误以为是低精度/近似算法。

## 考点 3：混合专家（MoE）稀疏激活

| 概念 | 事实 |
|---|---|
| **路由** | 门控网络给专家打分；每个 token 激活 top-k（通常 1 或 2） |
| **稀疏激活** | 总参数随专家数扩展；**活跃 FLOPs 随 k 扩展，而非随专家总数** |
| 示例 | Mixtral 8x7B：8 专家 top-2，约 13B 激活 / 约 47B 总参数 |

**考试要点**：MoE 的"稀疏"指的是**激活**稀疏，不是注意力稀疏。机制完全不同！

## 考点 4：位置编码外推性

| 类型 | 外推性 | 代表模型 |
|---|---|---|
| 绝对（正弦/可学习） | ❌ 差 | 原始 Transformer、GPT-2 |
| RoPE | ⚠️ 需缩放（NTK/YaRN） | Llama、GPT-NeoX |
| ALiBi | ✅ 原生 | BLOOM、MPT |

**考试陷阱**：RoPE 单独使用**不能**良好外推，需要额外缩放。ALiBi 是唯一原生支持的。

## 考点 5：编码器-解码器 vs 仅解码器

| 方面 | 编码器-解码器 | 仅解码器 |
|---|---|---|
| 注意力 | 双向编码器 + 因果解码器 + 交叉注意力 | 仅因果自注意力 |
| 最适合 | 翻译、摘要（seq2seq） | 开放式生成、通用 LLM |
| 示例 | T5、BART | GPT、Llama、Mistral |

## 考点 6：GELU 是 Transformer 默认激活

| 函数 | 常见用途 |
|---|---|
| **GELU** | Transformer FFN 层（BERT、GPT 默认） |
| ReLU | 经典深度网络 |
| Softmax | 注意力分数、输出分布 |

**考试要点**：不要用 ReLU 回答 Transformer 激活函数——现代 Transformer 默认 GELU。

## 考点 7：架构决策矩阵

```
需要翻译/摘要？ → 编码器-解码器
需要开放式生成？ → 仅解码器
需要分类/嵌入？ → 仅编码器
需要省 KV 缓存？ → GQA 或 MQA
需要外推长度？ → ALiBi（或 RoPE + 缩放）
```

---

## 速记总表

| 一句话考点 | 答案 |
|---|---|
| FlashAttention 近似吗？ | **不是**，精确算法 |
| FlashAttention 解决什么？ | 内存**带宽**瓶颈 |
| MoE 稀疏什么？ | 激活稀疏（非注意力稀疏） |
| GQA KV 头怎么算？ | query_heads / group_size |
| RoPE 能外推吗？ | 需缩放，单独不行 |
| ALiBi 能外推吗？ | **原生可以** |
| Transformer FFN 用什么激活？ | **GELU** |

---

> 📌 **完整速查表 + Anki 闪卡 + 模拟卷**：关注公众号「NVIDIA 认证备考」回复「NCP-GENL」领取 PDF 全家桶。
