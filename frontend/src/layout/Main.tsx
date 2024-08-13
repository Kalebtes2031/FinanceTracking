import { Outlet } from "react-router-dom"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"

export const Main = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
