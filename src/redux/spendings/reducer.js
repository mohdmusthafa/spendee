import { SET_SPENDING_DATA } from './types'

const initialState = {
    Add_spending_type: "",
    Add_spending_date: "",
    Add_spending_amount: ""
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case SET_SPENDING_DATA:
            return { ...state, ...action.payload }
        default:
            return state
    }
}