import logo from "./assets/logo-nlw-expert.svg";

export function App() {
  return (
    <div className="max-w-6xl mx-auto my-12 space-y-6">
      <img src={logo} alt="logo" />

      <form className="w-full">
        <input
          type="text"
          placeholder="Busque as suas notas..."
          className="w-full text-3xl font-semibold tracking-tight bg-transparent outline-none placeholder:text-slate-500"
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <div className="p-5 space-y-3 rounded-md bg-slate-700">
          <span className="text-sm font-medium text-slate-200">
            Adicionar nota
          </span>
          <p className="text-sm leading-6 text-slate-400">
            Grave uma nota em áudio que será convertida para texto
            automaticamente.
          </p>
        </div>
        <div className="relative p-5 space-y-3 overflow-hidden rounded-md bg-slate-800">
          <span className="text-sm font-medium text-slate-300">há 2 dias</span>
          <p className="text-sm leading-6 text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, totam nemo. Distinctio optio unde fuga, delectus eius
            rerum ratione. Saepe pariatur reiciendis numquam, itaque repudiandae
            quis sed. Itaque, ex atque?
          </p>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0" />
        </div>

        <div className="relative p-5 space-y-3 overflow-hidden rounded-md bg-slate-800">
          <span className="text-sm font-medium text-slate-300">há 4 dias</span>
          <p className="text-sm leading-6 text-slate-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
            eius fuga officiis autem asperiores cumque, fugiat error quae vel
            reiciendis voluptatum, voluptatibus obcaecati aliquam similique,
            ipsa dolorum mollitia? Ad, architecto.
          </p>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0" />
        </div>
      </div>
    </div>
  );
}
