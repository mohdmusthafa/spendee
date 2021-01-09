import React from 'react'
import AddSpending from './AddSpending'
import { ToastContainer } from 'react-toastify';


function Dashboard(){
    return (
        <div>
            <AddSpending />
            <ToastContainer />
        </div>
    )
}

export default Dashboard