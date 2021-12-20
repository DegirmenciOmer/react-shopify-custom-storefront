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

function App() {
  return (
    <div className='App'>
      <Router>
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
        <div>footer</div>
      </Router>
    </div>
  )
}

export default App
