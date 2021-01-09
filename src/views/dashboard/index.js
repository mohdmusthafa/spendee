import React from 'react'
import AddSpending from './AddSpending'
import { ToastContainer } from 'react-toastify';
import Menu from '../../components/Menu';


function Dashboard(){
    return (
        <div>
            <AddSpending />
            <ToastContainer autoClose={1000} hideProgressBar />
            <Menu />
        </div>
    )
}

export default Dashboard