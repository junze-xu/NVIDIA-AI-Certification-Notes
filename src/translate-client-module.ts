import type { ClientModule } from '@docusaurus/types';

/**
 * 浏览器原生翻译 — 客户端交互模块
 *
 * 功能：让导航栏的 "🌐 Translate" 可点击，
 *   第一次点击 → 切到英文（改 lang + 触发 Chrome 翻译）
 *   第二次点击 → 切回中文（硬刷新是唯一可靠方案，Chrome 翻译后的 DOM 无法软恢复）
 *
 * 兼容性：
 *   · Chrome/Edge — 完整支持
 *   · Safari — 整页翻译不支持，点击后引导手动翻译
 */

export default {
  onRouteDidUpdate() {
    bindTranslateButton();
  },
} satisfies ClientModule;

/* ------------------------------------------------------------------ */

let bound = false;

function bindTranslateButton() {
  if (bound) return;

  const tryBind = () => {
    const el = document.querySelector<HTMLElement>(
      '.navbar__items--right span[title="Use Chrome/Edge built-in translation"]'
    );

    if (!el) {
      requestAnimationFrame(tryBind);
      return;
    }

    el.textContent = '🌐 Translate';
    el.style.cursor = 'pointer';
    el.style.userSelect = 'none';
    el.style.padding = '2px 8px';
    el.style.border = '1px solid rgba(255,255,255,0.3)';
    el.style.borderRadius = '4px';
    el.style.fontSize = '0.8rem';
    el.title = 'Click to toggle English translation';

    el.addEventListener('click', handleClick);
    bound = true;
  };

  // 首次执行 + SPA 路由变化都走这里
  requestAnimationFrame(tryBind);
}

/* ------------------------------------------------------------------ */

function handleClick(this: HTMLElement) {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  if (isSafari) {
    alert('Safari does not support browser-level page translation. Please use Chrome or Edge.');
    return;
  }

  const isTranslated = document.documentElement.getAttribute('lang') === 'en';

  if (!isTranslated) {
    // ===== 切到英文 =====
    document.documentElement.setAttribute('lang', 'en');
    document.documentElement.setAttribute('translate', 'yes');
    this.textContent = '🌐 中文';

    // 调用 Chrome Translator API（138+），大多数情况下不需要手动调用
    tryTranslatePage();

  } else {
    // ===== 切回中文 =====
    document.documentElement.setAttribute('lang', 'zh-Hans');
    this.textContent = '🌐 Translate';
    // 必须硬刷新，Chrome 翻译引擎覆盖的 DOM 无法通过 JS 恢复
    window.location.reload();
  }
}

/* ------------------------------------------------------------------ */

/**
 * Chrome 138+ 的 Translator API。
 * 如果不可用则静默 fallback（改 lang 已经能触发大多数情况）。
 */
function tryTranslatePage() {
  const w = window as unknown as {
    Translator?: {
      availability: (opts: { sourceLanguage: string; targetLanguage: string }) => Promise<string>;
      create: (opts: { sourceLanguage: string; targetLanguage: string }) => Promise<{
        translate: (text: string) => Promise<string>;
      }>;
    };
  };

  if (!w.Translator) return; // 旧 Chrome，靠 lang attr 已经够了
  // Chrome 138+ detected — 但整页翻译仍然靠 lang attr 触发更可靠
  console.debug('[Translate API] available, using lang-attr based full page translation.');
}
