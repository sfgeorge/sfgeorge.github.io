module.exports = {
  siteBaseURL: 'https://ehlo.mx',
  manifestName: 'Stephen George : Portfolio',
  manifestShortName: 'S. George', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  heading: 'Stephen George',
  subHeading: '[Engineering Manager and Techie Extraordinaire]',

  // social
  socialLinks: [
    {
      icon: 'fa-researchgate',
      name: 'ResearchGate',
      url: 'https://www.researchgate.net/profile/Stephen-George-8',
    },
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/sfgeorge',
    },
    {
      icon: 'fa-linkedin-in',
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/sfgeorge/',
    },
/* .fa-linux .fa-amazon .fa-asterisk .fa-aws .fa-compass .fa-dev .fa-docker .fa-git .fa-html5 .fa-jedi .fa-jedi-order .fa-jira .fa-laptop .fa-laptop-medical .fa-mandalorian .fa-meetup  .fa-music .fa-node .fa-node-js .fa-npm .fa-phoenix-framework  .fa-phoenix-squadron .fa-phoenix-phone .fa-php .fa-poop .fa-portrait .fa-project-diagram .fa-product-hunt .fa-print .fa-raspberry-pi .fa-react  .fa-readme .fa-redhat .fa-centos .fa-reply-all .fa-sd-card .fa-share .fa-sim-card .fa-slack .fa-snowflake .fa-spa .fa-wrench */
  ],
  email: null,
  phone: null,
  address: 'Northern Virginia, USA',
  linkedin: 'https://www.linkedin.com/in/sfgeorge/',

  metrics: {
    trackingIds: [
      "G-E34ZY6FS3P",
    ],
  },

  openGraph: {
    description: {
      line1: "I foster project success through team development and iterative improvement.",
      line2: "My experience in team building and development includes recruitment, interviewing, onboarding, mentoring, ownership, goal-setting, engagement and career growth.",
    },
    featureImage: {
      path:   '/og-image/index.png',
      width:  1200,
      height: 627,
    },
  },
};
