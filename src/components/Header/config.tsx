import GithubIcon from '~/assets/github-icon.svg?react'
import LinkedInIcon from '~/assets/linkedin-icon.svg?react'
import TelegramIcon from '~/assets/telegram-icon.svg?react'
import TwitterIcon from '~/assets/twitter-icon.svg?react'
import cvIcon from '~/assets/cv-icon.svg?react'

const config = {
  links: [
    {
      Icon: GithubIcon,
      name: 'Github',
      repo: 'https://github.com/slapxxi',
    },
    {
      Icon: TwitterIcon,
      name: 'X',
      repo: 'https://x.com/slapxxi',
    },
    {
      Icon: LinkedInIcon,
      name: 'LinkedIn',
      repo: 'https://www.linkedin.com/in/%D0%B2%D1%8F%D1%87%D0%B5%D1%81%D0%BB%D0%B0%D0%B2-%D0%BF%D0%B0%D0%B2%D0%BB%D1%83%D1%82%D0%B8%D0%BD-9417a2355/',
    },
    {
      Icon: TelegramIcon,
      name: 'Telegram',
      repo: 'https://t.me/slapxxi',
    },
    {
      Icon: cvIcon,
      name: 'CV',
      repo: 'https://slapxxi.github.io/cv/',
    },
  ],
}

export default config
