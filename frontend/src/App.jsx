import { useState } from 'react'
import {Route, Routes} from "react-router-dom";

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Main from './pages/main/Main'
import Calendar from './pages/calendar/Calendar'
import Contract from './pages/contract/Contract'
import Contacts from './pages/contacts/Contacts'
import SingUp from './pages/singup/SingUp'
import SingIn from './pages/singin/SingIn'

import './App.css'

function App() {

  return (
    <div className='wrapper'>
      <Header />
      <div className="content">
        <Routes>
          <Route  path='/' element={<Main />}/>
          <Route  path='/calendar' element={<Calendar />}/>
          <Route  path='/contract' element={<Contract />}/>
          <Route  path='/contacts' element={<Contacts />}/>
          <Route  path='/singup' element={<SingUp />}/>
          <Route  path='/singin' element={<SingIn />}/>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
