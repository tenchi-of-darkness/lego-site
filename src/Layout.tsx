import './Layout.css'
import {Outlet, useNavigate} from "react-router-dom";

function Layout() {
    const navigate = useNavigate();

    return (
        <>
            <header className="navbar">
                <div className="link" onClick={() => navigate("/themes")}>
                    Themes
                </div>
                <div className="link" onClick={() => navigate("/home")}>
                    Home
                </div>
                <div className="link" onClick={() => navigate("/inventory")}>
                    Inventory
                </div>
            </header>
            <Outlet></Outlet>
        </>
    )
}

export default Layout
