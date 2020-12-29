const initalState = {
    name: null
}

export default function reducer( state = initalState, action){
    switch(action.type){
        case 'TEST':
            return { ...state, name: 'musthu' }
        default:
            return state
    }
}