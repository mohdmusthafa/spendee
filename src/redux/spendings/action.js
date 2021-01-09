import { SET_SPENDING_DATA } from './types'
import axios from 'axios'
import { toast } from 'react-toastify'
const API = process.env.API_URL

export const setSpendingData = (name, value) => (dispatch) => {
    dispatch({
        type: SET_SPENDING_DATA,
        payload: {
            [name]: value
        }
    })
}

export const addSpendingData = () => async (dispatch, getState) => {
    try {
        const { spendings } = getState();
        const {
            Add_spending_amount,
            Add_spending_date,
            Add_spending_type
        } = spendings
        const req_params = {
            spending_type: Add_spending_type,
            spending_date: Add_spending_date,
            saved_amount: Number(Add_spending_amount) //Convert to number from string input
        }

        await axios.post(API + '/add', req_params)
        toast.success("Successfully added spending")
    } catch (err) {
        console.log(err)
    }
}