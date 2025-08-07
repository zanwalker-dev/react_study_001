import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

const TaskPage = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-slate-800 p-6 flex justify-center">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center items-center relative">
          <button
            // poderia ser navigate(-1) oque tiraria um parametro e voltaria a ser "/""
            onClick={() => navigate("/")}
            className="bg-slate-300 text-slate-700 p-1 rounded-md absolute left-0 top-0 bottom-0"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes da tarefa:
          </h1>
        </div>
        <div className="bg-slate-400 p-4 rounded-md">
          <h2 className="text-xl text-slate-900 font-bold"> {title} </h2>
          <p className="text-slate-700"> {description} </p>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
