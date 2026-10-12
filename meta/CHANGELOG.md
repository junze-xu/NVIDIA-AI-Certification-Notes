# Change Log

## 2026-10-12（续）

### NCP 中级拆仓

- 删除合并仓 `ncp/`（原含 README + overview 路线图）
- 拆分为**六个独立考试目录**，与四门 NCA 同级：
  - `ncp-aii/` — AI Infrastructure Professional（2880 元）
  - `ncp-aio/` — AI Operations Professional（2880 元）
  - `ncp-ain/` — AI Networking Professional（2880 元）
  - `ncp-genl/` — Generative AI LLMs Professional（1580 元）
  - `ncp-aai/` — Agentic AI Professional（1580 元）
  - `ncp-ads/` — Accelerated Data Science Professional（1580 元）
- 每个 NCP 目录含 `README.md`（考试概览 + 进度清单）+ `overview.md`（官方科目解读章节）
- 根 README 科目状态表重写，NCP 单独列块，仓库地图同步更新

### 目录命名统一

- `aiio/` → `nca-aiio/`、`genl/` → `nca-genl/`、`genm/` → `nca-genm/`、`ads/` → `nca-ads/`
- NCP 六门已为小写 `ncp-xxx` 格式，无需改动
- 统一命名规范：**`小写前缀-大写代码`**（`nca-aiio`、`ncp-aii`）
- 根 README 科目状态表 + 仓库地图全部更新为新名称

---

## 2026-10-12

### 新增官方考纲内容（来自英伟达 Study Guide PDF）

- 新增 `aiio/exam-objectives.md`：NCA-AIIO 官方 Study Guide 考纲逐条要点（域 1 AI 基础知识 38% / 域 2 AI 基础架构 40% / 域 3 AI 运营 22%）+ 推荐阅读链接
- 新增 `genl/exam-objectives.md`：NCA-GENL 官方考纲（5 大域，核心 ML 30% 为主）
- 新增 `genm/exam-objectives.md`：NCA-GENM 官方考纲（7 大域，实验 25% 权重最高）
- 新增 `ads/exam-objectives.md`：NCA-ADS 官方考纲英文翻译版（8 大域，数据操作 23%）

### 新增参考资料直链页

- 新增 `aiio/references.md`：官方 Study Guide PDF 直链 + 域 1-3 推荐阅读链接
- 新增 `genl/references.md`：官方 PDF 直链 + 5 大域推荐阅读链接
- 新增 `genm/references.md`：官方 PDF 直链 + 7 大域推荐阅读链接
- 新增 `ads/references.md`：官方 PDF 直链（仅英文版）+ 8 大域推荐阅读链接

### 目录结构升级

- 四门 README 的 `本仓库结构` 区块统一升级为新标准结构（overview.md / exam-objectives.md / references.md / notes/ 等）
- 根 README 新增"每门考试标准结构"区块与仓库地图
- 四门进度清单新增"考纲要点翻译 → exam-objectives.md"已完成项

### 个人背景措辞精简

- 四门 README 学习建议中"针对运维/嵌入式背景"前缀统一精简——信任锚保留在根 README 一句定位

### 其他

- 更新 `meta/MAINTENANCE.md` 含 overview.md/exam-objectives.md/references.md 定位说明
- 清理临时 PDF 提取脚本（Swift/Python）
