/* eslint-disable react/prop-types */
import { ChevronRightIcon, TrashIcon } from "lucide-react";
import PropTypes from "prop-types";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  return (
    <div>
      <ul className="space-y-3 p-6 bg-slate-200 rounded-lg shadow">
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`bg-slate-400 text-left text-white p-2 rounded-md w-full ${
                task.isCompleted && "line-through"
              }`}
            >
              {task.title}
            </button>
            <button className="bg-slate-400 text-white p-2 rounded-md">
              <ChevronRightIcon />
            </button>
            <button
              onClick={() => onDeleteTaskClick(task.id)}
              className="bg-slate-400 text-white p-2 rounded-md"
            >
              <TrashIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Tasks;
