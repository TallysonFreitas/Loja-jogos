import { GlobalCss } from './styles'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import { store } from './store'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
