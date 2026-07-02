import kvilonImage from '~/assets/kvilon-screen.jpg'

type Config = {
  name: string
  email: string
  github: string
  twitter: string
  projects: {
    name: string
    url: string
    repo: string
    image: string
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
  ],
}

export default config
