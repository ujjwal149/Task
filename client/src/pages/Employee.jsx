import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function Employee() {

  const { tasks, setTasks } = useContext(TaskContext);

  const markComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, status: "Completed" } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="w-full">

      {/* Header */}
      <h2 className="text-2xl font-semibold mb-2 text-white">
        Welcome Back 👋
      </h2>

      <h1 className="text-3xl font-bold mb-8 text-white">
        Your Tasks
      </h1>

      {/* Task List */}
      {tasks.length === 0 ? (
        <p className="text-gray-400">No tasks assigned yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-md hover:scale-[1.02] transition"
            >
              <h3 className="text-lg font-semibold mb-2 text-white">
                {task.title}
              </h3>

              <p className="text-sm text-gray-300 mb-4">
                {task.desc}
              </p>

              {/* Bottom Section */}
              <div className="flex items-center justify-between">

                {/* Status */}
                <span className={`text-xs px-3 py-1 rounded-full ${
                  task.status === "Completed"
                    ? "bg-green-500"
                    : "bg-yellow-500"
                }`}>
                  {task.status}
                </span>

                {/* Button */}
                {task.status !== "Completed" && (
                  <button
                    onClick={() => markComplete(task.id)}
                    className="bg-green-500 px-3 py-1 rounded-lg text-sm hover:bg-green-600 transition"
                  >
                    Complete
                  </button>
                )}

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}