import PropTypes from "prop-types";

function Tasks(props) {
  console.log(props);
  return (
    <div>
      <ul className="space-y-3 p-6 bg-slate-200 rounded-lg shadow">
        {props.tasks.map((task) => (
          <li key={task.id} className="bg-slate-400 text-white p-2 rounded-md">
            {task.title}
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
