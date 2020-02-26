import React, { useState,useEffect, Fragment } from "react";

import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import axios from 'axios'
import Router from 'next/router'


const UpdateAccount = (props) => {

  const router = useRouter()
  
  
  const [inputFields, setInputFields] = useState(
    { _id:'' ,nickName: '', password: '', region: 'EUW', status: 'NOT_SOLD', email: '' }
  );

  useEffect(() => {
    if(!props.logged){
      Router.push({
        pathname: '/login'
    })
    }else {
      axios.get('/api/accounts/'+router.query.nickName).then((response) => {
        let account = response.data[0];
        setInputFields({
          _id: account._id,
          nickName: account.nickName,
          password: account.password,
            region: account.region,
              email: account.email,
            status: account.status
          }
        )
      })
    }
    
  }, [])
  const handleInputChange = (event) => {  
    
    const values = {...inputFields};
    if (event.target.name === "nickName") {
      values.nickName = event.target.value;
    } else if(event.target.name === 'password'){
      values.password = event.target.value;
    } else if(event.target.name === 'region'){
      values.region = event.target.value;
    } else if(event.target.name === 'status'){
      values.status = event.target.value;
    } else if(event.target.name === 'email'){
      values.email = event.target.value;
    }

    setInputFields(values);
  };

  const handleSubmit = e => {
    
    e.preventDefault();
    axios.post('/api/accounts/update-account',inputFields)
    Router.push({
      pathname: '/accounts'
  })

  };

  return (
    <>
     <form className="col-sm-6 mx-auto mt-4" >
        <div className="form-group">
            <label htmlFor="nickName">NickName</label>
            <input 
              type="text" 
              value = {inputFields.nickName}
              onChange={(e)=>{handleInputChange(e)}} 
              id="nickName"
              name="nickName"
              className="form-control" 
              placeholder="Nickname"
            />
        </div>
        <div className="form-group">
            <label htmlFor="password-update">Password</label>
            <input 
              type="text" 
              value = {inputFields.password}
              onChange={(e)=>{handleInputChange(e)}} 
              id="password"
              name="password" 
              className="form-control"
              placeholder="Password"
            />
        </div>
        <div className="form-group">
            <label htmlFor="region">Region</label>
            <select 
              className="form-control" 
              value = {inputFields.region}
              name="region" 
              id="region"
              onChange={(e)=>{handleInputChange(e)}} 
            >
                <option value="EUW">EUW</option>
                <option value="EUNE">EUNE</option>
                <option value="TURK">TURK</option>
                <option value="NA">NA</option>
                <option value="PBE">PBE</option>
            </select>
        </div>
        <div className="form-group">
            <label htmlFor="status">Status</label>
            <select 
              className="form-control" 
              value = {inputFields.status}
              name="status" 
              id="status"
              onChange={(e)=>{handleInputChange(e)}} 
            >
                <option value="NOT_SOLD">NOT SOLD</option>
                <option value="SOLD">SOLD</option>
                <option value="BANNED">BANNED</option>
                <option value="PENDING_TO_REFUND">PENDING TO REFUND</option>
                <option value="ACCOUNT_REFUNDED">ACCOUNT REFUNDED</option>
                <option value="ACCOUNT_NOT_REFUNDED">ACCOUNT NOT REFUNDED</option>
            </select>
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              className="form-control" 
              value = {inputFields.email}
              name="email"
              id="email" 
              rows="3"
              onChange={(e)=>{handleInputChange(e)}} 
            />
        </div>

        <div className="submit-button">
          <button
            className="btn btn-primary mr-2"
            type="submit"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>

        <br/>
        <pre>
          {JSON.stringify(inputFields, null, 2)}
        </pre>
     </form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
      logged: state.userLogged
  }
}

export default connect(
  mapStateToProps
)(UpdateAccount)