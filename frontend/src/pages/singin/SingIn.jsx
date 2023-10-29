import React from 'react'

import './SingIn.css'

const SingIn = () => {
  const [isRightPanelActive, setIsRightPanelActive] = React.useState(false);

  const handleGhostButtonClick = () => {
    setIsRightPanelActive(prevState => !prevState);
  }

  return (
    <div className="singin_page">
      <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Створити акаунт</h1>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="main_login">
            <div className="form-container sign-in-container">
                <form action="#">
                    <h1>Увійти</h1>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign In</button>
                </form>
            </div>

            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>З поверненням!</h1>
                        <p>Щоб залишатися на зв'язку з нами, увійдіть,
                            <br/> використовуючи свої дані</p>
                        <button onClick={handleGhostButtonClick} className="ghost">Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Привіт друже!</h1>
                        <p>Введіть свої дані та продовжуйте подорож з нами</p>
                        <button onClick={handleGhostButtonClick} className="ghost">Sign Up</button>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default SingIn;