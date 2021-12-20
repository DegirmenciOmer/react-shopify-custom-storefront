import Home from './pages/Home'
import ProductPages from './pages/ProductPages'
import {
  // useParams,
  // Link,
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import NavMenu from './components/NavMenu'
import Footer from './components/Footer'
import Hero from './components/Hero'

function App() {
  return (
    <div className='App'>
      <Router>
        <Hero />
        <Navbar />
        <NavMenu />
        <Cart />
        <Switch>
          <Route path={'/products/:handle'}>
            <ProductPages />
          </Route>
          <Route exact path={'/'}>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
