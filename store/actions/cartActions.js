import { 
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY,
    ADD_QUANTITY_WITH_NUMBER,
    RESET_CART,
    ADD_TO_COMPARE,
    REMOVE_ITEM_FROM_COMPARE,
    SET_PRODUCT_SELECTED
} from './action-types/cart-actions'

//add cart action
export const addToCart = (id,be) => {
    return {
        type: ADD_TO_CART,
        id,
        be
    }
}
//remove item action
export const removeItem = (id,be) => {
    return {
        type: REMOVE_ITEM,
        id,
        be
    }
}
//subtract qt action
export const subtractQuantity = (id,be) => {
    return {
        type: SUB_QUANTITY,
        id,
        be
    }
}
//add qt action
export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id
    }
}

//add qt action with quantity number
export const addQuantityWithNumber = (id, qty) => {
    return {
        type: ADD_QUANTITY_WITH_NUMBER,
        id,
        qty
    }
}

// Reset cart after form submit
export const resetCart = () => {
    return {
        type: RESET_CART
    }
}

//add compare action
export const addToCompare = (id) => {
    return {
        type: ADD_TO_COMPARE,
        id
    }
}
//remove item from compare action
export const removeItemFromCompare = (id) => {
    return {
        type: REMOVE_ITEM_FROM_COMPARE,
        id
    }
}

export const setProduct = (id) => {
    return {
        type: SET_PRODUCT_SELECTED,
        id
    }
}
