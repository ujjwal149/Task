import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskList() {

  const { tasks,setTasks } = useContext(TaskContext);

  const deleteTask = (id) => {
    const updateTasks = tasks.filter((task) => task.id !== id);
    setTasks(updateTasks);
  }


  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex">

      {/* Sidebar */}
      

      {/* Content */}
      <div className="flex-1 p-6">

        <h1 className="text-3xl font-bold mb-8">
          All Tasks 📋
        </h1>

        {tasks.length === 0 ? (
          <p className="text-gray-400">No tasks created yet.</p>
        ) : (
          <div className="grid grid-cols-2 gap-6">

            {tasks.map((task) => (
              <div
                key={task.id}
                className="bg-white/10 p-5 rounded-2xl border border-white/10 backdrop-blur-md shadow-md"
              >
                <h3 className="text-lg font-semibold mb-2">
                  {task.title}
                </h3>

                <p className="text-sm text-gray-300 mb-3">
                  {task.desc}
                </p>

                <p className="text-sm mb-2">
                  Assigned to: <span className="font-medium">{task.assignedTo}</span>
                </p>

                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    task.status === "Completed"
                      ? "bg-green-500"
                      : "bg-yellow-500"
                  }`}
                >
                  {task.status}
                </span>

                <button
                onClick={() => deleteTask(task.id)}
                className="mt-3 bg-red-500 px-3 py-1 rounded-lg text-sm hover:bg-red-600"
                >
                  Delete
                </button>

              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  );
}