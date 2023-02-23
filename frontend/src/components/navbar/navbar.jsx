import { Outlet, Link } from "react-router-dom";


export default function NavBar() {
    return (
        <>
            <nav className="navbar overlay navbar-expand-sm  navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to='/addProduct'>Add Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/productList'>Product List</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}