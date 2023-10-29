import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">

            <div className="footer_content">
                
                <ul className="footer_list">
                    <h2 className='footer_titles'>Графік роботи</h2>
                    <li>Пн. - Пт. 10.00 - 20.00</li>
                    <li>Сб. - Нд. 10.00 - 17.00</li>
                </ul>
            
                <ul className="footer_list">
                     <h2 className='footer_titles'>Телефони</h2>
                    <li>+ 380 66 666 6666</li>
                    <li>+ 380 98 228 1337</li>
                </ul>
            
                <ul className="footer_list">
                    <h2 className='footer_titles'>Адреса</h2>
                    <li>Україна</li>
                    <li>м. Коломия, вул. Чехова 20</li>
                </ul>
            </div>

            <span className="footer_copyright">© 2011 - 2023 | Всі права захищено.</span>

    </footer>
  )
}
export default Footer;