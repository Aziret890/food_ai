import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import { Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../typeOfStates/RootState"
import Cart from "../components/header/cart/Cart"

const Layout = () => {
    const cart = useSelector((state: RootState) => state.cart.cart)
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    return (
        <div className="layout">
            <Header />
            {cart && <Cart />}
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
