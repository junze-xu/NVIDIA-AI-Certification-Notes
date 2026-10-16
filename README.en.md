# NVIDIA AI Certification Notes (Unofficial) · JunzeXu

> ⚠️ This is an unofficial personal study repository, not affiliated with NVIDIA. Trademarks belong to NVIDIA Corporation. Official Study Guides are linked directly, never stored as copies.

**Opened 2026-10-12 · Goal: Pass NCA-AIIO first exam within 2026 (subject to official scheduling) · Daily progress tracked via commits**

![license](https://img.shields.io/badge/license-CC--BY--NC--SA--4.0-green) ![lang](https://img.shields.io/badge/lang-English-blue)

## What Is This

A collection of study materials for NVIDIA certification exams (4 NCA Associate + 6 NCP Professional levels), hands-on labs, and Chinese-English terminology references. Each exam's syllabus is extracted from the official Study Guide and decomposed item by item with coverage tracking.

All content is freely available online. You can also download per-exam PDFs (one per exam) for offline review. Follow the WeChat official account "JunzeXuInfra" to get them.

**Browse online**: [https://junze-xu.github.io/NVIDIA-AI-Certification-Notes/](https://junze-xu.github.io/NVIDIA-AI-Certification-Notes/)

This repo is for three kinds of people: **those preparing for exams** — ten exams decomposed by domain, study at your own pace; **career changers** — those who want to use NVIDIA's certification system to fill GPU/AI knowledge gaps; **discussants** — report wrong answers in Issues / Discussions, and help make the materials more accurate.

## How to Read This Repository

Each exam's README contains a **coverage checklist**: official syllabus items listed one per line → a linked file means it's done, blank means not yet written — **you can always verify I haven't missed anything, and you can also catch me when I haven't finished yet**.

Each exam directory also includes `overview.md` (official exam guide text) and `references.md` (all official PDF links + recommended reading).

## Exam Status

### NCA Associate

| Exam | Name | Highest Weight Domain | Entry |
|---|---|---|---|
| NCA-AIIO | AI Infrastructure & Operations | AI Infrastructure 40% | [nca-aiio/](nca-aiio/README.md) |
| NCA-GENL | Generative AI & LLMs | Core ML Knowledge 30% | [nca-genl/](nca-genl/README.md) |
| NCA-GENM | Generative AI Multimodal | Labs 25% | [nca-genm/](nca-genm/README.md) |
| NCA-ADS | Accelerated Data Science RAPIDS | Data Processing 23% | [nca-ads/](nca-ads/README.md) |

### NCP Professional

| Exam | Name | Prerequisite | Price | Entry |
|---|---|---|---|---|
| NCP-AII | AI Infrastructure Professional | ← NCA-AIIO | ¥2880 | [ncp-aii/](ncp-aii/README.md) |
| NCP-AIO | AI Operations Professional | ← NCP-AII | ¥2880 | [ncp-aio/](ncp-aio/README.md) |
| NCP-AIN | AI Networking Professional | ← NCP-AII | ¥2880 | [ncp-ain/](ncp-ain/README.md) |
| NCP-GENL | Generative AI LLMs Professional | ← NCA-GENL | ¥1580 | [ncp-genl/](ncp-genl/README.md) |
| NCP-AAI | Agentic AI Professional | ← NCP-GENL | ¥1580 | [ncp-aai/](ncp-aai/README.md) |
| NCP-ADS | Accelerated Data Science Professional | ← NCA-ADS | ¥1580 | [ncp-ads/](ncp-ads/README.md) |

> ⚠️ NCP-OUSD (OpenUSD Developer) is off-track, not covered in this repo.

## Content Boundaries

- **All online content is free**: study notes, cheatsheets, flashcards, Chinese-English terminology, hands-on labs, official Study Guide translations
- **Per-exam PDFs**: one PDF per exam for offline review, follow WeChat official account "JunzeXuInfra" to get them
- **Hard rules**: official PDF files themselves and real/recollect exam questions (dumps) are never stored in this repo. See [meta/MAINTENANCE.md](meta/MAINTENANCE.md) for details

## Repository Map

```
├── nca-aiio|nca-genl|nca-genm|nca-ads/   # NCA Associate (4 exams)
├── ncp-aii|aio|ain|genl|aai|ads/          # NCP Professional (6 exams)
├── common/               # Terminology · templates for each directory
└── meta/                 # Disclaimer · changelog · maintenance rules · LESSONS
```

### Per-Exam Standard Structure

```
<exam>/
├── README.md              # Exam overview + coverage checklist + progress
├── overview.md            # Official exam guide text (intro/params/audience/training)
├── exam-objectives.md    # Official Study Guide objectives + recommended reading (NCA level delivered)
├── references.md         # Official PDF links + recommended reading summary (NCA level delivered)
├── notes/                # Domain notes (numbered by domain)
├── cheatsheets/          # Cheatsheets
├── flashcards/           # Flashcards
├── labs/                 # Hands-on lab records (scripts + output + verify)
└── dli-courses.md        # Official DLI free courses + suggested learning order
```

## License & Attribution

Text content is compiled from publicly available NVIDIA official documentation; copyright belongs to the original NVIDIA document authors. Original content in this repo is licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Lab code is MIT.

## Get PDFs

Follow the WeChat official account "JunzeXuInfra", reply with the exam code (e.g. `NCA-AIIO`) to receive the complete PDF for that exam (one per exam, available offline).

## Feedback

Found an error → open an Issue. After fixing, I'll add it to CHANGELOG and thank you.

—— [JunzeXu](https://github.com/junze-xu), Suzhou, China.
