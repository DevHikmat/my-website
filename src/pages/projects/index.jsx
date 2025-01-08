import React, { useState } from 'react'
import "./projects.scss";
import telegram from "../../static/big-tg.png";

const projectList = [
    { id: new Date().getTime(), title: "Max Way Food", thumbnail: "https://media.licdn.com/dms/image/D4D12AQHAzpZZDBIkfA/article-cover_image-shrink_720_1280/0/1710486640359?e=2147483647&v=beta&t=_kP7RyfolRjZCXpwZO3GJqC4Trnozc_G8gP1uCmzilc", type: "landing", technos: ["reactjs", "vite", "tailwindcss", 'toastify', "antdesign", "recaptcha", "swiperjs"] },
    { id: new Date().getTime(), title: "Webstar Quiz App", thumbnail: "https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg", type: "multi", technos: ["reactjs", "vite", "tailwindcss", 'toastify', "antdesign", "recaptcha", "swiperjs"] },
    { id: new Date().getTime(), title: "Webstar Gamification", thumbnail: "https://kantata.marketing/wp-content/uploads/2021/08/project-managemenr-goals.jpg", type: "functionality", technos: ["reactjs", "vite", "tailwindcss", 'toastify', "antdesign", "recaptcha", "swiperjs"] },
]

const Projects = () => {
    const [currentFilter, setCurrentFilter] = useState(projectList);

    const getFilterValue = (val) => {
        if (val === "all") setCurrentFilter(projectList);
        else setCurrentFilter(projectList.filter(item => item.type === val));
    }
    return (
        <div className='projects'>
            <div className="title">
                <h2>Loyihalar</h2>
            </div>
            <div className="filter d-flex justify-content-between align-items-center">
                <button className="outline-btn">
                    <span>Filtrlash</span>
                    <i className="fa-solid fa-filter"></i>
                </button>
                <select className='outline-btn' name="pagetype" onChange={(e) => getFilterValue(e.target.value)}>
                    <option value="all">Barchasi</option>
                    <option value="multi">Ko'p sahifali</option>
                    <option value="landing">Bir sahifali</option>
                    <option value="functionality">Funksional</option>
                </select>
            </div>
            <div className="projects-container">
                {currentFilter.map(item => {
                    return <div className="projects-item">
                        <img className='img-fluid' src={item.thumbnail} alt="project" />
                        <div className="item-content">
                            <div className="d-flex justify-content-between align-items-center">
                                <h4>{item.title}</h4>
                                <b>{item.type}</b>
                            </div>
                            <div className="tech-box">
                                {item.technos.map(tech => {
                                    return <span>#{tech}</span>
                                })}
                            </div>
                        </div>
                    </div>
                })}
            </div>
            <div className="projects-footer">
                <img src={telegram} alt="telegram" />
                <div>
                    <h3>Telegram kanal</h3>
                    <p>Barcha loyihalarimni telegram kanalimda ham kuzatib borishingiz mumkin!</p>
                    <button className="success-btn">Ta’shrif buyurish</button>
                </div>
            </div>
        </div>
    )
}

export default Projects