---
sidebar_position: 1
title: 7 大高频易混考点
---

# NCA-ADS 备考：RAPIDS 生态 7 个高频易混考点

> ⚠️ 本文基于官方考纲整理，仅覆盖高频易混考点，**不能替代完整考试大纲**。

## 考点 1：cuDF vs pandas —— "object" dtype 不存在

cuDF **没有**通用的 `object` dtype。每一列都严格类型化：

| dtype | 存储 | 说明 |
|---|---|---|
| 数值（int/float） | 原生类型列 | 标准数学运算 |
| 字符串 | Arrow 偏移量 + 字符缓冲区 | 高基数文本 |
| 分类（category） | 字典编码的整数 | 低基数重复值，对 groupby/join 有巨大收益 |
| 日期时间 | 原生类型列 | 时间序列运算 |

**考试陷阱**：pandas 的 `object` dtype 在 cuDF 中不存在。记住 cuDF 底层使用 **Apache Arrow 列式格式**。

## 考点 2：cudf.pandas 的激活顺序 —— 不加速也不报错

```python
# ❌ 错误：先 import pandas，后激活
import pandas as pd        # 真实 pandas 已加载
%load_ext cudf.pandas      # 静默失效，不加速、不报错

# ✅ 正确：先激活，后使用
%load_ext cudf.pandas      # 先激活
import pandas as pd        # 此时 pd 已被替换
```

**考试关键**：必须在使用 `import pandas` **之前**激活 `cudf.pandas`。脚本模式下用 `python -m cudf.pandas script.py`。

## 考点 3：CPU 回退行为 —— 透明且静默

- cuDF 支持的操作 → GPU 加速
- 不支持的操作（冷门 pandas 方法、自定义函数）→ **透明回退到 CPU pandas**
- **不会报错**，但会失去 GPU 速度

**考试陷阱**：不支持的操作不会报错，而是静默回退。这保证了正确性，但损失了性能。

## 考点 4：小数据集反而 pandas 更快

| 数据规模 | 谁更快 | 原因 |
|---|---|---|
| 数千行 | pandas | GPU 内核启动 + PCIe 传输开销 |
| 百万行+ | cuDF | 并行计算收益超过开销 |

**考试情境**：题目强调"小数据集"时，CPU/pandas 可能是正确答案；强调"百万级"时选 cuDF。

## 考点 5：RAPIDS 生态四件套

| 库 | 替代 | 用例 |
|---|---|---|
| **cuDF** | pandas | GPU 加速 DataFrame |
| **cuML** | scikit-learn | GPU 机器学习（经典 ML） |
| **cuGraph** | NetworkX | GPU 图分析 |
| **cuSignal** | SciPy.signal | 信号处理 |

**考试要点**：RAPIDS = 数据科学加速，**不是深度学习**。深度学习用 PyTorch/TensorFlow。

## 考点 6：cuML 不是深度学习

cuML 覆盖**经典 ML**算法：回归、分类（随机森林、XGBoost）、聚类（K-Means、DBSCAN）。

- 深度学习（CNN、Transformer、RNN）→ 不在 cuML 中
- GPU 加速深度学习 → PyTorch / TensorFlow

**考试陷阱**：题目问"cuML 能做什么"——答案不包含神经网络训练。

## 考点 7：GPU 精度权衡

| 精度 | 相对 FP32 速度 | 精度损失 | 用例 |
|---|---|---|---|
| FP32 | 1x | 0% | 训练基线 |
| FP16 | 快 2 倍 | 不足 0.5% | 训练 + 推理 |
| INT8 | 快 4 倍 | 1-2% 以内 | 延迟关键推理 |

**记忆口诀**：「FP 十六快一半，INT 八倍最极限，精度损失换速度，训练别把 INT 选」

---

## 速记总表

| 一句话考点 | 答案 |
|---|---|
| cuDF 有 object .dtype 吗？ | **没有**，严格类型化 |
| cudf.pandas 何时激活？ | **import pandas 之前** |
| 不支持的操作会怎样？ | 静默回退 CPU，**不报错** |
| 小数据谁更快？ | **pandas**（GPU 启动开销大） |
| cuML 能深度学习吗？ | **不能**，经典 ML 而已 |
| RAPIDS 是深度学习？ | **不是**，是数据科学 |

---

> 📌 **完整速查表 + Anki 闪卡 + 模拟卷**：关注公众号「NVIDIA 认证备考」回复「NCA-ADS」领取 PDF 全家桶。
