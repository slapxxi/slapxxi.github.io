import './App.css'
import config from './config'

function App() {
  return (
    <div
      className="main grid h-screen grid-cols-[1fr_minmax(auto,1200px)_1fr] 
      content-center gap-x-4 gap-y-4 bg-linear-to-b from-zinc-500/40"
    >
      <h2 className="z-10 col-2 text-4xl text-zinc-950/90">Projects</h2>

      <ul className="template-main z-10 col-2 grid grid-cols-[repeat(auto-fill,minmax(380px,1fr))] self-center">
        {config.projects.map((project) => (
          <li
            key={project.name}
            className="template-main group grid overflow-hidden rounded-lg bg-white shadow"
          >
            <div className="area-main">
              <img
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div
              className="area-main grid content-between gap-1 bg-black/60 
              transition-opacity
              p-4 text-white opacity-0 backdrop-blur-xl group-hover:opacity-100"
            >
              <h2
                className="text-xl font-semibold -translate-y-full 
                delay-100
                opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
              >
                {project.name}
              </h2>
              <div
                className="grid gap-1 opacity-0 group-hover:opacity-100 
                transition-all delay-100 translate-y-full group-hover:translate-y-0"
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
  )
}

export default App
