import { Link } from "react-router-dom";
import "./navbar.scss";
import { useEffect } from "react";

export const Navbar = () => {
    useEffect(() => {
        const links = document.querySelectorAll(".nav-link");
        links.forEach(a => {
            a.addEventListener('click', function () {
                links.forEach(innerA => innerA.classList.remove("active"));
                a.classList.add('active');
            })
        })
    }, [])
    return <nav className="navbar navbar-expand-lg p-0">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand text-uppercase">
                <i className="fa-solid fa-bars"></i>
                <div>
                    Hikmat<span>.uz</span>
                </div>
            </Link>
            <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="fa-solid fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" to={"/"}>Bosh sahifa</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/about"}>Haqida</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/projects"}>Loyihalar</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/contact"}>Bog'lanish</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"https://github.com/devHikmat"} target="_blank">
                            <i className="fa-brands fa-github"></i>
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
}