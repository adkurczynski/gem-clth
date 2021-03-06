const initState = {
    currentUser: null
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                currentUser: action.payload
            }
            break;
    
        default:
            return state;
            break;
    }
}

export default userReducer