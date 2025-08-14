import "./index.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"

function Root() {
    return <>
        <Header />
        <Outlet />  {/* Child routes will be rendered here */}
        <Footer />

    </>
}

export default Root

// <Outlet /> is a placeholder component that tells React Router where to render nested child routes inside a parent route component.