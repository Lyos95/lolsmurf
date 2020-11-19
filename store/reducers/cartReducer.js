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
import { filter } from 'lodash';

const initState = {
    products: [
        {
            id: 1,
            title: "EU WEST",
            image: require("../../assets/regions/demacia.jpg"),
            imageALT: "League of Legends smurf account EUW",
            type: [{
                stock: 0,
                quantity: 0,
                price: 18.95,
                be: 40000
            },
            {
                stock: 0,
                quantity: 0,
                price: 24.95,
                be: 50000
            },
            {
                stock: 0,
                quantity: 0,
                price: 28.95,
                be: 60000
            },
            {
                stock: 0,
                quantity: 0,
                price: 34.95,
                be: 70000
            }
        ]
        },
        {
            id: 2,
            title: "NA",
            image: require("../../assets/regions/Noxus.jpg"),
            imageALT: "League of Legends smurf account na",
            type: [{
                stock: 0,
                quantity: 0,
                price: 18.95,
                be: 40000
            },
            {
                stock: 0,
                quantity: 0,
                price: 24.95,
                be: 50000
            },
            {
                stock: 0,
                quantity: 0,
                price: 28.95,
                be: 60000
            },
            {
                stock: 0,
                quantity: 0,
                price: 34.95,
                be: 70000
            }
        ]
        },
        {
            id: 3,
            title: "EU NORDIC & EAST",
            subtitle: "League of ",
            image: require("../../assets/regions/flelyor.jpg"),
            imageALT: "League of Legends smurf account eune",
            type: [{
                stock: 0,
                quantity: 0,
                price: 18.95,
                be: 40000
            },
            {
                stock: 0,
                quantity: 0,
                price: 24.95,
                be: 50000
            },
            {
                stock: 0,
                quantity: 0,
                price: 28.95,
                be: 60000
            },
            {
                stock: 0,
                quantity: 0,
                price: 34.95,
                be: 70000
            }
        ]
        },
        {
            id: 4,
            title: "TURKEY",
            image: require("../../assets/regions/Shuriman.jpg"),
            imageALT: "League of Legends smurf account turkey",
            type: [{
                stock: 0,
                quantity: 0,
                price: 18.95,
                be: 40000
            },
            {
                stock: 0,
                quantity: 0,
                price: 24.95,
                be: 50000
            },
            {
                stock: 0,
                quantity: 0,
                price: 28.95,
                be: 60000
            },
            {
                stock: 0,
                quantity: 0,
                price: 34.95,
                be: 70000
            }
        ]
        },
        {
            id: 5,
            title: "OCEANIA",
            image: require("../../assets/regions/ionia.jpg"),
            imageALT: "League of Legends smurf account oceania",
            type: [{
                stock: 0,
                quantity: 0,
                price: 18.95,
                be: 40000
            },
            {
                stock: 0,
                quantity: 0,
                price: 24.95,
                be: 50000
            },
            {
                stock: 0,
                quantity: 0,
                price: 28.95,
                be: 60000
            },
            {
                stock: 0,
                quantity: 0,
                price: 34.95,
                be: 70000
            }
        ]
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
                        image: require("../../assets/regions/Noxus.jpg"),
                        imageALT: "League of Legends smurf account na",
                        type: [{
                            stock: 0,
                            quantity: 0,
                            price: 18.95,
                            be: 40000
                        },
                        {
                            stock: 0,
                            quantity: 0,
                            price: 24.95,
                            be: 50000
                        },
                        {
                            stock: 0,
                            quantity: 0,
                            price: 28.95,
                            be: 60000
                        },
                        {
                            stock: 0,
                            quantity: 0,
                            price: 34.95,
                            be: 70000
                        }
                    ]
                    },
    soldAccounts: [],
    userLogged: false
}

const cartReducer = (state = initState, action) => {
   
    if(action.type === ADD_TO_CART){
        let addedItem = state.products.find(item => item.id === action.id)
        let existed_item = state.addedItems.find(item => item.id === action.id)

        if(existed_item){ 
            let existed_item_be = existed_item.type.find(item => item.be === action.be)
            
            if(existed_item_be){
                if(existed_item_be.quantity < existed_item_be.stock){
                    existed_item_be.quantity = existed_item_be.quantity + 1
                    let newArr = []
                    for(let i = 0; i < existed_item.type.length; i++){
                        newArr.push(Object.assign({},existed_item.type[i]))
                    }
                    existed_item.type = newArr
                    
                    return  {...state,
                             total: Math.round((state.total + existed_item_be.price)*100)/100,
                             addedItems: state.addedItems.concat([]),
                             totalProducts: state.totalProducts + 1
                            }        
                }
            }else{
                let newArr = []
                for(let i = 0; i < existed_item.type.length; i++){
                    newArr.push(Object.assign({},existed_item.type[i]))
                }
                let aux = addedItem.type.find(item => item.be === action.be) 
                aux.quantity = 1
                newArr.push(Object.assign(aux))
                existed_item.type = newArr
                return  {...state,
                         total: Math.round((state.total + aux.price)*100)/100,
                         addedItems: state.addedItems.concat([]),
                         totalProducts: state.totalProducts + 1
                        }    
            }

            
        }else{
            let aux = addedItem.type.find(item => item.be === action.be) 
            aux.quantity = 1
            let auxArr = addedItem.type.filter(item => item.quantity > 0)
            
            let auxAdded = Object.assign({},addedItem)
            auxAdded.type = auxArr


            return  {...state,
                     total: Math.round((state.total + aux.price)*100)/100,
                     addedItems: [...state.addedItems, auxAdded],
                     totalProducts: state.totalProducts + 1
                    }
        }
        //check if the action id exists in the addedItems
        /*state.totalProducts++;
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
            
          }*/
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
        let realIteamToRemove = itemToRemove.type.find(item => item.be === action.be)
        state.totalProducts = state.totalProducts - realIteamToRemove.quantity;

        let newType = itemToRemove.type.filter(item => item.be !== action.be)
        itemToRemove.type = newType
        

        //calculating the total
        let newTotal = state.total - (realIteamToRemove.price * realIteamToRemove.quantity );
        
        return {
            ...state,
            addedItems: state.addedItems.concat([]),
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
        let addedItem_be = addedItem.type.find(item => item.be === action.be)
        //if the qt == 0 then it should be removed
        state.totalProducts--;
        if(addedItem_be.quantity === 1){
            addedItem_be.quantity = 0            
            let newItems = addedItem.type.filter(item => item.quantity > 0)
            addedItem.type = newItems
            let newTotal = state.total - addedItem_be.price
            newTotal = Math.round(newTotal * 100) / 100
            return {
                ...state,
                products: state.products.concat([]),
                addedItems: state.addedItems.concat([]),
                total: newTotal,
                totalProducts:state.totalProducts
            }
        } else {
            addedItem_be.quantity =  addedItem_be.quantity - 1
            let newArr = []
            for(let i = 0; i < addedItem.type.length; i++){
                newArr.push(Object.assign({},addedItem.type[i]))
            }
            addedItem.type = newArr
            let newTotal = state.total - addedItem_be.price
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