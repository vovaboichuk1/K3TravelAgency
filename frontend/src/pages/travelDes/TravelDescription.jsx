import React from 'react'
import './TravelDescription.css'

const TravelDescription = () => {
  return (
    <main className="travel_page">

        <div className="travel_baner">
            <div className="travel_info">
                <h1 className='travel_title'>Назва подорожі</h1>
                <h2 className='travel_subtitle'>Місце подорожі</h2>   
                <h2 className='travel_price'>100$</h2> 
                <p className='travel_dates'>Дата та час подорожі</p>       
                <button className="order_tour">Забронювати місця</button>  
            </div>
        </div>

        <div className="additional_services">
            Some different info
        </div>
    </main>

        
  )
}

export default TravelDescription;
