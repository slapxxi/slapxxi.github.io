import './App.css'
import config from './config'

function App() {
  return (
    <div
      className="main grid min-h-screen 
      overflow-hidden
      grid-cols-[1fr_minmax(auto,1200px)_1fr] content-center 
      gap-x-4 gap-y-4 bg-linear-to-b from-zinc-500/40 [grid-template-areas:'main_main_main']"
    >
      <div className="z-10 col-2 grid gap-4">
        <h2 className="text-4xl text-zinc-950/90">Projects</h2>

        <ul className="grid auto-rows-fr grid-cols-[repeat(auto-fill,minmax(max(20vw,300px),1fr))] gap-4 self-center">
          {config.projects.map((project) => (
            <li
              key={project.name}
              className="template-main group grid overflow-hidden rounded-xl bg-white shadow"
            >
              {project.image && (
                <div className="area-main p-2" data-slot="image">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="aspect-video h-full w-full 
                    rounded-lg object-cover transition-all group-hover:scale-110"
                  />
                </div>
              )}

              <div
                className="area-main grid content-between gap-1 bg-linear-to-b from-black/55 to-black/80 p-4
                text-white backdrop-blur-md transition-opacity 
                opacity-0 group-hover:opacity-100"
              >
                <h2 className="text-2xl transition-all delay-100 -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  {project.name}
                </h2>

                <div
                  className="grid gap-1 transition-all delay-100 translate-y-full 
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

      <ul className="col-2 grid mt-8">
        {config.links.map((link) => (
          <li>
            <h2 className="text-black/90 text-3xl">{link.name}</h2>
            <div className="grid">
              <a
                href={link.url}
                rel="noreferrer"
                target="_blank"
                className="link"
              >
                {link.url}
              </a>
              <a
                href={link.repo}
                rel="noreferrer"
                target="_blank"
                className="link"
              >
                Repository
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
