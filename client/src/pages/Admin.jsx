import { useState } from "react";
import TaskForm from "../components/TaskForm";

export default function Admin() {

  const [showForm, setShowForm] = useState(false);

  return (
    <div>

      {/* Main Container */}
      <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 flex text-white">

        {/* Sidebar */}
        <div className="w-20 flex flex-col items-center gap-6 border-r border-white/10 py-6">
          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">🏠</div>
          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">📋</div>
          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">⚙️</div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6">

          {/* Header */}
          <h2 className="text-2xl font-semibold mb-10">
            Good afternoon, Admin 👋
          </h2>

          <h1 className="text-3xl font-bold mb-8">
            Complete your setup
          </h1>

          {/* Cards */}
          <div className="grid grid-cols-2 gap-6">

            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10">
              <h3 className="text-lg font-semibold mb-2 text-white">Create Tasks</h3>
              <p className="text-sm text-gray-300 mb-4">
                Assign tasks to employees and manage workflow.
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200"
              >
                CREATE TASK
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10">
              <h3 className="text-lg font-semibold mb-2 text-white">Manage Employees</h3>
              <p className="text-sm text-gray-300 mb-4">
                View and manage employee task progress.
              </p>
              <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200">
                VIEW
              </button>
            </div>

          </div>

          {/* Bottom Section */}
          <div className="mt-8 w-3xl bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
            <h3 className="text-lg font-semibold mb-2 text-white">Quick Actions</h3>
            <ul className="space-y-2 text-gray-300">
              <li>🎤 Voice Commands</li>
              <li>⚡ Quick Task Assignment</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Modal */}
      {showForm && (
        <TaskForm onClose={() => setShowForm(false)} />
      )}

    </div>
  );
}