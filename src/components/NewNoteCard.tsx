import * as Dialog from "@radix-ui/react-dialog";
// import { formatDistanceToNow } from "date-fns";
// import { ptBR } from "date-fns/locale";
import { X } from "lucide-react";

export function NewNoteCard() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="flex flex-col gap-3 p-5 text-left rounded-md bg-slate-700">
        <span className="text-sm font-medium text-slate-200">
          Adicionar nota
        </span>
        <p className="text-sm leading-6 text-slate-40">
          Grave uma nota em áudio será convertida para texto automaticamente.
        </p>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed overflow-hidden -translate-x-1/2 -translate-y-1/2 h-[60vh] left-1/2 top-1/2 max-w-[640px] w-full bg-slate-700 rounded-md flex flex-col outline-none">
          <Dialog.DialogClose className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-400">
            <X className="size-5" />
          </Dialog.DialogClose>
          <div className="flex flex-col flex-1 gap-3 p-5">
            <span className="text-sm font-medium text-slate-300">
              Adicionar nota
            </span>

            <p className="text-sm leading-6 text-slate-400">
              Comece a
              <button className="font-medium text-lime-400 hover:underline">
                gravando uma nota
              </button>
              em áudio ou se preferir
              <button className="font-medium text-lime-400 hover:underline">
                utilize apenas texto.
              </button>
            </p>
          </div>
          <button
            type="button"
            className="w-full py-4 text-sm font-medium text-center outline-none bg-lime-400 text-lime-950 hover:bg-lime-500"
          >
            Salvar nota
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
