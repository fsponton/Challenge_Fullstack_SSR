import { Routes, Route } from "react-router-dom"
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
