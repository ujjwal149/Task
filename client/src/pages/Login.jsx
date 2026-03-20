import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword , setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com") {
      navigate("/admin");
    } else {
      navigate("/employee");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-gray-900">

      {/* Glass Card */}
      <form
        onSubmit={handleSubmit}
        className="w-96 p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl text-white"
      >
        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-6">
          Welcome Back 👋
        </h2>

        {/* Email */}
        <div className="mb-4">
          <label className="text-sm text-gray-300">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full mt-1 px-3 py-2 rounded-lg bg-white/20 border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Password */}
    <div className="mb-6 relative">
        <label className="text-sm text-gray-300">Password</label>
      
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full mt-1 px-3 py-2 pr-10 rounded-lg bg-white/20 border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      
        {/* 👁️ Toggle Button */}
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-9.5 transition duration-200 text-gray-300 hover:text-white"
        >
          {showPassword ? <FaEye/> : <FaEyeSlash/>}
        </button>
    </div>
        

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 transition py-2 rounded-lg font-medium shadow-md"
        >
          Login
        </button>

        {/* Hint */}
        <p className="text-xs text-gray-400 text-center mt-4">
          Use <span className="text-white">admin@gmail.com</span> for Admin
        </p>
      </form>
    </div>
  );
}