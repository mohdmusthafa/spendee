import { SET_SPENDING_DATA } from './types'

export const setSpendingData = (name, value) => (dispatch) => {
    dispatch({
        type: SET_SPENDING_DATA,
        payload: {
            [name]: value
        }
    })
}