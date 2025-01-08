import React, { useRef, useState } from 'react'
import "./contact.scss";
import email from "../../static/gmail1.png";
import telegram from "../../static/telegram1.png";
import tel from "../../static/phone1.png";
import { Link } from 'react-router-dom';

const Contact = () => {
    const [senderName, setSenderName] = useState('');
    const [senderEmail, setSenderEmail] = useState('');
    const [senderText, setSenderText] = useState('');

    const copyToClipboard = () => {
        navigator.clipboard.writeText("+998772578008");
    }

    const sendToBot = async () => {
        if(!senderName.trim() || !senderEmail.trim()) return alert("Iltimos, maydonlarni to'ldiring !");
        const botToken = '7958160739:AAFPVu4ZNn9Vb4h7ch2maxTAeRUA6yWNj4w';
        const chatId = '-1002443444787';
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
        const message = "Ismi: " + senderName + "\nE-mail: " + senderEmail + "\nXabar: " + senderText;
        try {
            const response = await fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                chat_id: chatId,
                text: message
              }),
            });
          } catch (error) {
            console.error('Xato yuz berdi:', error);
          }
    }
    return (
        <div className='contact'>
            <div className="title">
                <h2>Bog'lanish</h2>
            </div>
            <div className="main">
                <div className="item">
                    <div className="icon-bg">
                        <img src={email} alt="email" />
                    </div>
                    <h4>E-pochta</h4>
                    <Link target='_blank' to={"mailto:hikmatmullajonov@gmail.com"}>hikmatmullajonov@gmail.com</Link>
                </div>
                <div className="item">
                    <div className="icon-bg">
                        <img src={telegram} alt="email" />
                    </div>
                    <h4>Telegram</h4>
                    <Link target='_blank' to={"https://t.me/devHikmat"}>t.me/devHikmat</Link>
                </div>
                <div className="item">
                    <div className="icon-bg">
                        <img src={tel} alt="email" />
                    </div>
                    <h4>Telefon raqam</h4>
                    <span value="+998772578008" onClick={copyToClipboard}>+998 (77) 257-80-08</span>
                </div>
            </div>
            <div className="title">
                <h2>So'rov yuborish</h2>
            </div>
            <div className="my-form">
                <form>
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="firstname">Ismingiz*</label>
                            <div className="input-group">
                                <input required autoComplete='off' value={senderName} onChange={(e) => setSenderName(e.target.value)} id='firstname' type="text" className="form-control" placeholder='Falonchiyev Falonchi' />
                            </div>
                        </div>
                        <div className="col-6">
                            <label htmlFor="email">Manzilingiz*</label>
                            <div className="input-group">
                                <input required autoComplete='off' value={senderEmail} onChange={(e) => setSenderEmail(e.target.value)} id='email' type="text" className="form-control" placeholder='misol@gmail.com' />
                            </div>
                        </div>
                        <div className="col-12" style={{ marginTop: "20px" }}>
                            <label htmlFor="izoh">Izohingiz*</label>
                            <div className="input-group">
                                <textarea value={senderText} onChange={(e) => setSenderText(e.target.value)} rows={8} className='form-control' name="izoh" id="izoh" placeholder='O’z izohingizni yozing...'></textarea>
                            </div>
                            <button type='button' onClick={sendToBot} className="success-btn">Yuborish</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact