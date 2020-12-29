import { combineReducers } from 'redux'
import spendingsReducer from './spendings/reducer'

const rootReducer = combineReducers({
    spendings: spendingsReducer
})

export default rootReducer