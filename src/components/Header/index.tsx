import config from './config'

export const Header = () => {
  return (
    <header className="col-[content] py-4">
      <ul className="flex gap-4 flex-wrap">
        {config.links.map((link) => (
          <li key={link.name}>
            <a
              href={link.repo}
              rel="noreferrer"
              target="_blank"
              className="flex items-center gap-2 text-zinc-950/90 hover:text-blue-800/80 text-sm"
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
