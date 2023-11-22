import { FC, useEffect, useState } from 'react'
import s from './App.module.scss'
import Header from '../components/Header.tsx/Header'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'




const App: FC = () => {



  return (
    <div className={s.App}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
