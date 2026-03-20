import { useState } from "react";

export default function TaskForm({ onClose }) {

    const employee = ["Rahul","Shivam","Priya","Sneha"];

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [assignedTo, setAssignedTo] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    const task = { title, desc, assignedTo };
    console.log(task);

    onClose();
  };

  return (
    // Overlay
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">

      {/* Modal */}
      <div className="relative w-100 bg-linear-to-br from-white/20 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6 text-white">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition"
        >
          ✖
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-5 text-center">
          Create New Task ✨
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Title Input */}
          <div>
            <label className="text-sm text-gray-200">Task Title</label>
            <input
              type="text"
              placeholder="Enter task title"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              className="w-full mt-1 px-3 py-2 rounded-lg bg-white/20 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-300"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-sm text-gray-200">Description</label>
            <textarea
              placeholder="Enter task description"
              value={desc}
              onChange={(e)=>setDesc(e.target.value)}
              className="w-full mt-1 px-3 py-2 rounded-lg bg-white/20 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-300"
              rows="3"
              required
            />
          </div>

          {/* Assign */}
          <div>
            <lable className="text-sm text-gray-200">Assing To</lable>
            <select 
            value={assignedTo}
            onChange={(e)=>setAssignedTo(e.target.value)}
            className="w-full mt-1 px-3 py-2 rounded-lg bg-white/20 border border-white/20 focus-outline-none 
                        focus:ring-blue-400 text-white"
            required
            >
                <option value="" className="text-black">
                    Select Employee
                </option>
                {employee.map((emp,index)=>(
                    <option key={index} value={emp} className="text-black">
                    {emp}
                    </option>

                ))}
                
            </select>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full mt-3 bg-blue-500 hover:bg-blue-600 transition py-2 rounded-lg font-medium shadow-md"
          >
            Create Task
          </button>

        </form>
      </div>
    </div>
  );
}