const initState = {
    hidden: true,
    cartItems: []
}

const manageAddItem = (cartItems, item) => {

    const cartItemExisting = cartItems.find(cartItem => cartItem.id === item.id)
    if(!cartItemExisting) {
        return [...cartItems, {...item, quantity:1}]
    } else {
        return cartItems.map(cartItem => cartItem.id === item.id ? 
            {...cartItem, quantity: cartItem.quantity + 1} : cartItem) 
    }

}

const manageDeleteItem = (cartItems, item) => {
    const cartItemExisting = cartItems.find(cartItem => cartItem.id === item.id)
    if(cartItemExisting.quantity === 1){
        const index = cartItems.indexOf(cartItemExisting)
        if(index > -1){
            cartItems.splice(index,1)
            return [...cartItems]
        }
    }else{
        return cartItems.map(cartItem => cartItem.id === item.id ? 
            {...cartItem, quantity: cartItem.quantity - 1} : cartItem) 
    }
}

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case 'TOGGLE_CART':
            return {
                ...state,
                hidden: !state.hidden
            }
            break;
        case 'ADD_ITEM':
            return {
                ...state,
                cartItems: manageAddItem(state.cartItems, action.payload)
            }
            break;
        case 'DELETE_ITEM':
           return {
                ...state,
                cartItems: manageDeleteItem(state.cartItems, action.payload)
            }
            break;
        default:
            return state;
            break;
    }
}

export default cartReducer