import {
    FETCH_ACCOUNT,
    FETCH_ACCOUNTS_COUNTER,
    SAVE_CLIENT_ACCOUNTS,
    RESET,
    CHECK_IF_ENOUGH_ACCS
} from './action-types/account-actions'
import axios from 'axios';
import bcrypt from 'bcryptjs';

export const fetchAccount = (account) => async (dispatch) => {

    const res = await axios.post('/api/user/login', {
        email: account.email,
        password: account.password
    });

    dispatch({ type: FETCH_ACCOUNT, payload: res.data });
};


export const fetchAccountsCounter = () => async (dispatch, getState) => {
    let enumRegions = {
        "EU WEST": "EUW",
        "NA": "NA",
        "EU NORDIC & EAST": "EUNE",
        "TURKEY": "TURK",
        "PBE": "PBE"
    }
    const { data } = await axios.post('/api/accounts/allAccounts', {});

    let products = getState().products.map((product) => {
        return { ...product, stock: data[enumRegions[product.title]] }
    })

    dispatch({ type: FETCH_ACCOUNTS_COUNTER, payload: products });
}

export const checkIfWeHaveThatAmountOfAccs = () => async(dispatch,getState) => {

    
    let enumRegions = {
        "EU WEST": "EUW",
        "NA": "NA",
        "EU NORDIC & EAST": "EUNE",
        "TURKEY": "TURK",
        "PBE": "PBE"
    }
    let tran = true
    const { data } = await axios.post('/api/accounts/allAccounts', {});

    let products = getState().products.map((product) => {
        return { ...product,quantity:0, stock: data[enumRegions[product.title]] }
    })

    let addedItems = getState().addedItems
    let newtotalProducts = getState().totalProducts
    let newSelectedProduct = Object.assign({},getState().selectedProduct)

    let newTotal = getState().total
    for(let i = 0; i<addedItems.length; i++) {
        for(let j=0; j<products.length; j++){
            
            if(addedItems[i].title === products[j].title && products[j].stock < addedItems[i].quantity){
                newTotal = newTotal - (addedItems[i].quantity-products[j].stock)*products[j].price
                newtotalProducts = newtotalProducts - (addedItems[i].quantity-products[j].stock)
             
                addedItems[i].quantity = products[j].stock
                addedItems[i].stock = products[j].stock
                tran = false
                if(products[j].title === newSelectedProduct.title){
                    newSelectedProduct.stock = products[j].stock
                    
                        newSelectedProduct.quantity = 0
                    
                }
                
                
            }
        }
    }
    addedItems = addedItems.filter(item => item.stock > 0)

    let addedItemsCopy = addedItems.map(item => item) 
    let productsCopy = products.map(item => item) 
    dispatch({ type: CHECK_IF_ENOUGH_ACCS, payload: {
                                                     addedItems:addedItemsCopy,
                                                     products: productsCopy,
                                                     total: newTotal,
                                                     totalProducts: newtotalProducts,
                                                     selectedProduct: newSelectedProduct
                                                    } });

    return tran
}

export const verifyTransaction = (orderID, email, total, products) => async (dispatch) => {
    let response = await axios.post('/api/paypal-transaction-complete', {
        orderID: orderID,
        email: email,
        amount: total,
        products: products
    });
    
    dispatch({type: RESET, payload:{}})
    dispatch({type: SAVE_CLIENT_ACCOUNTS, payload:response.data.accounts})
    
}


export const saveAccounts = (products) => async (dispatch) => {
    let response = axios.post('/api/accounts/saveAccounts',products);
}

export const fetchClientAccounts = (accounts) => async(dispatch) => {

    
}

