#!/usr/bin/env python3
"""
Generate one PDF per exam using fpdf2.
- Embeds PingFang SC (non-CID, compatible with all viewers)
Usage: python3 gen_pdfs.py
"""

import os
import re
import glob
import markdown
from fpdf import FPDF

DOCS_DIR = "docs"
OUTPUT_DIR = "pdfs"
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

CJK_FONT_PATH = "/System/Library/AssetsV2/com_apple_MobileAsset_Font7/3419f2a427639ad8c8e139149a287865a90fa17e.asset/AssetData/PingFang.ttc"
if not os.path.exists(CJK_FONT_PATH):
    results = glob.glob("/System/Library/AssetsV2/com_apple_MobileAsset_Font7/*/AssetData/PingFang.ttc")
    if results:
        CJK_FONT_PATH = results[0]
    else:
        raise FileNotFoundError("No CJK font found")

EXAMS = [
    ("nca-aiio", "NCA-AIIO AI基础架构与运维"),
    ("nca-genl", "NCA-GENL 生成式AI与LLM"),
    ("nca-genm", "NCA-GENM 多模态生成式AI"),
    ("nca-ads", "NCA-ADS 加速数据科学RAPIDS"),
    ("ncp-aii", "NCP-AII AI Infrastructure"),
    ("ncp-aio", "NCP-AIO AI Operations"),
    ("ncp-ain", "NCP-AIN AI Networking"),
    ("ncp-genl", "NCP-GENL Generative AI LLMs"),
    ("ncp-aai", "NCP-AAI Agentic AI"),
    ("ncp-ads", "NCP-ADS Accelerated Data Science"),
]

SECTION_ORDER = [
    ("overview.md", "考试概览"),
    ("exam-objectives.md", "考纲要点"),
    ("references.md", "参考资料"),
    ("dli-courses.md", "DLI 推荐课程"),
    ("notes", "备考笔记"),
    ("cheatsheets", "速查卡"),
    ("flashcards", "闪卡"),
    ("labs", "实验手册"),
]


def clean_markdown(text):
    text = re.sub(r'<div[^>]*>', '', text, flags=re.DOTALL)
    text = re.sub(r'</div>', '', text, flags=re.DOTALL)
    text = re.sub(r'<(?:br|hr)[^>]*/?>', '\n', text)
    text = re.sub(r'<!--.*?-->', '', text, flags=re.DOTALL)
    text = re.sub(r'\]\([^)]*\.md[^)]*\)', '](#)', text)
    text = re.sub(r'!\[([^\]]*)\]\([^)]*\)', r'[图片: \1]', text)
    return text


def collect_exam_md(exam_dir):
    parts = []
    for section_name, section_title in SECTION_ORDER:
        path = os.path.join(exam_dir, section_name)
        if not os.path.exists(path):
            continue
        if os.path.isfile(path):
            with open(path, "r", encoding="utf-8") as f:
                content = f.read()
            content = re.sub(r'^---\n.*?\n---\n', '', content, flags=re.DOTALL)
            content = clean_markdown(content)
            parts.append(f"\n\n---\n\n## {section_title}\n\n{content}")
        elif os.path.isdir(path):
            files = sorted(glob.glob(os.path.join(path, "**/*.md"), recursive=True),
                          key=lambda x: os.path.basename(x))
            if files:
                parts.append(f"\n\n---\n\n## {section_title}\n")
                for fpath in files:
                    with open(fpath, "r", encoding="utf-8") as f:
                        content = f.read()
                    content = re.sub(r'^---\n.*?\n---\n', '', content, flags=re.DOTALL)
                    content = clean_markdown(content)
                    parts.append(f"\n{content}")
    return "".join(parts)


