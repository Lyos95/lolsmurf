import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from '../components/Layout/Navbar';
import Breadcrumb from '../components/Common/Breadcrumb';
import {connect} from 'react-redux'
import {fetchAccount} from '../store/actions/accountsActions'
import Router from 'next/router'
import {NextSeo} from 'next-seo'

class Index extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    
    render() {

        
        return (
            
            <React.Fragment>
                
                <NextSeo    noindex={true}
                title='LolSmurf - Best League of Legends smurfs'
                description= 'Level 30 &amp; Unranked ✅- Lifetime Guarantee ✅ Instant Delivery ⚡⚡- 100% Buyer Satisfaction ✅'
                canonical="https://www.lolsmurf.net/login"
                />
                <Navbar />
                <Breadcrumb title="Login" />
                <section className="login-area ptb-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="login-content">
                                    <div className="section-title">
                                        <h2><span className="dot"></span> Login</h2>
                                    </div>

                                    <form className="login-form">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input onChange={(event)=>{
                                                    this.setState({...this.state,email: event.target.value});
                                            }} type="email" className="form-control" placeholder="Enter your name" id="email" name="email" value={this.state.email}/>
                                        </div>

                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" onChange={(event)=>{
                                                    this.setState({password:event.target.value})
                                            }} className="form-control" placeholder="Enter your password" id="password" name="password" value={this.state.password}/>
                                        </div>

                                        <div onClick={() => {                                            
                                            this.props.fetchAccount(this.state);
                                            Router.push({
                                                pathname: '/accounts'
                                            })
                                        }} className="btn btn-primary">Login</div>                                        
                                    </form>
                                </div>
                            </div>

                           
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userLogged
    }
}

const mapDispatchToProps= (dispatch) => {
    return {
        fetchAccount: (user) => { dispatch(fetchAccount(user)) }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Index);
