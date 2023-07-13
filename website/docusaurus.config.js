/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

const siteConfig = {
  title: 'Adsmachine Group',
  tagline: 'Агенство контекстной рекламы и веб-аналитики',
  url: 'https://adsmachine.ru',
  baseUrl: '/',
  projectName: 'create-react-app',
  organizationName: 'Adsmachine',
  favicon: 'img/favicon/favicon.ico',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../docs',
          sidebarPath: require.resolve('./sidebars.json'),
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/logo-og.png',
    announcementBar: {
      id: 'support',
      content:
        '<a target="_blank" rel="noopener noreferrer" \
        href=""> </a>',
      backgroundColor: '#20232a',
      textColor: '#fff',
      isCloseable: false,
    },
    algolia: {
      appId: 'AUJYIQ70HN',
      apiKey: '25243dbf9049cf036e87f64b361bd2b9',
      indexName: 'create-react-app',
    },
    navbar: {
      title: 'Трафик и конверсии',
      logo: {
        alt: 'Create React App Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: 'docs/b2b', label: 'Кейсы', position: 'right' },
        {
          to: 'docs/b2b',
          label: 'Контакты',
          position: 'right',
        },
        {
          to: 'docs/b2b',
          label: 'Стратегия',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'B2B',
              to: 'docs/b2b',
            },
            {
              label: 'Learn React',
              href: 'https://reactjs.org/',
            },
          ],
        },
        {
          title: 'Услуги',
          items: [
            {
              label: 'Контекстная реклама',
              href: 'https://stackoverflow.com/questions/tagged/create-react-app',
            },
            {
              label: 'Аудит и аналитика',
              href: 'https://github.com/facebook/create-react-app/discussions',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Telegramm',
              href: 'https://www.github.com/facebook/create-react-app',
            },
          ],
        },
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'img/oss_logo.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} 	&#10084; Adsmachine, Group.`,
    },
  },
};

module.exports = siteConfig;
