import React from 'react'
import './ItemBlock.css'

 const ItemBlock = () => {
  return (
    <div className="item_block">
      {/* <div className='item_photo' src="../public/Rectangle 4.png" alt="" /> */}
      <div className="item_info">
        <div className="info_top">
          <img src="../public/Ellipse5.png" alt="" />
          <img src="../public/Ellipse6.png" alt="" />
          <img src="../public/Ellipse7.png" alt="" />
          <img src="../public/Ellipse8.png" alt="" />
        </div>
        <div className="info_middle">
          <h3 className='info_title'>Закарпаття</h3>
          <h2 className='info_price'>100$</h2> 
          <p className='info_dates'>1-6 жовтня</p>
          <p className='info_seats'>Залишилось 1 місце</p>
        </div>

        <a href="#" className="item_btn">Деталі</a>
      </div>         
    </div>
  )
}
export default ItemBlock;