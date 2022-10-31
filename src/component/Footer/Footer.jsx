import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_title'>QPICK</div>
        <div className='services'>
            <div>
                <button className='favorites'>
                    Избранное
                </button>
            </div>
            <div>
                <button className='basket'>
                    Корзина
                </button>
            </div>
            <div>
                <button className='contacts'>
                    Контакты
                </button>
            </div>
        </div>
        <div className='services'>
            <button className='if'>
                Условия сервиса
            </button>
            <div className='language'>
                Рус Eng
            </div>
        </div>
        <div className='social'>
            <button>
                <img src="VK.png" alt="" />
            </button>
            <button>
                <img src="Telegram.png" alt="" />
            </button>
            <button>
                <img src="Whatsapp.png" alt="" />
            </button>
        </div>
    </div>
  )
}

export default Footer