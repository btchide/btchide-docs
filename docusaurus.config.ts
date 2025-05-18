import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Docusaurus configuration for BTCHide VPN documentation
const config: Config = {
  title: 'BTCHide VPN',
  tagline: 'Анонимность. Безопасность. Свобода.',
  favicon: 'img/favicon.png',

  url: 'https://btchide.com',
  baseUrl: '/',

  organizationName: 'btchide',
  projectName: 'btchide-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/btchide/btchide-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'BTCHide',
      logo: {
        alt: 'BTCHide Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://status.btchide.com',
          label: 'Статус серверов',
          position: 'right',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Документация',
        },
        {
          href: 'https://t.me/vgutetris_bot',
          position: 'right',
          className: 'navbar-telegram-link',
          label: 'Поддержка',
          'aria-label': 'Поддержка в Telegram',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
