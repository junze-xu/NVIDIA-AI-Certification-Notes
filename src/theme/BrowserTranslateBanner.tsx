import { useEffect, useRef, useState, useCallback } from 'react';
import { useLocation } from '@docusaurus/router';

/* ------------------------------------------------------------------ */
/*  一次性 DOM 遍历：给所有 <code> 注入 notranslate                      */
/*  用 TreeWalker，不监听变化，避免和浏览器翻译死循环                      */
/* ------------------------------------------------------------------ */
function markCodeNoTranslate(root: ParentNode) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
  let node: Element | null = walker.nextNode() as Element | null;
  while (node) {
    if (node.nodeName === 'CODE' || node.classList.contains('prism-code')) {
      node.classList.add('notranslate');
      node.setAttribute('translate', 'no');
    }
    node = walker.nextNode() as Element | null;
  }
}

/* ------------------------------------------------------------------ */
/*  组件                                                                */
/* ------------------------------------------------------------------ */
export default function BrowserTranslateBanner() {
  const location = useLocation();
  const [showBanner, setShowBanner] = useState(false);
  const dismissedRef = useRef(false);

  /* ---------- 1. 浏览器语言检测 + 提示条 ---------- */
  useEffect(() => {
    if (typeof navigator === 'undefined') return;
    if (navigator.language?.startsWith('zh')) return;           // 中文无需提示
    if (sessionStorage.getItem('banner-dismissed')) return;      // 已关闭过

    const t = setTimeout(() => {
      if (!dismissedRef.current) setShowBanner(true);
    }, 1500);
    return () => clearTimeout(t);
  }, []);

  const handleDismiss = useCallback(() => {
    dismissedRef.current = true;
    setShowBanner(false);
    sessionStorage.setItem('banner-dismissed', '1');
  }, []);

  /* ---------- 2. SPA 路由切换后重新标记代码块 ---------- */
  useEffect(() => {
    const id = requestAnimationFrame(() => markCodeNoTranslate(document.body));
    return () => cancelAnimationFrame(id);
  }, [location.pathname]);

  /* ---------- 3. 首屏标记 ---------- */
  useEffect(() => {
    markCodeNoTranslate(document.body);
  }, []);

  if (!showBanner) return null;

  return (
    <div className="browser-translate-banner" role="alert">
      <div className="browser-translate-banner__content">
        <span aria-hidden="true" className="browser-translate-banner__icon">🌐</span>
        <div className="browser-translate-banner__text">
          <strong>This page is in Chinese.</strong>{' '}
          Right-click → &quot;Translate to English&quot; in Chrome/Edge.
          <br />
          <span className="browser-translate-banner__hint">
            本站为中文，Chrome/Edge 用户可右键 → &quot;翻译成 English&quot; 查看英文版，代码不受影响。
          </span>
        </div>
        <button
          type="button"
          aria-label="关闭提示"
          className="browser-translate-banner__close"
          onClick={handleDismiss}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
