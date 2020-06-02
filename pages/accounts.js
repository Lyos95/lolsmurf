import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import {fetchAccounts} from '../store/actions/accountsActions'
import { connect } from 'react-redux'
import axios from 'axios'
import Router from 'next/router'
import Link from 'next/link';
import {NextSeo} from 'next-seo'

class Accounts extends Component {

  constructor(props){
    super(props);
    this.state = {
      accounts: []
    }

  }

  async componentDidMount() {
    if(!this.props.logged){
      Router.push({
        pathname: '/login'
    })
    }else {
    const {data} = await axios.get('/api/accounts');
    
    let columns = data.map((account) => {
        return {
          nickName: account.nickName,
          password: account.password,
            region: account.region,
             email: account.email,
            status: account.status
        }
    })
    this.setState(prevState => ({
      accounts: [...prevState.accounts, ...columns]
    }))
  }
  }

  render() {
    const columns = [
        {
         name: "nickName",
         label: "NickName",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "password",
         label: "Password",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "region",
         label: "Region",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
          name: "email",
          label: "Email",
          options: {
           filter: true,
           sort: false,
          }
         },
        {
         name: "status",
         label: "Status",
         options: {
          filter: true,
          sort: false,
         }
        },
       ];
       
       const oncli = (e) => {
        Router.push({
          pathname: '/update-account',
          query: { nickName: e[0] },
      })
                  
       }
       
       const options = {
         filterType: 'checkbox',
         onRowClick: oncli
       };
    return (
      <>
     <NextSeo    noindex={true}
                title='▷LolSmurf - Best League of Legends smurfs'
                description= 'Level 30 &amp; Unranked ✅- Lifetime Guarantee ✅ Instant Delivery ⚡⚡- 100% Buyer Satisfaction ✅'
                canonical="'https://www.lolsmurf.net/accounts"
                />
        <MUIDataTable
        
        title={"Accounts"}
        data={this.state.accounts}
        columns={columns}
        options={options}
      />
      <Link href='/add-accounts'><a className="btn btn-light">Add Accounts</a></Link>
      </>
    );
  }
}


const mapStateToProps = (state) => {
  return {
      logged: state.userLogged
  }
}

export default connect(
  mapStateToProps
)(Accounts)
