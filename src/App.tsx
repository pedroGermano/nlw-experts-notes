import logo from "./assets/logo-nlw-expert.svg";
import { NoteCard } from "./components/NoteCard";

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
          <p className="text-sm leading-6 text-slate-40">
            Grave uma nota em áudio será convertida para texto automaticamente.
          </p>
        </div>

        <NoteCard />
      </div>
    </div>
  );
}
