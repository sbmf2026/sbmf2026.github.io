import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/#about'),
    },
    {
      text: 'Program',
      href: getPermalink('/#program'),
    },
    {
      text: 'Scope & Topics',
      href: getPermalink('/#scope-and-topics'),
    },
    {
      text: 'Speakers',
      href: getPermalink('/#talks'),
    },
    {
      text: 'Dates',
      href: getPermalink('/#important-dates'),
    },
    {
      text: 'Registration',
      href: getPermalink('/#registration'),
    },
    {
      text: 'Committees',
      href: getPermalink('/#committees'),
    },
    {
      text: 'Submission',
      href: getPermalink('/#submission'),
    },
    {
      text: 'Publication',
      href: getPermalink('/#publication'),
    },
  ],
  // Deixando vazio para remover botões extras (o solzinho do tema continua intacto no Header.astro)
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Event Info',
      links: [
        { text: 'About', href: getPermalink('/#about') },
        { text: 'Program', href: getPermalink('/#program') },
        { text: 'Speakers', href: getPermalink('/#talks') },
      ],
    },
    {
      title: 'Participation',
      links: [
        { text: 'Important Dates', href: getPermalink('/#important-dates') },
        { text: 'Registration', href: getPermalink('/#registration') },
        { text: 'Submission', href: getPermalink('/#submission') },
      ],
    },
    {
      title: 'Organization',
      links: [
        { text: 'Committees', href: getPermalink('/#committees') },
        { text: 'SBC', href: 'https://www.sbc.org.br/' },
      ],
    },
  ],
  secondaryLinks: [
    // Você pode adicionar links de política de privacidade aqui se houver
  ],
  socialLinks: [
    // Se o evento tiver redes sociais, coloque os links reais aqui. Caso contrário, pode deixar vazio.
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
  ],
  footNote: `
    29th Brazilian Symposium on Formal Methods (SBMF 2026) · All rights reserved.
  `,
};