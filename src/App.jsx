import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Estudar react routers",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Inglês",
      description: "Estudar inglês para fins profissionais",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Beber água",
      description: "Manter o rim saudável",
      isCompleted: false,
    },
  ]);

  return (
    <div className="w-screen h-screen bg-slate-800 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciamento de Tarefas
        </h1>
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
