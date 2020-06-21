import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import {NextSeo} from 'next-seo'

class Index extends Component {
    render() {
        return (
            <React.Fragment>
           
                <NextSeo
                title='▷LolSmurf - Best League of Legends smurfs'
                description= 'Level 30 &amp; Unranked ✅- Lifetime Guarantee ✅ Instant Delivery ⚡⚡- 100% Buyer Satisfaction ✅'
                canonical="'https://www.lolsmurf.net/contact-us"
                />
                <Navbar />
                <Breadcrumb title="Contact Us" />
                <section className="contact-area ptb-60">
                    <div className="container">
                        <div className="section-title">
                            <h2><span className="dot"></span> Contact Us</h2>
                        </div>

                        <div className="row">
                            <div className="col-lg-5 col-md-12">
                                <div className="contact-info">
                                    <h3>Here to Help</h3>
                                    <p>Have a question? You may find an answer in our FAQs. But you can also contact us.</p>

                                    <ul className="contact-list">
                                        <li><i className="far fa-envelope"></i> Email Us: <a href="mailto:support@lolsmurf.net">support@lolsmurf.net</a></li>
                                    </ul>

                                    

                                </div>
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

export default Index;