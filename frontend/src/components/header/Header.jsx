import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import "./Header.css"

const Header = () => {
    const [activePage, setActivePage] = useState(0);
    const navMenu = [
      {name: 'Подорожі', link: '/'},
      {name: 'Календар', link: '/calendar'},
      {name: 'Договір', link: '/contract'},
      {name: 'Контакти', link: '/contacts'},
    ];

  return (
    <header className="header">
        <nav className="nav">
            <Link to='/'>
                <div className='logo'>
                <img className='nav_logo' src="../public/Main_logo.svg" alt="" />
                <img src="../public/LogoText.png" alt="" />
                </div>
            </Link>

            <ul className='nav_list'>
                { navMenu.map((obj, index) => (
                    <Link to={obj.link} key={index}
                      onClick={() => setActivePage(index)}
                    >
                      <li className='nav_list'>
                          <a className={activePage === index ? 'activePage' : 'nav_link'} href="">{obj.name}</a>
                      </li>
                    </Link>
                  )
                )}
                {/* <Link to="/">
                    <li className="nav_item">
                        <a className='nav_link' href="">Подорожі</a>
                    </li>
                </Link>

                <Link to="/calendar">
                    <li className="nav_item">
                        <a className='nav_link' href="">Календар</a>
                    </li>
                </Link>

                <Link to="/contract">
                    <li className="nav_item">
                        <a className='nav_link' href="">Договір</a>
                    </li>
                </Link>

                <Link to="/contacts">
                    <li className="nav_item">
                        <a className='nav_link' href="">Контакти</a>
                    </li>
                </Link> */}

                <div className="singin">
                    <img className='nav_acc' src="../public/account_logo.png" alt="" />

                    <Link to="singup">
                        <li className="nav_item">
                            <a className='nav_link' href="">Реєстрація</a>
                        </li>
                    </Link>

                    <Link to="singin">
                        <li className="nav_item">
                            <a className='nav_link' href="">Увійти</a>
                        </li>
                    </Link>

                </div>


            </ul>
        </nav>
    </header>
  )
}
export default Header
