import { GlobalCss } from './styles'
import Header from './components/Header'
import Banner from './components/Banner'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const rotas = createBrowserRouter([{ path: '/', element: <Banner /> }])

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
