export function NoteCard() {
  return (
    <button className="relative p-5 space-y-3 overflow-hidden text-left rounded-md outline-none bg-slate-800 hover:ring-2 hover:ring-slate-600 hover:cursor-pointer focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-300">há 2 dias</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
        totam nemo. Distinctio optio unde fuga, delectus eius rerum ratione.
        Saepe pariatur reiciendis numquam, itaque repudiandae quis sed. Itaque,
        ex atque?
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 point-events-none" />
    </button>
  );
}
