import Home from './pages/Home'
import ProductPages from './pages/ProductPages'
import {
  useParams,
  Link,
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router>
        <div>header</div>
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
