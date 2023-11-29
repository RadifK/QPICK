import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header.tsx/Header'
import Main from 'src/components/Pages/Main'
import s from './App.module.scss'

import { FC } from 'react'




const App: FC = () => {



  return (
    <div className={s.App}>
      <Header />
      <div className='_content'>
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default App
