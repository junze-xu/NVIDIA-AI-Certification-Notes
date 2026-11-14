#!/usr/bin/env python3
"""Generate favicon and social card images for the Docusaurus site."""
from PIL import Image, ImageDraw, ImageFont

NVIDIA_GREEN = (118, 185, 0, 255)
DARK_BG = (20, 20, 20, 255)
WHITE = (255, 255, 255, 255)

def draw_icon(size):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    radius = size // 5
    d.rounded_rectangle([0, 0, size-1, size-1], radius=radius, fill=NVIDIA_GREEN)
    font_size = max(8, size // 3)
    font = None
    for fp in ["/System/Library/Fonts/Helvetica.ttc",
               "/System/Library/Fonts/Supplemental/Arial.ttf",
               "/System/Library/Fonts/Geneva.ttf"]:
        try:
            font = ImageFont.truetype(fp, font_size)
            break
        except:
            continue
    if font is None:
        font = ImageFont.load_default()
    text = "NC"
    bbox = d.textbbox((0, 0), text, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    d.text(((size - tw) / 2, (size - th) / 2 - bbox[1]), text, fill=WHITE, font=font)
    return img

# favicon.ico
icon_sizes = [16, 32, 48, 64]
icons = [draw_icon(s) for s in icon_sizes]
icons[1].save("static/img/favicon.ico", format="ICO", sizes=[(s, s) for s in icon_sizes])
print("✓ favicon.ico")

# favicon.png
draw_icon(180).save("static/img/favicon.png", format="PNG")
print("✓ favicon.png")

# card.png
card = Image.new("RGBA", (1200, 630), DARK_BG)
d = ImageDraw.Draw(card)
for i in range(200):
    alpha = int(255 * (1 - i / 200))
    d.line([(i, 0), (i, 630)], fill=(118, 185, 0, alpha))
icon = draw_icon(200)
card.paste(icon, (60, 215), icon)

try:
    ft = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 72)
    fs = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 36)
    fk = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 28)
except:
    ft = fs = fk = ImageFont.load_default()

d.text((300, 160), "NVIDIA AI Certification Notes", fill=WHITE, font=ft)
d.text((300, 260), "NCA + NCP 十门认证 · 中文 · 非官方学习笔记", fill=(180, 180, 180, 255), font=fs)
d.text((300, 330), "NCA 四门初级 + NCP 六门中级 · 逐域拆解 · 每天更新", fill=(120, 200, 0, 255), font=fs)
d.text((300, 460), "junze-xu.github.io/NVIDIA-AI-Certification-Notes", fill=(100, 100, 100, 255), font=fk)
d.text((300, 510), "by JunzeXu · 苏州", fill=(80, 80, 80, 255), font=fk)
card.save("static/img/card.png", format="PNG")
print("✓ card.png")

svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#76b900"/>
      <stop offset="100%" stop-color="#4a7c00"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="14" fill="url(#g)"/>
  <text x="50%" y="56%" dominant-baseline="middle" text-anchor="middle" font-family="Arial,sans-serif" font-weight="bold" font-size="20" fill="#fff">NC</text>
  <circle cx="50" cy="14" r="5" fill="#fff" opacity="0.9"/>
</svg>
'''
with open("static/img/logo.svg", "w") as f:
    f.write(svg)
print("✓ logo.svg")
print("\nAll assets generated!")
