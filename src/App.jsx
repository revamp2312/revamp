import Footer from "./components/Footer"
import Header from "./components/Header"
import "./App.css"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
     <Header />
     <Outlet />
    </>
  )
}

export default App
