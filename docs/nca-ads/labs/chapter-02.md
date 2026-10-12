---
id: chapter-02
title: "第 2 章实验：cuDF 实战操作"
description: "合并连接、分组聚合、数据重塑实验"
sidebar_position: 2
---

# 实验：cuDF 实战操作

:::note 预计用时
18 分钟
:::

## 实验目标

- 掌握 GPU 哈希连接的用法
- 理解空值处理的 dtype 约束
- 熟练使用数据重塑函数

## 练习 1：GPU 哈希连接

```python
import cudf

df1 = cudf.DataFrame({'id': range(1000000), 'value': range(1000000)})
df2 = cudf.DataFrame({'id': range(0, 1000000, 2), 'category': ['A', 'B'] * 250000})

result = df1.merge(df2, on='id', how='left')
print(result.head())
```

## 练习 2：空值处理验证

```python
import cudf

df = cudf.DataFrame({'name': ['Alice', None, 'Bob'], 'age': [25, 30, None]})

# 正确：字符串列用字符串填充
df['name'] = df['name'].fillna('Unknown')

# 错误示例：对字符串列用 0 填充会 TypeError
# df['name'] = df['name'].fillna(0)  # 失败！
```

:::caution
对字符串列执行 `fillna(0)` 会抛出 TypeError。
:::

## 练习 3：pivot vs pivot_table

```python
df = cudf.DataFrame({
    'date': ['2024-01', '2024-01', '2024-02'],
    'product': ['A', 'B', 'A'],
    'sales': [100, 200, 150]
})

# pivot_table 可以聚合重复项
result = df.pivot_table(index='date', columns='product', values='sales', aggfunc='sum')
```

## 关键要点

:::info 本章记忆锚点
cuDF 哈希连接自动选择小表作为 build 侧。fillna() 需匹配列 dtype。pivot_table 可处理重复索引的聚合。
:::
