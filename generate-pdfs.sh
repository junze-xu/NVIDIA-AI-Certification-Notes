#!/bin/bash
# Generate all exam PDFs
# Usage: ./generate-pdfs.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

echo "=== NVIDIA 认证备考 PDF 生成器 ==="
echo ""

# Check Python
if ! command -v python3 &> /dev/null; then
    echo "❌ 未找到 python3，请先安装 Python 3"
    exit 1
fi

# Check dependencies
if ! python3 -c "import fpdf, markdown" 2>/dev/null; then
    echo "📦 安装依赖..."
    pip3 install fpdf2 markdown
fi

# Run generator
echo "📝 开始生成 PDF..."
python3 gen_pdfs.py

echo ""
echo "✅ 完成！PDF 文件保存在 pdfs/ 目录"
echo ""
ls -lh pdfs/*.pdf
