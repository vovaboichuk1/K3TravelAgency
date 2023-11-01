import React from 'react'
import './CustomerCab.css'

const CustomerCab = () => {
  return (
    <div className='customerCab_page'>
      <h1>Мій кабінет</h1>
        <div className='profile'>
          <div className='orders'>
            <img src="../profile_orders.png" alt="" />
            <h3>Мої замовлення</h3>
          </div>

          <div className='profile_block'>
            <div className='profile_info'>
              
              <div className='profile_logo' >
               <img src="../Main_logo.svg" alt="" />
              </div>
              <div className='user_info'>
                <h3>Ім`я: {'Ростислав Орленко'} </h3>
                <h3>Пошта:  {'test-testov@email.com'}</h3>
              </div>

            </div>
            <div className='profile_change'>
              <h3 className='change_h'>Ваші персональні дані</h3>
              <div className='profile_item'>
                <input type="text" placeholder="Ім'я" />
                <button className='profile_btn'>Редагувати</button>
              </div>
              <div className='profile_item'>
                <input type="email" label='Email' placeholder="Пошта"/>
                <button className='profile_btn'>Редагувати</button>
              </div>
              <div className='profile_item'>
                <input type="tel" label='Телефон' placeholder="Ваш телефон"/>
                <button className='profile_btn'>Редагувати</button>
              </div>
              <div className="profile_item">
                <button className="btn_delete">
                  Видалити аккаунт
                </button>
              </div>
            </div>
          </div>

          <div className='kitty_tips'>
            <img className='kitty_tips-img' src="../profile_cat.png" alt="" />
            <h3 className='kitty_tips-title'>Мяу Мяу Мяу!!!</h3>
          </div>
        </div>
    </div>
  )
}

export default CustomerCab;