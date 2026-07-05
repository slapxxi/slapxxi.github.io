import config from './config'

export const Header = () => {
  return (
    <header className="col-[content] py-4">
      <ul className="flex gap-3 flex-wrap items-center justify-between max-w-prose mx-auto">
        {config.links.map((link) => (
          <li key={link.name}>
            <a
              href={link.repo}
              rel="noreferrer"
              target="_blank"
              className="flex items-center gap-1 text-zinc-950/90 hover:text-blue-800/80 text-xs md:text-lg"
            >
              <link.Icon className="size-6" />
              <span>{link.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}
