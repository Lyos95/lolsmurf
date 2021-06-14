import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import {NextSeo} from 'next-seo'
import Link from 'next/link';
import BlogSidebar from '../components/blog/BlogSidebar';
class BlogDetailsTwo extends Component {
    render() {

        function fromBanner(name,value) {
            document.cookie = name + "=" + (value || "");
        }

        return (
            <React.Fragment>
                <NextSeo
                title='How to buy a League of Legends account SAFELY'
                description= 'These are the best tips for buying a League of Legends account safely'
                canonical="https://www.lolsmurf.net/buy-lol-account-safe"
                />
                <Navbar />
                <Breadcrumb title='How to buy a League of Legends account SAFELY' />
                <section className="blog-details-area ptb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-details">
                                <div className="article-img">
                                    <img src={require("../assets/blog/ashe-high-noon1.webp")} alt="best-champs-to-carry-low-elo" />
                                </div>

                                <div className="article-content">
                                    <ul className="entry-meta">
                                        <li>
                                            <i className="far fa-user"></i> 
                                            <Link href="#">
                                                <a>Admin</a>
                                            </Link>
                                        </li>
                                        <li><i className="far fa-calendar-alt"></i> July 14, 2020</li>
                                    </ul>

                                    <h1>How to buy a League of Legends account SAFELY</h1>

                                    <p>In this article we are going to show you what do you need to take into cosideration when you are trying to buy a League of Legends</p>
                                    <Link href="/league-of-legends-smurfs">
                                        <img style={{marginBottom:'20px',cursor:'pointer'}} onClick={()=>{fromBanner('funnel','buylolaccountsafe')}} src={require("../assets/blog/buy-lol-smurf.jpg")} />
                                    </Link>

                                    <p> If you are afraid of being scammed you need to be careful where do you buy your smurf accounts, <Link style={{display : 'inline-block'}} href="/league-of-legends-smurfs"><a style={{display : 'inline-block'}}>LolSmurf </a></Link> 
                                      is one of the <b>most reputable websites out there where you can safely buy your accounts </b>but there are others and we are going to teach you how to
                                     identify them!
                                    </p>
                                    <h3>Find a Reputable Store</h3>
                      
                                    <p>The first thing first, you need to find a reputable LoL Account store by searching on google and check if they have a trustworthy League of legends 
                                        account store. How are we gonna do it? Make sure they have a <b>trustworthy review provider like Trustpilot </b>and not by the store 
                                        itself (such reviews can be faked), so if anyone had have any problem with the store you will be able to see what kind of problems you can face when you 
                                        buy an account in this store.</p>

                                    <h3>Check if they sell the type of LoL accounts that you need</h3>
                                    <p> Many League of Legends account sellers sell <b>already verified accounts (lol account with already a verified email) which is a red flag</b>. If you 
                                        want your own that League of legends account so you can change it's password, email and avoid anyone could steal your account in the future!
                                        Then be mindful about this topic and only <b>buy lol smurfs with an unverified email account </b>
                                         You should be looking for LoL Smurf Shops who sell Unverified and Unranked accounts like <Link style={{display : 'inline-block'}} href="/league-of-legends-smurfs"><a style={{display : 'inline-block'}}>LolSmurf</a></Link>
                                    </p>
                                    <Link href="/league-of-legends-smurfs">
                                        <img style={{marginBottom:'20px',cursor:'pointer'}} onClick={()=>{fromBanner('funnel','buylolaccountsafe')}} src={require("../assets/blog/buy-lol-smurf.jpg")} />
                                    </Link>

                                    <h3>Make sure Paypal is supported</h3>
                                    <p> A lot of people overlook this important step. If you're gonna buy a LoL Account, Paypal is the best option by far, <b>Paypal offers a really great
                                         protection for buyers</b> just in case they get scammed by any league of legends smurf store.
                                    </p>

                                        
                                    <h3>Look for the best prices</h3>
                                    <p>  Do some research! If you check a couple of websites and compare the prices,
                                          you will be able to save some money.So try to always compare League of legends account stores!</p>
                                    <p>
                                     Buying a League of legends accounts is relatively safe to do. Just be careful with the scams and make sure to follow our guide and you'll be able to get your league of legends smurf without any problem!
                                     If you haven't found a suitable website that has all the requirements you need, make sure to check out our website <Link style={{display : 'inline-block'}} href="/league-of-legends-smurfs"><a style={{display : 'inline-block'}}>LolSmurf</a></Link>. We offer the best Customer Service out there
                                      . And we are also one of the most reputable websites out there!
                                    </p>
                                    <h3>Thanks for reading</h3>
                                    <p> Thanks for reading! If you are thinking about climbing in solo queue you should practice these champs in a league of legends smurf account,
                                        so your main account's elo won't be affected by this. If you are thinking about getting one you can buy a lol smurf account! <Link href="/league-of-legends-smurfs">Just click here if you are interested</Link>
                                    </p>
                                    <Link href="/">
                                        <img style={{marginBottom:'20px',cursor:'pointer'}} onClick={()=>{fromBanner('funnel','buylolaccountsafe')}} src={require("../assets/blog/buy-lol-smurf.jpg")} />
                                    </Link>
                                </div>
                            </div>

                           </div>
                        
                        <div className="col-lg-4">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </section>
                <Facility />
                <Footer />
            </React.Fragment>
        );
    }
}

export default BlogDetailsTwo;