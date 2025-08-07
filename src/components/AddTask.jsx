function AddTask() {
  return (
    <div className="space-y-3 p-6 bg-slate-200 rounded-lg shadow flex flex-col items-center mb-4">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        className="border border-slate-300 rounded-md p-2 w-full"
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border border-slate-300 rounded-md p-2 w-full"
      />
      <button className="bg-slate-400 text-white p-2 rounded-md w-[60%]">
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
