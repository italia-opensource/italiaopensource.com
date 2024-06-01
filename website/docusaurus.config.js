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
    locales: ['en'],
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
        disableSwitch: false,
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
                to: '/digital-nomads',
                label: '🌍 Digital Nomads',
              },
              {
                to: '/communities',
                label: '👥 Communities',
              },
              {
                to: '/companies',
                label: '🏡 Companies',
              },
              {
                to: '/coworkings',
                label: '📍 Coworkings',
              }
            ]
          },
          {
            label: '🔥 How to Contribute',
            position: 'left',
            items: [
              {
                to: '/contributors/sponsor',
                label: '⭐ Sponsor',
              },
              {
                to: '/contributors/developers',
                label: '💻 Developers',
              },
              {
                to: '/contributors/digital-nomads',
                label: '🌍 Digital Nomads',
              },
              {
                to: '/contributors/communities',
                label: '👥 Communities',
              },
              {
                to: '/contributors/companies',
                label: '🏡 Companies',
              }
            ]
          },
          {
            label: '📊 Reports',
            position: 'left',
            items: [
              {
                to: 'https://github.com/italia-opensource/state-of-open-source-reports/tree/main/reports/2024',
                label: '2024',
              },
            ]
          },
          {
            to: '/sponsor',
            label: '⭐ Our Sponsor',
          },
          {
            to: '/team',
            label: '💎 Team',
          },
          {
            to: 'https://mailchi.mp/8933ba69ba9c/beta-version',
            label: '🌱 Beta Version',
            position: 'right',
          },
          {
            to: 'https://opencollective.com/italia-open-source/donate?interval=oneTime&amount=3&contributeAs=me',
            label: '❤️ Donate',
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
            to: '/sponsor',
            label: `Our Sponsor`,
          },
          {
            to: 'https://github.com/italia-opensource',
            label: `GitHub`,
          },
          {
            to: 'https://www.linkedin.com/company/italia-open-source',
            label: 'Community',
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