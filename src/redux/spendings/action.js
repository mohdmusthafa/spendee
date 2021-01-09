import { SET_SPENDING_DATA } from './types'

export const setSpendingData = (name, value) => (dispatch) => {
    dispatch({
        type: SET_SPENDING_DATA,
        payload: {
            [name]: value
        }
    })
}

export const addSpendingData = () => async (dispatch, getState) => {
    const { spendings } = getState();
    console.log(spendings)
}