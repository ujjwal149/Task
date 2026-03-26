import { Outlet, useNavigate,useLocation } from "react-router-dom";
import { HiHome, HiClipboardList } from "react-icons/hi";

export default function AdminLayout() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex">

      {/* Sidebar */}
      <div className="w-20 flex flex-col items-center gap-6 border-r border-white/10 py-6">

        {/* Dashboard */}
        <div className="mb-6 text-center text-sm text-gray-300">
          👤 {user?.email}
        </div>
        <div 
          onClick={() => navigate("/admin")}
          className={`w-10 h-10  rounded-full flex items-center justify-center cursor-pointer 
                      ${location.pathname === '/admin'
                        ?"bg-blue-500 text-white"
                        :"bg-white/10 hover:bg-white/20"
                      }
                    `}
        >
          <HiHome size={22} />
        </div>

        {/* Tasks */}
        <div 
          onClick={() => navigate("/admin/tasks")}
          className={`w-10 h-10  rounded-full flex items-center justify-center cursor-pointer
                      ${location.pathname.startsWith("/admin/tasks")
                        ?"bg-blue-500 text-white"
                        :"bg-white/10 hover:bg-white/20"
                      }
                    `}
        >
          <HiClipboardList size={22}/>
        </div>

      </div>

      {/* Dynamic Content */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>

    </div>
  );
}