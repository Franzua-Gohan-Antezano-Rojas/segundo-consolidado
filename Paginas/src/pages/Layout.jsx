import { Outlet, Link} from "react-router-dom";
const Layout = function () {
    return (
        <>
            <header>
                <h1>Uso de rutas en React</h1>
            </header>
            <main>
                <aside className="sidebar">
                    <nav>
                    <ul>
                        <li className="btn-custom btn-primary">
                            <Link to="/">Home</Link>
                        </li> 
                        <br /> <br />
                        <li className="btn-custom btn-primary">
                            <Link to="/blogs">Blogs</Link>
                        </li>
                        <br /> <br />
                        <li className="btn-custom btn-primary">
                            <Link to="/contact">Contact</Link>
                        </li>
                        <br /> <br />
                        <li className="btn-custom btn-primary">
                            <Link to="/product">Product</Link>
                        </li>
                        <br /> <br />
                        <li className="btn-custom btn-primary">
                            <Link to="/services">Services</Link>
                        </li>
                    </ul>
                    </nav>
                </aside>
                <section className="section1">
                    <Outlet />
                </section>
            </main>
            
        </>
    )
};

export default Layout;