import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home'
import BlogPage from './pages/BlogPage/BlogPage'
import About from './pages/About/About'
import BlogDetail from './pages/BlogDetail/BlogDetail'
function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/blog" component={BlogPage}></Route>
                    <Route
                        path="/blogDetail/:id"
                        component={BlogDetail}
                    ></Route>
                </Switch>
                <Switch>
                    <Route exact path="/" component={Home}></Route>

                    <Route path="/about" component={About}></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