class PDF(FPDF):
    def __init__(self):
        super().__init__()
        self.add_font("CJK", "", CJK_FONT_PATH)
        self.add_font("CJK", "B", CJK_FONT_PATH)

    def render_html(self, html_content):
        import html.parser

        class P(html.parser.HTMLParser):
            tag = None
            buf = ""
            lidx = 0
            ltype = None

            def handle_starttag(s, t, attrs):
                if t in ('h1','h2','h3','h4','h5','h6'):
                    s.tag = t; s.buf = ""
                elif t == 'p':
                    s.tag = 'p'; s.buf = ""
                elif t == 'br':
                    pass
                elif t == 'hr':
                    self.ln(4)
                    self.set_draw_color(180)
                    self.line(15, self.get_y(), self.w - 15, self.get_y())
                    self.ln(4)
                elif t == 'pre':
                    s.tag = 'pre'; s.buf = ""
                elif t in ('ul','ol'):
                    s.ltype = t; s.lidx = 0; s.tag = t
                elif t == 'li':
                    s.lidx += 1; s.tag = 'li'; s.buf = ""
                elif t == 'blockquote':
                    s.tag = 'blockquote'; s.buf = ""

            def handle_data(s, data):
                if s.tag:
                    s.buf += data

            def handle_endtag(s, t):
                if t in ('h1','h2','h3','h4','h5','h6'):
                    sz = {'h1':20,'h2':16,'h3':13,'h4':11}.get(t, 11)
                    self.ln(4)
                    self.set_font("CJK", "B", sz)
                    if t in ('h1','h2'):
                        self.set_text_color(25, 25, 100)
                    self.multi_cell(0, 8, s.buf.strip())
                    self.set_text_color(0, 0, 0)
                    self.ln(2)
                    s.buf = ""; s.tag = None
                elif t == 'p':
                    if s.buf.strip():
                        self.set_x(10)
                        self.set_font("CJK", "", 10)
                        self.multi_cell(0, 7, s.buf.strip())
                        self.ln(2)
                    s.buf = ""; s.tag = None
                elif t == 'pre':
                    if s.buf.strip():
                        self.set_font("CJK", "", 8)
                        self.set_fill_color(240, 240, 240)
                        for line in s.buf.strip().split('\n'):
                            self.set_x(20)
                            self.cell(self.w - 40, 5, line, fill=True)
                            self.ln()
                    s.buf = ""; s.tag = None
                elif t in ('ul','ol'):
                    self.set_x(10); self.ln(2); s.tag = None
                elif t == 'li':
                    pre = f"{s.lidx}." if s.ltype == 'ol' else "•"
                    self.set_x(22)
                    self.set_font("CJK", "", 10)
                    self.multi_cell(self.w - 32, 7, f"  {pre} {s.buf.strip()}")
                    s.buf = ""; s.tag = s.ltype
                elif t == 'blockquote':
                    if s.buf.strip():
                        self.set_x(20)
                        self.set_draw_color(100, 100, 200)
                        bh = max(10, s.buf.count('\n') * 6 + 10)
                        self.line(18, self.get_y(), 18, self.get_y() + bh)
                        self.set_font("CJK", "", 9)
                        self.set_text_color(70, 70, 70)
                        self.multi_cell(self.w - 40, 6, s.buf.strip())
                        self.set_text_color(0, 0, 0)
                        self.set_x(10)
                    s.buf = ""; s.tag = None

        P().feed(html_content)


def render_pdf(output_path, title, md_content):
    html_content = markdown.markdown(md_content, extensions=['tables', 'fenced_code'])
    pdf = PDF()

    # Title page
    pdf.add_page()
    pdf.ln(pdf.h / 3)
    pdf.set_font("CJK", "B", 24)
    pdf.set_text_color(25, 25, 100)
    pdf.cell(0, 15, title, align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(8)
    pdf.set_font("CJK", "", 12)
    pdf.set_text_color(80, 80, 80)
    pdf.cell(0, 8, "NVIDIA 认证备考资料 · JunzeXu", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(4)
    pdf.set_font("CJK", "", 10)
    pdf.set_text_color(130, 130, 130)
    pdf.cell(0, 7, "关注公众号 JunzeXuInfra 获取更多资源", align="C")

    # Content
    pdf.add_page()
    pdf.render_html(html_content)

    pdf.output(output_path)


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    print(f"CJK font: {CJK_FONT_PATH}\n")

    for exam_slug, exam_title in EXAMS:
        exam_dir = os.path.join(DOCS_DIR, exam_slug)
        if not os.path.isdir(exam_dir):
            print(f"  SKIP {exam_slug}"); continue
        print(f"Processing {exam_title}...")
        md = f"# {exam_title}\n\n> NVIDIA 认证备考资料 · JunzeXu\n"
        md += collect_exam_md(exam_dir)
        out = os.path.join(OUTPUT_DIR, f"{exam_title}.pdf")
        render_pdf(out, exam_title, md)
        print(f"  ✓ {os.path.getsize(out) // 1024} KB")


if __name__ == "__main__":
    main()
