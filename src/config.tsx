import analyticsImage from '~/assets/analytics-screen.jpg'
import calcImage from '~/assets/calc-screen.jpg'
import canvaImage from '~/assets/canva-screen.jpg'
import etmImage from '~/assets/enterprise-task-manager-screen.jpg'
import ffgImage from '~/assets/ffg-screen.jpg'
import goodgreenImage from '~/assets/goodgreen-screen.jpg'
import kvilonImage from '~/assets/kvilon-screen.jpg'
import matroskinImage from '~/assets/matroskin-screen.jpg'
import rentizImage from '~/assets/rentiz-screen.jpg'
import xlombardImage from '~/assets/xlombard-screen.jpg'

type Config = {
  name: string
  email: string
  github: string
  twitter: string
  projects: {
    name: string
    url: string
    repo: string
    image?: string
  }[]
  links: {
    name: string
    repo: string
  }[]
}

const config: Config = {
  name: 'Slava',
  email: 'slava@slap.dev',
  github: 'https://github.com/slapxxi',
  twitter: 'https://twitter.com/slava',
  projects: [
    {
      name: 'Kvilon',
      url: 'https://slapxxi.github.io/kvilon',
      repo: 'https://github.com/slapxxi/kvilon',
      image: kvilonImage,
    },
    {
      name: 'Flower Fracht Karaganda',
      url: 'https://flower-fracht-karaganda.vercel.app/',
      repo: 'https://github.com/slapxxi/kvilon',
      image: ffgImage,
    },
    {
      name: 'Matroskin',
      url: 'https://matroskin.vercel.app/',
      repo: 'https://github.com/slapxxi/matroskin',
      image: matroskinImage,
    },
    {
      name: 'XLombard',
      url: 'https://xlombard.vercel.app/',
      repo: 'https://github.com/slapxxi/xlombard',
      image: xlombardImage,
    },
    {
      name: 'Goodgreen',
      url: 'https://goodgreen.vercel.app/',
      repo: 'https://github.com/slapxxi/goodgreen',
      image: goodgreenImage,
    },
    {
      name: 'Rentiz',
      url: 'https://slapxxi.github.io/rentiz',
      repo: 'https://github.com/slapxxi/rentiz',
      image: rentizImage,
    },
    {
      name: 'Canva',
      url: 'https://slapxxi.github.io/canva',
      repo: 'https://github.com/slapxxi/canva',
      image: canvaImage,
    },
    {
      name: 'Analytics',
      url: 'https://slapxxi.github.io/analytics',
      repo: 'https://github.com/slapxxi/analytics',
      image: analyticsImage,
    },
    {
      name: 'Task Manager',
      url: 'https://slapxxi.github.io/enterprise-task-manager',
      repo: 'https://github.com/slapxxi/enterprise-task-manager',
      image: etmImage,
    },
    {
      name: 'Calculator',
      url: 'https://calc-innowise.vercel.app/',
      repo: 'https://github.com/slapxxi/calc-innowise',
      image: calcImage,
    },
  ],
  links: [
    {
      name: 'CV Management App',
      repo: 'https://github.com/slapxxi/cv-innowise',
    },
    {
      name: 'StackOverflow Clone',
      repo: 'https://github.com/slapxxi/codelang',
    },
    {
      name: 'Youtube Clone',
      repo: 'https://github.com/slapxxi/yt-clone-react',
    },
    {
      name: 'CSS Layouts',
      repo: 'https://github.com/slapxxi/css-layouts',
    },
  ],
}

export default config
