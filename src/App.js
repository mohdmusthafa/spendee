import { hot } from 'react-hot-loader/root'
import React, { Suspense } from 'react'
import 'semantic-ui-css/semantic.min.css'
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import routes from './routes'
import Loading from './components/Loading'


function App() {
    return (
        <Suspense fallback={<Loading />}>
            <BrowserRouter>
                <Switch>

                    {routes.map((route, i) =>
                        <Route key={i} exact={route.subRoutes.some(r => r.exact)} path={route.subRoutes.map(r => r.path)}>
                            <route.layout>
                                {route.subRoutes.map((subRoute, i) =>
                                    <Route key={i} {...subRoute} />
                                )}
                            </route.layout>
                        </Route>
                    )}
                </Switch>
            </BrowserRouter>
        </Suspense>
    )
}

export default hot(App);
