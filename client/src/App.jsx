import './App.css'
import {Navbar} from './Components/export.js'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <div className="flex flex-col h-screen w-full">
      <Navbar/>
      <Outlet/>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  )
}

export default App
