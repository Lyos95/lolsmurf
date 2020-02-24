import React, { useState,useEffect, Fragment } from "react";
import {saveAccounts} from '../store/actions/accountsActions';
import { connect } from 'react-redux'
import Router from 'next/router'


const AddAccounts = (props) => {
  const [inputFields, setInputFields] = useState([
    { nickName: '', password: '',region: 'EUW' }
  ]);

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ nickName: '', password: '',region: 'EUW' });
    setInputFields(values);
  };

  const handleRemoveFields = index => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === "nickName") {
      values[index].nickName = event.target.value;
    } else if(event.target.name === 'password'){
      values[index].password = event.target.value;
    } else{
      values[index].region = event.target.value;
    }

    setInputFields(values);
  };

  const handleSubmit = e => {
    e.preventDefault();
    let defAccountsArray = inputFields.filter(account => {
      if(account.nickName !== '' && account.password !== ''){
        return account
      }
    })
    props.saveAccounts(defAccountsArray);

  };

  useEffect(() => {
    console.log(props);
    if(!props.logged){
      Router.push({
        pathname: '/login'
    })}

    
  }, [])



  return (
    <>
      <h1>Add Accounts</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}>
              <div className="form-group col-sm-4">
                <label htmlFor="nickName">NickName</label>
                <input
                  type="text"
                  className="form-control"
                  id="nickName"
                  name="nickName"
                  value={inputField.nickName}
                  onChange={event => handleInputChange(index, event)}
                />
              </div>
              <div className="form-group col-sm-4">
                <label htmlFor="password">Password</label>
                <input
                  type="text" 
                  className="form-control" 
                  id="password"
                  name="password"
                  value={inputField.password}
                  onChange={event => handleInputChange(index, event)}
                />
              </div>
              <div className="form-group col-sm-2">
                <label htmlFor="region">Region</label>
                <select  
                  className="form-control"
                  value = {inputField.region}
                  onChange={event => handleInputChange(index, event)}
                >
                  <option value="EUW">EUW</option>
                  <option value="EUNE">EUNE</option>
                  <option value="TURK">TURK</option>
                  <option value="NA">NA</option>
                  <option value="PBE">PBE</option>
                </select>
              
              </div>
              <div className="form-group col-sm-2">
                <button
                  className="btn btn-link"
                  type="button"
                  onClick={() => handleRemoveFields(index)}
                >
                  -
                </button>
                <button
                  className="btn btn-link"
                  type="button"
                  onClick={() => handleAddFields()}
                >
                  +
                </button>
              </div>
            </Fragment>
          ))}
        </div>
        <div className="submit-button">
          <button
            className="btn btn-primary mr-2"
            type="submit"
            onSubmit={handleSubmit}
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
  console.log(state.userLogged);
  
  return {
      logged: state.userLogged
  }
}

export default connect(
  mapStateToProps,
  {saveAccounts}
)(AddAccounts)