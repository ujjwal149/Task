import React from "react";

export default function Employee() {

  // Dummy tasks (we’ll connect real data later)
  const tasks = [
    {
      id: 1,
      title: "Fix Login Bug",
      desc: "Resolve authentication issue",
      status: "Pending"
    },
    {
      id: 2,
      title: "Update Dashboard UI",
      desc: "Improve layout and design",
      status: "Completed"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex">

      {/* Sidebar */}
      <div className="w-20 flex flex-col items-center gap-6 border-r border-white/10 py-6">
        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">🏠</div>
        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">📋</div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">

        {/* Header */}
        <h2 className="text-2xl font-semibold mb-2">
          Welcome Back 👋
        </h2>

        <h1 className="text-3xl font-bold mb-8">
          Your Tasks
        </h1>

        {/* Task List */}
        {tasks.length === 0 ? (
          <p className="text-gray-400">No tasks assigned yet.</p>
        ) : (
          <div className="grid grid-cols-2 gap-6">

            {tasks.map((task) => (
              <div
                key={task.id}
                className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-md hover:scale-105 transition"
              >
                <h3 className="text-lg font-semibold mb-2">
                  {task.title}
                </h3>

                <p className="text-sm text-gray-300 mb-4">
                  {task.desc}
                </p>

                {/* Status */}
                <span className={`text-xs px-3 py-1 rounded-full ${
                  task.status === "Completed"
                    ? "bg-green-500"
                    : "bg-yellow-500"
                }`}>
                  {task.status}
                </span>

              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}