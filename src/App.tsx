import { Header } from '~/components'
import './App.css'
import config from './config'

function App() {
  return (
    <div
      className="main grid min-h-screen z-10 overflow-hidden
      grid-cols-[1fr_[content-start]minmax(auto,1280px)[content-end]_1fr] content-center 
      gap-x-4 gap-y-4 bg-linear-to-b from-zinc-500/40 [grid-template-areas:'main_main_main']"
    >
      <Header />

      <div className="col-2 grid gap-4 my-10">
        <h2 className="text-4xl text-zinc-950/90">Projects</h2>

        <ul className="grid auto-rows-fr grid-cols-[repeat(auto-fill,minmax(max(20vw,320px),1fr))] gap-4 self-center">
          {config.projects.map((project) => (
            <li
              key={project.name}
              className="template-main group grid overflow-hidden rounded-xl bg-white shadow"
              tabIndex={0}
            >
              {project.image && (
                <div className="area-main p-2" data-slot="image">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="aspect-video h-full w-full 
                    group-focus:scale-110
                    rounded-lg object-cover transition-all group-hover:scale-110"
                  />
                </div>
              )}

              <div
                className="area-main grid content-between gap-1 bg-linear-to-b from-black/55 to-black/80 p-4
                text-white backdrop-blur-md transition-opacity 
                group-focus:opacity-100
                opacity-0 group-hover:opacity-100"
              >
                <h2
                  className="text-2xl transition-all delay-100 -translate-y-full 
                  group-focus:opacity-100 group-focus:translate-y-0
                  opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  {project.name}
                </h2>

                <div
                  className="grid gap-1 transition-all delay-100 translate-y-full 
                  group-focus:opacity-100 group-focus:translate-y-0
                  opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <a
                    href={project.url}
                    rel="noreferrer"
                    target="_blank"
                    className="link"
                  >
                    {project.url}
                  </a>
                  <a
                    href={project.repo}
                    rel="noreferrer"
                    target="_blank"
                    className="link"
                  >
                    Repository
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <ul className="col-2 grid gap-4 my-10">
        {config.links.map((link) => (
          <li key={link.name}>
            <h2 className="text-black/90 text-3xl">{link.name}</h2>
            <div className="grid">
              <a
                href={link.repo}
                rel="noreferrer"
                target="_blank"
                className="link"
              >
                {link.repo}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
