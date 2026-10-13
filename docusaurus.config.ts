import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'NVIDIA 认证备考站',
  tagline: 'NCA + NCP 十门认证 · 中英双语 · 非官方',
  favicon: 'img/favicon.ico',
  url: 'https://junze-xu.github.io',
  baseUrl: '/NVIDIA-AI-Certification-Notes/',
  organizationName: 'junze-xu',
  projectName: 'NVIDIA-AI-Certification-Notes',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  clientModules: ['./src/translate-client-module.ts'],
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      'zh-Hans': {label: '中文', direction: 'ltr', htmlLang: 'zh-Hans'},
      en: {label: 'English', direction: 'ltr', htmlLang: 'en'},
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/junze-xu/NVIDIA-AI-Certification-Notes/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/card.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'NVIDIA 认证备考站',
      logo: {alt: 'Logo', src: 'img/logo.svg'},
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'ncaSidebar',
          position: 'left',
          label: 'NCA 初级',
        },
        {
          type: 'docSidebar',
          sidebarId: 'ncpSidebar',
          position: 'left',
          label: 'NCP 中级',
        },
        {href: '/about', label: '关于', position: 'left'},
        {
          type: 'html',
          position: 'right',
          value: '<span title="Use Chrome/Edge built-in translation" style="font-size:0.8rem;opacity:0.7;cursor:help;">🌐 EN via browser</span>',
        },
        {
          href: 'https://github.com/junze-xu/NVIDIA-AI-Certification-Notes',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          label: 'NVIDIA 官方认证',
          href: 'https://www.nvidia.cn/training/certification/',
        },
        {
          label: 'GitHub 仓库',
          href: 'https://github.com/junze-xu/NVIDIA-AI-Certification-Notes',
        },
      ],
      copyright: `© ${new Date().getFullYear()} JunzeXu · CC BY-NC-SA 4.0 · 非 NVIDIA 官方`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
