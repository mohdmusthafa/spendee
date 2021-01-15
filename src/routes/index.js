import { lazy } from 'react'

const Dashboard = lazy(() => import('../views/dashboard'))


const routes = [
    {
        layout: Dashboard,
        subRoutes: [
            {
                path: "/spendings/add",
                component: Dashboard
            }
        ]
    }
]

export default routes