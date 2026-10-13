import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * 浏览器原生翻译 — 纯提示组件
 *
 * 不做任何 DOM 修改、不加 notranslate class，
 * 完全交给浏览器自己的翻译引擎处理。
 *
 * Chrome/Edge 默认就不会翻译 <code> <pre> 等代码元素，
 * 不需要我们干预。
 */

/**
 * 检测浏览器是否"可能是英文环境"
 */
function isLikelyEnglishUser(): boolean {
  if (typeof navigator === 'undefined') return false;

  const langs = navigator.languages || [navigator.language || ''];
  // 所有首选语言都不是中文 → 判定为可能需要翻译
  return !langs.some((l) => l.toLowerCase().startsWith('zh'));
}

export default function BrowserTranslateBanner() {
  const [show, setShow] = useState(false);
  const dismissed = useRef(false);

  useEffect(() => {
    if (!isLikelyEnglishUser()) return;
    if (sessionStorage.getItem('trans-banner-dismissed')) {
      dismissed.current = true;
      return;
    }

    const t = setTimeout(() => {
      if (!dismissed.current) setShow(true);
    }, 2000);

    return () => clearTimeout(t);
  }, []);

  const handleDismiss = useCallback(() => {
    dismissed.current = true;
    setShow(false);
    sessionStorage.setItem('trans-banner-dismissed', '1');
  }, []);

  if (!show) return null;

  return (
    <div className="browser-translate-banner" role="alert">
      <div className="browser-translate-banner__content">
        <span aria-hidden="true" className="browser-translate-banner__icon">🌐</span>
        <div className="browser-translate-banner__text">
          <strong>This page is in Chinese.</strong>{' '}
          Use Chrome/Edge built-in translate: right-click → &quot;Translate to English&quot;.
          <span className="browser-translate-banner__hint">
            当前站点仅中文，Chrome/Edge 可右键一键翻英。
          </span>
        </div>
        <button
          type="button"
          aria-label="Dismiss"
          className="browser-translate-banner__close"
          onClick={handleDismiss}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
