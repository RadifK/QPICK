import ReactDOM from 'react-dom/client'
import App from './App/App.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { BrowserRouter } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')!).render(



  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>



)
