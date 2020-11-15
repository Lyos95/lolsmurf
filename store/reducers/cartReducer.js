import { createStore, applyMiddleware } from 'redux';
//import { persistStore, persistReducer } from 'redux-persist' 
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { FETCH_ACCOUNT, FETCH_ACCOUNTS_COUNTER,RESET } from "../actions/action-types/account-actions";

/*
Para que persista la tienda

const persistConfig = {
    key: 'root',
    storage,
    blacklist:['products','addedItems','selectedProduct']
  }
*/ 
import { 
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY, 
    ADD_SHIPPING,
    ADD_QUANTITY_WITH_NUMBER,
    RESET_CART,
    ADD_TO_COMPARE,
    REMOVE_ITEM_FROM_COMPARE,
    SET_PRODUCT_SELECTED,
    SAVE_CLIENT_ACCOUNTS,
    CHECK_IF_ENOUGH_ACCS
} from '../actions/action-types/cart-actions'

const initState = {
    products: [
        {
            id: 1,
            title: "EU WEST",
            price: 29.95,
            image: require("../../assets/regions/demacia.jpg"),
            stock: 0,
            quantity: 0,
            imageALT: "League of Legends smurf account EUW"
        },
        {
            id: 2,
            title: "NA",
            price: 29.95,
            image: require("../../assets/regions/Noxus.jpg"),
            stock: 0,
            quantity: 0,
            imageALT: "League of Legends smurf account na"
        },
        {
            id: 3,
            title: "EU NORDIC & EAST",
            subtitle: "League of ",
            price: 29.95,
            image: require("../../assets/regions/flelyor.jpg"),
            stock: 0,
            quantity: 0,
            imageALT: "League of Legends smurf account eune"
        },
        {
            id: 4,
            title: "TURKEY",
            price: 29.95,
            image: require("../../assets/regions/Shuriman.jpg"),
            stock: 0,
            quantity: 0,
            imageALT: "League of Legends smurf account turkey"
        },
        {
            id: 5,
            title: "PBE",
            price: 29.95,
            image: require("../../assets/regions/Piltober.jpg"),
            stock: 0,
            quantity: 0,
            imageALT: "League of Legends smurf account pbe"
        }
    ],
    addedItems:[],
    addedItemsToCompare:[],
    total: 0,
    shipping: 0,
    totalProducts: 0,
    selectedProduct: {
                        id: 2,
                        title: "NA",
                        price: 29.95,
                        image: require("../../assets/regions/Noxus.jpg"),
                        stock: 0,
                        quantity: 0,
                        imageALT: "League of Legends smurf account na"
                    },
    soldAccounts: [],
    userLogged: false
}

const cartReducer = (state = initState, action) => {
   
   
    if(action.type === ADD_TO_CART){
        let addedItem = state.products.find(item => item.id === action.id)
        let existed_item = state.addedItems.find(item => item.id === action.id)
        
        //check if the action id exists in the addedItems
        state.totalProducts++;
        if(existed_item){
            addedItem.quantity += 1 
            existed_item.quantity += 1
            
            return {
                ...state,
                total: state.total + addedItem.price,
                addedItems: state.addedItems.concat([]),
                products: state.products.concat([])
            }
        } else {
            addedItem.quantity = 1;
            
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return {
                ...state,
                products: state.products.concat([]),
                addedItems: [...state.addedItems, Object.assign({},addedItem)],
                total : newTotal,
                totalProducts: state.totalProducts
            }
            
        }
    }
    
    if(action.type === FETCH_ACCOUNT){
        return {
            ...state,
            userLogged: action.payload
        }
    }
    if(action.type === CHECK_IF_ENOUGH_ACCS){
        return {
            ...state,
            ...action.payload
        }
    }

    if(action.type === FETCH_ACCOUNTS_COUNTER) {
        return {
            ...state,
            products: action.payload
        }
    }

    if(action.type === SET_PRODUCT_SELECTED) {
        let productSelected = state.products.find(item => item.id === action.id)
        return {
            ...state,
            selectedProduct: productSelected
        }
    }

    if(action.type === ADD_TO_COMPARE){
        let addedItemToCompare = state.products.find(item => item.id === action.id)
        
        addedItemToCompare.quantity = 1;
        
        return {
            ...state,
            addedItemsToCompare: [...state.addedItemsToCompare, addedItemToCompare]
        }
    }

    if(action.type === ADD_QUANTITY_WITH_NUMBER){
        let addedItem = state.products.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item=> action.id === item.id)
        if(existed_item)
        {
            addedItem.quantity += action.qty
            return {
                ...state,
                total: state.total + addedItem.price * action.qty
            }
        } else {
            addedItem.quantity = action.qty;
            //calculating the total
            let newTotal = state.total + addedItem.price * action.qty
            
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    

    if(action.type === REMOVE_ITEM){
        let itemToRemove = state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        let itemTobeRemovedQuantity = state.products.find(item => item.id === action.id)
        itemTobeRemovedQuantity.quantity = 0
        state.totalProducts = state.totalProducts - itemToRemove.quantity;
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity );
        
        return {
            ...state,
            addedItems: new_items,
            products: state.products.concat([]),
            total: newTotal,
            totalProducts:state.totalProducts
        }
    }

    if(action.type === REMOVE_ITEM_FROM_COMPARE){
        let new_items = state.addedItemsToCompare.filter(item=> action.id !== item.id)
        
        return {
            ...state,
            addedItemsToCompare: new_items
        }
    }

    if(action.type === ADD_QUANTITY){
        let addedItem = state.products.find(item=> item.id === action.id)
        addedItem.quantity += 1 
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal
        }
    }

    if(action.type === SUB_QUANTITY){  
        //let addedItem = state.products.find(item=> item.id === action.id) 
        let addedItem = state.addedItems.find(item => item.id === action.id)
        //if the qt == 0 then it should be removed
        state.totalProducts--;
        if(addedItem.quantity === 1){
            addedItem.quantity -= 1
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            newTotal = Math.round(newTotal * 100) / 100
            return {
                ...state,
                products: state.products.concat([]),
                addedItems: new_items,
                total: newTotal,
                totalProducts:state.totalProducts
            }
        } else {
            addedItem.quantity -= 1
            //existed_item.quantity -= 1
            let newTotal = state.total - addedItem.price
            newTotal = Math.round(newTotal * 100) / 100
            
            return {
                ...state,
                products: state.products.concat([]),
                addedItems: state.addedItems.concat([]),
                total: newTotal,
                totalProducts:state.totalProducts
            }
        }
        
    }

    if(action.type === ADD_SHIPPING){
        return {
            ...state,
            shipping: state.shipping += 6
        }
    }
    
    if(action.type === SAVE_CLIENT_ACCOUNTS) {
        
        return {
            ...state,
            soldAccounts: action.payload
        }
    }

    if(action.type === RESET) {        
        return initState
        
    }

    if(action.type === 'SUB_SHIPPING'){
        return {
            ...state,
            shipping: state.shipping -= 6
        }
    }

    if(action.type === RESET_CART){
        return {
            ...state,
            addedItems: [],
            total: 0,
            shipping: 0
        }
    }
    
    else {
        return state
    }
}
//const  persistedReducer = persistReducer(persistConfig, cartReducer) Persisting
export const initStore = (initialState = initState) => {
    return createStore(
        //persistedReducer, //Persinting
        cartReducer, //Borrar si quieres que persista
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
}