const social = {
  instagram: "pankaj_patel",
  twitter: "@patel_pankaj_",
  github: "pankajpatel",
  linkedin: "pankajpatel1",
};

module.exports = {
  // Name of your site. Can be the name of a brand, or your personal name.
  title: "Pankaj Patel",
  subTitle: "Frontend Engineer",
  // What's the purpose of this website? What can we expect from it?
  description: `Pankaj Patel is Front End Developer. View Pankaj&#39;s Resume, Biography and more. Get in touch today.`,
  // Your legal name.
  legalName: "Pankaj Patel",
  // URL to this website. If you bought `www.domain.com`, then it will be `www.domain.com`.
  url: "https://pankaj.pro",
  // Favicon that will display on browsers.
  logo: "src/images/logo.png",
  // Who made this website?
  author: "Pankaj patel",
  // What's the website of the author?
  authorUrl: "https://pankaj.pro",
  social: social,
  socialLinks: {
    instagram: `https://www.instagram.com/${social.instagram}`,
    twitter: `https://twitter.com/${social.twitter.replace("@", "")}`,
    github: `https://github.com/${social.github}`,
    linkedin: `https://linkedin.com/in/${social.linkedin}`,
  },
  googleAnalyticsId: "UA-37089202-1",
  themeColor: "#fff",
  backgroundColor: "#333",
  address: {
    city: "Berlin",
    country: "Germany",
  },
  contact: {
    email: "hello@pankaj.pro",
  },
  foundingDate: "2020",
};
