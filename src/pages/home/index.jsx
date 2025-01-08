import React from 'react'
import "./home.scss";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <div className="home-content">
                <h1>Assalomu alaykum,  Men  <span>Mullajonov Hikmatullo</span>man</h1>
                <p>Veb dasturchi va dizayner sifatida natijaga yo'naltirilgan ishchi. Veb-saytlar va veb-ilovalarni yaratish va boshqarish orqali umumiy mahsulot muvaffaqiyatiga erishish maqsadimdir.</p>
                <Link to={"/projects"}>
                    <button className="success-btn">Loyihalar</button>
                </Link>
            </div>
        </div>
    )
}

export default Home