import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
//import {fetchAccounts} from '../store/actions/accountsActions'
import { connect } from 'react-redux'
import axios from 'axios'
import Router from 'next/router'
import Link from 'next/link';
import {NextSeo} from 'next-seo'
import '../assets/styles/font.min.css'
class Funnels extends Component {

  constructor(props){
    super(props);
    this.state = {
      funnel: []
    }

  }

  async componentDidMount() {
    if(!this.props.logged){
      Router.push({
        pathname: '/login'
    })
    }else {
    const {data} = await axios.get('/api/funnel');
    let columns = data.map((funnel) => {
        return {
          name: funnel.name,
          qty: funnel.qty
        }
    })
    this.setState(prevState => ({
      funnel: [...prevState.funnel, ...columns]
    }))
  }
  }

  render() {
    const columns = [
        {
         name: "name",
         label: "Name",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "qty",
         label: "Quantity",
         options: {
          filter: true,
          sort: false,
         }
        },
        
       ];
       

    return (
      <>
     <NextSeo    noindex={true}
                title='LolSmurf - Best League of Legends smurfs'
                description= 'Level 30 &amp; Unranked ✅- Lifetime Guarantee ✅ Instant Delivery ⚡⚡- 100% Buyer Satisfaction ✅'
                canonical="https://www.lolsmurf.net/funnel"
                />
        <MUIDataTable
        
        title={"Funnel"}
        data={this.state.funnel}
        columns={columns}
 
      />
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
)(Funnels)
