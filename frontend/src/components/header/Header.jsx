import React from 'react'
import { Link } from 'react-router-dom'

import "./Header.css"

const Header = () => {
    const [activePage, setActivePage] = React.useState(0);
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
                <img className='nav_logo' src="../Main_logo.svg" alt="" />
                <img src="../LogoText.png" alt="" />
                </div>
            </Link>

            <ul className='nav_list'>
                { navMenu.map((obj, index) => (
                    <Link to={obj.link} key={index}
                      onClick={() => setActivePage(index)}
                    >
                      <li className='nav_list'>
                          <p className={activePage === index ? 'activePage' : 'nav_link'} href="">{obj.name}</p>
                      </li>
                    </Link>
                  )
                )}


                <div className="singin">
                    
                    <Link to="singin" onClick={() => setActivePage(6)}>
                        <li className="nav_item">
                            <p className={activePage === 6 ? 'activePage' : 'nav_link'} href="">Увійти</p>
                        </li>
                    </Link>
                    <Link to="customerCab" onClick={() => setActivePage(-1)}>
                      <img className='nav_acc' src="../account_logo.png" alt="" />
                    </Link>
                </div>


            </ul>
        </nav>
    </header>
  )
}
export default Header
