const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    totalPrice: 0,
    checkout: false
}

const sumItems = (item) => {
    const itemsCounter = item.reduce((total , product) => total + product.quantity , 0);
    const totalPrice = item.reduce((total , product) => total + (product.quantity * product.price) , 0).toFixed(2);
    return {itemsCounter , totalPrice}
}

const cartReducer = (state=initialState , action) => {
    switch (action.type) {
        case 'ADD_ITEM' :
            if(!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            return {
                ...state,
                ...sumItems(state.selectedItems)
            }
        case 'REMOVE_ITEM' :
            const index = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems.splice(index , 1)
            return {
                ...state,
                ...sumItems(state.selectedItems)
            }
        case 'INCREASE' :
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return {
                ...state,
                ...sumItems(state.selectedItems)
            }
        case 'DECREASE' :
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexD].quantity--;
            return {
                ...state,
                ...sumItems(state.selectedItems)
            }
        case 'CHECK_OUT' :
            return {
                selectedItems: [],
                itemsCounter: 0,
                totalPrice: 0,
                checkout: true
            }
        case 'CLEAR' :
            return {
                selectedItems: [],
                itemsCounter: 0,
                totalPrice: 0,
                checkout: false
            }
        default :
            return {
                selectedItems: [],
                itemsCounter: 0,
                totalPrice: 0,
                checkout: false
            }
    }
}

export default cartReducer;