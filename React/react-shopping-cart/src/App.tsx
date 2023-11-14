
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Store } from './pages/Store'
import Error from './pages/Error'
import { ShoppingCartProvider } from './contexts/ShoppingCartContext'
import Navbar from './components/Navbar'


function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar></Navbar>
        <Container className='mb-4'>
          <Routes>
            <Route path="*" element={<Error />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/store" element={<Store />} />
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </>
  )
}

export default App
