import { hot } from 'react-hot-loader/root'
import React, { lazy, Suspense } from 'react'
import 'semantic-ui-css/semantic.min.css'
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Loading from './components/Loading'


const Dashboard = lazy(() => import('./views/dashboard'))


function App() {
    return (
        <Suspense fallback={<Loading />}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/add-spending" component={Dashboard} />
                </Switch>
            </Router>
        </Suspense>
    )
}

export default hot(App);
