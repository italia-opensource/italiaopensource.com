// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const env = process.env.ENV;

let url = 'https://italiaopensource.com';

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Italia Open-Source',
  tagline: "The only fully open-source platform that transparently gives voice, and discovers, and explores Italy's tech innovations.",
  url: url,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  organizationName: 'italia-opensource',
  projectName: 'website',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
        label: 'EN',
      },
      it: {
        label: 'IT',
      }
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.7,
          filename: 'sitemap.xml',
        },
        gtag: {
          trackingID: 'G-8XY4RG07ZY',
          anonymizeIP: true,
        },
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/icons/default.png'
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json'
          },
        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      navbar: {
        title: 'Italia Open-Source',
        // logo: {
          // alt: 'Italia Open-Source Logo',
          // src: 'img/logo.svg',
        // },
        items: [
          {
            label: '🚀 Awesome Lists',
            position: 'left',
            items: [
              {
                to: '/opensources',
                label: '💻 Open-Source',
              },
              {
                to: '/communities',
                label: '👥 Communities',
              },
              {
                to: '/startups',
                label: '🏡 Startups',
              },
              {
                to: '/digital-nomads',
                label: '🌍 Digital Nomads',
              }
            ]
          },
          {
            label: '⭐ Partners',
            items: [
              {
                to: '/partners/our-partners',
                label: '💚 Our Partners',
              },
              {
                to: '/partners/how-to-became-partners',
                label: '🤝 How to became Partners',
              },
            ]
          },
          {
            label: '🔥 How to Contribute',
            position: 'left',
            items: [
              {
                to: '/contributors/developers',
                label: '💻 Developers',
              },
              {
                to: '/contributors/communities',
                label: '👥 Communities',
              },
              {
                to: '/contributors/startups',
                label: '🏡 Startups',
              },
              {
                to: '/contributors/digital-nomads',
                label: '🌍 Digital Nomads',
              }
            ]
          },
          {
            label: '📊 Reports',
            position: 'left',
            items: [
              {
                to: '/reports/2024',
                label: '📆 2024',
              },
            ]
          },
          {
            to: '/join-to-our-community',
            label: '❤️ Join our Community',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} Italia Open-Source`,
        links: [
          {
            to: '/',
            label: `Home`,
          },
          {
            to: '/join-to-our-community',
            label: 'Join our Community',
          },
          {
            to: '/partners/our-partners',
            label: `Our Partners`,
          },
          {
            to: 'https://github.com/italia-opensource',
            label: `GitHub`,
          },
          {
            label: 'Privacy Policy',
            to: 'https://www.iubenda.com/privacy-policy/69653207'
          },
          {
            label: 'Cookie Policy',
            to: 'https://www.iubenda.com/privacy-policy/69653207/cookie-policy',
          },
        ]
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;