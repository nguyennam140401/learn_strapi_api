import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home'
import BlogPage from './pages/BlogPage/BlogPage'
import About from './pages/About/About'
import BlogDetailPage from './pages/BlogDetailPage/BlogDetailPage'
import CategoryBlogPage from './pages/CategoryBlogPage/CategoryBlogPage'
function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/blog" component={BlogPage}></Route>
                    <Route
                        exact
                        path="/blog/:id"
                        component={CategoryBlogPage}
                    ></Route>
                    <Route
                        path="/blogDetail/:id"
                        component={BlogDetailPage}
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
