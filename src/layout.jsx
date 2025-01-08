import { Navbar } from "./components/navbar";
import photo from "./static/IMG_1075.JPG";
import email from "./static/email.png";
import github from "./static/github.png";
import telegram from "./static/telegram.png";
import telefon from "./static/tel.png";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

export const Layout = ({ children }) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText("+998772578008");
    }
    return <div className="layout">
        <Navbar />
        <div className="main">
            <aside>
                <div className="page-controls">
                    <i className="fa-solid fa-arrow-left"></i>
                    <i className="fa-solid fa-arrow-right"></i>
                    <i className="fa-solid fa-arrow-rotate-right"></i>
                </div>
                <div className="profile">
                    <img className="img-fluid" src={photo} alt="my photo" />
                    <h3>Hikmatullo M.</h3>
                    <div className="skill">
                        <span className="skill-item">Veb dasturchi</span>
                        <span className="skill-item">Bakalavr</span>
                        <span className="skill-item">Dizayner</span>
                        <span className="skill-item">Middle</span>
                        <span className="skill-item">N1 bot</span>
                    </div>
                </div>
                <ul className="contact-list m-0">
                    <li>
                        <img src={email} alt="email" />
                        <div>
                            <h4>E-pochta</h4>
                            <Link target="_blank" to={"mailto:hikmatmullajonov@gmail.com"}>hikmatmullajonov@gmail.com</Link>
                        </div>
                    </li>
                    <li>
                        <img src={github} alt="github" />
                        <div>
                            <h4>Github</h4>
                            <Link target="_blank" to={"https://github.com/devHikmat"}>github.com/devHikmat</Link>
                        </div>
                    </li>
                    <li>
                        <img src={telegram} alt="telegram" />
                        <div>
                            <h4>Telegram</h4>
                            <Link target="_blank" to={"https://t.me/devHikmat"}>t.me/devHikmat</Link>
                        </div>
                    </li>
                    <li>
                        <img src={telefon} alt="tel" />
                        <div>
                            <h4>Telefon raqam</h4>
                            <p style={{cursor: "pointer"}} onClick={copyToClipboard}>+998 (77) 257-80-08</p>
                        </div>
                    </li>
                </ul>
            </aside>
            <article>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </article>
        </div>
    </div>
}