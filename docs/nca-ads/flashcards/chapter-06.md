---
id: chapter-06
title: "第 6 章：GPU 特征工程与调优 — 知识卡片"
description: "cuML 预处理、编码器、超参数调优知识卡片"
sidebar_position: 6
---

# GPU 特征工程与调优 — 知识卡片

## 卡片 1

**Q：有显著离群点时的首选缩放器是？**

A：`cuml.preprocessing.RobustScaler`（基于中位数/IQR）。StandardScaler 会被离群点扭曲。

---

## 卡片 2

**Q：高基数分类特征（如用户 ID）的最佳编码器？**

A：`cuml.preprocessing.TargetEncoder` — 用目标统计量编码，避免 OneHotEncoder 导致的内存爆炸。必须配合 CV 折叠使用。

---

## 卡片 3

**Q：如何防止超参数调优循环中的 CPU↔GPU 传输瓶颈？**

A：全程保持数据为 cupy/cudf 对象；循环内避免 `.to_pandas()`/`.to_numpy()`；设置 `cuml.set_global_output_type`。

---

## 卡片 4

**Q：sklearn GridSearchCV(n_jobs=-1) 在 cuML 上为什么失败？**

A：多个 worker 进程各自尝试创建 CUDA 上下文 → 竞争。单 GPU 用 `n_jobs=1`，多 GPU 用 Dask-ML。

---

## 卡片 5

**Q：基于树的模型（RandomForest、XGBoost）处理分类特征时用什么编码器？**

A：LabelEncoder — 整数编码不会在树模型中造成虚假量级关系。线性/距离模型应避免。

---

## 卡片 6

**Q：在流水线中混用 cuDF 和 cuML 步骤的主要陷阱？**

A：插入仅 pandas 函数（如 `pd.get_dummies()`）→ 强制 GPU→CPU→GPU 传输，毁掉性能。
