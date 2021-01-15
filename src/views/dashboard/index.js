import React from 'react'
import AddSpending from './AddSpending'
import Spendings from './Spendings'
import { ToastContainer } from 'react-toastify';
import Menu from '../../components/Menu';
import { Route } from 'react-router-dom';


function Dashboard(props){
    return (
        <>
            <Route path="/spendings/add" component={AddSpending} />
            <Route path="/spendings" component={Spendings} />
            <ToastContainer autoClose={1000} hideProgressBar />
            <Menu />
        </>
    )
}

export default Dashboard