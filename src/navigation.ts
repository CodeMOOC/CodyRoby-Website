import { getPermalink, getAsset } from './utils/permalinks';

// const basePath = import.meta.env.REPO_BASE;
const basePath = '/';
const metodiPath = `${basePath}/metodi`;
const appPath = `${basePath}/risorse`;
const otherMethods = '/altri-metodi';
const pubAndProduct = `${basePath}/prodotti-e-pubblicazioni`;

const currentYear = new Date().getFullYear();

export const headerData = {
  links: [
    // {
    //   text: 'Home',
    //   href: getPermalink(basePath),
    // },
    {
      text: 'Metodi',
      links: [
        {
          text: 'CodyRoby',
          href: getPermalink(`${metodiPath}/codyroby`),
        },
        {
          text: 'CodyColor',
          href: getPermalink(`${metodiPath}/codycolor`),
        },
        {
          text: 'CodyFeet',
          href: getPermalink(`${metodiPath}/codyfeet`),
        },
        {
          text: 'Altri metodi',
          links: [
            {
              text: 'CodyWay',
              href: getPermalink(`${metodiPath}${otherMethods}/codyway`),
            },
            {
              text: 'Dress Code',
              href: getPermalink(`${metodiPath}${otherMethods}/dresscode`),
            },
          ],
        },
      ],
    },
    {
      text: 'Risorse',
      links: [
        {
          text: 'CodyMaze',
          href: getPermalink(`${appPath}/codymaze`),
        },
        {
          text: 'CodeHunting Games',
          href: 'https://codehunting.games/it/introduzione',
          target: '_blank',
        },
        {
          text: 'CodyColor Game',
          href: getPermalink(`${appPath}/codycolor-game`),
        },
        {
          text: 'CodyTrip',
          href: getPermalink(`${appPath}/codytrip`),
        },
        {
          text: 'Coding in famiglia',
          href: getPermalink(`${appPath}/coding-in-famiglia`),
        },
        {
          text: 'Progetti Scratch',
          href: getPermalink(`${appPath}/progetti-scratch`),
        },
        {
          text: 'Videolezioni',
          href: getPermalink(`${appPath}/videolezioni`),
        },
        {
          text: 'Attività in diretta',
          href: getPermalink(`${appPath}/attivita-in-diretta`),
        },
      ],
    },
    { text: 'Community', href: getPermalink(`${basePath}/community`) },
    {
      text: 'Academy',
      href: 'https://academy.codyroby.it/',
      target: '_blank',
    },
    {
      text: 'Prodotti e Pubblicazioni',
      links: [
        { text: 'Prodotti', href: getPermalink(`${pubAndProduct}/prodotti`) },
        { text: 'Pubblicazioni', href: getPermalink(`${pubAndProduct}/pubblicazioni`) },
      ],
    },
  ],
  /*actions: [{text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank'}],*/
};

export const footerData = {
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/codemooc/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/groups/CodeMOOC/' },
    {
      ariaLabel: 'YouTube',
      icon: 'tabler:brand-youtube',
      href: 'https://www.youtube.com/@CodeMOOC',
    },
  ],
  footNote: `
    
    <p>&copy; ${currentYear} Alessandro Bogliolo. Tutti i diritti riservati.</p>

  `,
};
