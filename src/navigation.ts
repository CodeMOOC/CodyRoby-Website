import { getPermalink, getBlogPermalink, getAsset, getHomePermalink } from './utils/permalinks';

const basePath = '/giochi-unplugged';

export const headerData = {
  
  links: [
    {
      text: 'Home',
      href: getPermalink(),
    },
    {
      text: 'Giochi Unplugged',
      links: [
        {
          text: 'CodyRoby',
          href: getPermalink('/codyroby'),
        },
        {
          text: 'CodyColor',
          href: getPermalink(`${basePath}/codycolor`),
        },
        {
          text: 'CodyFeet',
          href: getPermalink(`${basePath}/codyfeet`),
        },
        {
          text: 'CodyMaze',
          href: getPermalink(`${basePath}/codymaze`),
        },
        {
          text: 'CodeHunting Games',
          href: 'https://codehunting.games/it/introduzione',
          target: '_blank',
        },
        {
          text: 'CodyWay',
          href: getPermalink(`${basePath}/codyway`),
        },
      ],
    },
    {
      text: 'CodyRoby Academy',
      href: 'https://academy.codyroby.it/',
      target: '_blank',
    },
    {
      text: 'Dove acquistare',
      href: getPermalink('/dove-acquistare'),
    },
    {
      text: 'Chi siamo',
      href: getPermalink('/about'),
    },
    {
      text: 'Contatti',
      href: getPermalink('/contact'),
    },
  ],
  /*actions: [{text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank'}],*/
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};