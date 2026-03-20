import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from  "./pages/Login"
import Admin from "./pages/Admin"
import Employee from "./pages/Employee"
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/employee" element={<Employee />} />

    </Routes>
    </BrowserRouter>
    
  )
}

export default App
