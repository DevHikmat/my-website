import "./about.scss";
import html5 from "../../static/html.png";
import css from "../../static/css.png";
import js from "../../static/js.png";
import figma from "../../static/figma.png";
import react from "../../static/react.png";
import tailwind from "../../static/tailwind.png";
import swiper from "../../static/swiper.png";
import antd from "../../static/antd.png";

import seo from "../../static/seo.png";
import dizayn from "../../static/dizayn.png";
import sifat from "../../static/sifat.png";
import tezkorlik from "../../static/tezkorlik.png";

import webstar from "../../static/webstar.jpg";

const About = () => {
    return <div className="about">
        <div className="about-text">
            <div className="title">
                <h2>Men haqimda</h2>
            </div>
            <p>Men Habibulloyev Yaxyobek veb dasturchisiman. Yoshim 18 da, Andijon viloyati Oltinko’l tumanida tug'ilganman. Qiziqarli, ko’p funksionallika ega bo’lgan va kuchli dizaynga ega bo’lgan dasturlar yaratishga qiziqaman.</p>
            <p>Mening vazifam veb saytni foydalanuvchilarga qulay, sayt dizayni foydalanuvchilarga jalb qiluvchi lekin ayni paytda tezkor bo'lishini taminlashdir va saytni moslashuvchan kodlar bilan yaratishdir!  Mening maqsadim veb sayt foydalanuvchilariga barcha qismlarini intuitiv va qulay bo'lishga harakat qilishga qaratilgan. Agar sizga men yaratgan loyihalarim qiziq bo’lsa Loyihalar sahifasiga tashrif buyurishingiz mumkin :)</p>
            <button className="success-btn">Bog'lanish</button>
        </div>
        <div className="about-tech">
            <div className="title">
                <h2>Asbob-uskunalar</h2>
            </div>
            <div className="tech-box">
                <div className="tech-box-item">
                    <img src={html5} alt="html 5" />
                </div>
                <div className="tech-box-item">
                    <img src={css} alt="css" />
                </div>
                <div className="tech-box-item">
                    <img src={js} alt="js" />
                </div>
                <div className="tech-box-item">
                    <img src={figma} alt="figma" />
                </div>
                <div className="tech-box-item">
                    <img src={react} alt="react" />
                </div>
                <div className="tech-box-item">
                    <img src={tailwind} alt="tailwind" />
                </div>
                <div className="tech-box-item">
                    <img src={swiper} alt="swiper" />
                </div>
                <div className="tech-box-item">
                    <img src={antd} alt="ant-design" />
                </div>
            </div>
        </div>
        <div className="about-what">
            <div className="title">
                <h2>Men nimalar qila olaman</h2>
            </div>
            <div className="about-what-box">
                <div className="about-what-box-item">
                    <img src={seo} alt="picture" />
                    <div>
                        <h3>Seo</h3>
                        <p>Qidiruv tizimining natijalarida sayt reytingini yaxshilash</p>
                    </div>
                </div>
                <div className="about-what-box-item">
                    <img src={dizayn} alt="picture" />
                    <div>
                        <h3>Dizayn</h3>
                        <p>Kuchli dizayn va kichik detallargacha e’tibor berish </p>
                    </div>
                </div>
                <div className="about-what-box-item">
                    <img src={sifat} alt="picture" />
                    <div>
                        <h3>Sifat</h3>
                        <p>Yuqori darajada saytlarni sifatli ishlab chiqish</p>
                    </div>
                </div>
                <div className="about-what-box-item">
                    <img src={tezkorlik} alt="picture" />
                    <div>
                        <h3>Tezkorlik</h3>
                        <p>Qisqa muddat ichida tezkor sayt ishlab chiqish</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-clients">
            <div className="title">
                <h2>Mijozlar</h2>
            </div>
            <div className="clients-box">
                <div className="clients-box-item">
                    <img className="img-fluid" src={webstar} alt="webstar image" />
                </div>
                <div className="clients-box-item">
                    <img className="img-fluid" src={webstar} alt="webstar image" />
                </div>
                <div className="clients-box-item">
                    <img className="img-fluid" src={webstar} alt="webstar image" />
                </div>
                <div className="clients-box-item">
                    <img className="img-fluid" src={webstar} alt="webstar image" />
                </div>
            </div>
        </div>
    </div>
}

export default About