export function NewNoteCard() {
  return (
      <div className="p-5 space-y-3 rounded-md bg-slate-700">
        <span className="text-sm font-medium text-slate-200">
          Adicionar nota
        </span>
        <p className="text-sm leading-6 text-slate-40">
          Grave uma nota em áudio será convertida para texto automaticamente.
        </p>
      </div>
  );
}
