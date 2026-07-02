import kvilonImage from '~/assets/kvilon-screen.jpg'
import calcImage from '~/assets/calc-screen.jpg'
import goodgreenImage from '~/assets/goodgreen-screen.jpg'

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
      name: 'Goodgreen',
      url: 'https://goodgreen.vercel.app/',
      repo: 'https://github.com/slapxxi/goodgreen',
      image: goodgreenImage,
    },
    {
      name: 'Calculator',
      url: 'https://calc-innowise.vercel.app/',
      repo: 'https://github.com/slapxxi/calc-innowise',
      image: calcImage,
    },
    {
      name: 'Youtube Clone',
      url: 'https://github.com/slapxxi/yt-clone-react',
      repo: 'https://github.com/slapxxi/yt-clone-react',
    },
  ],
}

export default config
