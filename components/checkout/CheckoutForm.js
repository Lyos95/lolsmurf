import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import OrderSummary from './OrderSummary';
import Payment from '../payments/Payment';
import useForm from './userForm';
import axios from 'axios';
import { ToastContainer, toast, Slide } from 'react-toastify';
import {verifyTransaction ,checkIfWeHaveThatAmountOfAccs} from '../../store/actions/accountsActions'
import Router from 'next/router'


function CheckoutForm({total, shipping,verifyTransaction,checkIfWeHaveThatAmountOfAccs,products}) {

    
    
    const [email,setEmail] = useState('');
    const [inValidEmail,setInValidEmail] = useState('');
    const [inValidEmailBoolean,setInValidEmailBoolean] = useState(false);
    const [confirmEmail,setConfirmEmail] = useState('');
    const [inValidConfirmEmail,setInValidConfirmEmail] = useState('');
    const [inValidConfirmEmailBoolean,setInValidConfirmEmailBoolean] = useState(false);
    const [sameEmail,setSameEmail] = useState(false)
    const [notSameEmailText,setNotSameEmailText] = useState('')

    useEffect(() => {
        
            let resultado = async () =>{
              let approval =  await checkIfWeHaveThatAmountOfAccs()
              
              if(!approval){
                toast.info('We have updated your cart, we no longer have that amount of accounts', {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                });
            }
        }
            resultado()
          
        
        

       // if(sameEmail){ 
                      
           if(total > 0){
            paypal.Buttons({createOrder: async function(data, actions) {
                // This function sets up the details of the transaction, including the amount and line item details.
                return actions.order.create({
                  purchase_units: [{
                    amount: {
                      value: total,
                      currency_code: "USD"
                    }
                  }]
                });
              },
              onApprove: async function(data, actions) {
                  
                      // This function captures the funds from the transaction.
                      return actions.order.capture().then(async function(details) {
                        // This function shows a transaction success message to your buyer.
                        
                        let response = await verifyTransaction(data.orderID,details.payer.email_address,total,products)
                        
                          //Llamada al endpoint para traer las cuentas para el usuario
                          Router.push({
                            pathname: '/thankyou'
                        })
                      });
                   
                  }
                  
                  
            }).render('#paypal-button-container');
     /*   }else{
            console.log('eliminando...');
            if(document.getElementById('paypal-button-container')){
                document.getElementById('paypal-button-container').innerHTML= ''
            }
        }*/
    }
    }, [sameEmail,total])

    function handlechange (event){
        if(event.target.name === 'email'){
            setEmail(event.target.value)
            let regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            let aux = false;
            if(!regex.test(event.target.value)){
                setInValidEmail('Invalid Email')
                setInValidEmailBoolean(false)   
                setSameEmail(false)             
            }else {
                setInValidEmail('')
                setInValidEmailBoolean(true)
                aux = true
            }
            
            if(aux && inValidConfirmEmailBoolean){                
                if(event.target.value !== confirmEmail){   
                    setNotSameEmailText("Emails don't match")
                    setSameEmail(false)
                }else{
                    setSameEmail(true)
                    setNotSameEmailText('')
                }
            }else {
                setNotSameEmailText('')
                setSameEmail(false)
            }

        }else if(event.target.name === 'confirmEmail'){
            let aux = false;
            setConfirmEmail(event.target.value)
            let regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            if(!regex.test(event.target.value)){
                setInValidConfirmEmail('Invalid Email')
                setInValidConfirmEmailBoolean(false)
            }else {
                aux = true
                setInValidConfirmEmail('')
                setInValidConfirmEmailBoolean(true)
            }

            if(inValidEmailBoolean && aux){                
                if(email !== event.target.value){
                    setNotSameEmailText("Emails don't match")
                    setSameEmail(false)
                }else{
                    setSameEmail(true)
                    setNotSameEmailText('')
                }
            }else {
                setSameEmail(false)
                setNotSameEmailText('')
            }
        }
        
        
        

        
    }
    function handleSubmit() {
    }

    let totalAmount = (total + shipping).toFixed(2)
    
    const stateSchema = {
        firstName: {value: "", error: ""},
        lastName: {value: "", error: ""},
        email: {value: "", error: ""},
    };

    const validationStateSchema = {
        email: {
            required: true,
            validator: {
                regEx: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                error: "Invalid email format."
            }
        }
    };

    const { state, handleOnChange, handleOnSubmit, disable } = useForm (
        stateSchema,
        validationStateSchema,
        handleSubmit
    );
    
    const errorStyle = {
        color: "red",
        fontSize: "13px"
    };
    

    return (
        
        <section className="checkout-area ptb-60">
            <div className="container">

                <form onSubmit={handleOnSubmit}>
                    <div className="row">


                        <div className="col-lg-6 col-md-12">
                            <div className="order-details">
                                <h3 className="title">Your Order</h3>
                                <ToastContainer transition={Slide} />
                                <OrderSummary />

                                <div className="payment-method">
                                <div id="paypal-button-container"></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

const mapStateToProps = (state) => {
    return {
        total: state.total,
        shipping: state.shipping,
        products: state.addedItems
    }
}

export default connect(
    mapStateToProps,
    {verifyTransaction,checkIfWeHaveThatAmountOfAccs}
)(CheckoutForm)

/*

                        <div className="col-lg-6 col-md-12">
                            <div className="billing-details">
                                <h3 className="title">Billing Details</h3>

                                <div className="row">
                                  <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Email Address <span className="required">*</span></label>
                                            <input 
                                                type="email" 
                                                name="email"
                                                className="form-control" 
                                                onChange={handlechange}
                                                value={email}
                                            />
                                            {inValidEmail && <p style={errorStyle}>{inValidEmail}</p>}
                                            {notSameEmailText && <p style={errorStyle}>{notSameEmailText}</p>}
                                            
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Confirm your Email Address <span className="required">*</span></label>
                                            <input 
                                                type="email" 
                                                name="confirmEmail"
                                                className="form-control" 
                                                onChange={handlechange}
                                                value={confirmEmail}
                                            />
                                            {inValidConfirmEmail && <p style={errorStyle}>{inValidConfirmEmail}</p>}
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                                    */