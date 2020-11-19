import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import Testimonials from '../components/Common/Testimonials';
import {NextSeo} from 'next-seo'

class Index extends Component {
    render() {
        return (
            <React.Fragment>
              

                <NextSeo 
                title='LolSmurf - About - Best League of Legends smurfs'
                description= 'Level 30 &amp; Unranked ✅- Lifetime Guarantee ✅ Instant Delivery ⚡⚡- 100% Buyer Satisfaction ✅'
                canonical="https://www.lolsmurf.net/about"
                />
                <Navbar />
                <Breadcrumb title="About Us" />
                <section className="about-area ptb-60">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <h2>About Our Store</h2>
                                    <p>We are the biggest, safest and best place in the whole world to buy League of Legends smurfs! If you are in need of a new smurf for trying new champs, improve your skills without affecting your real account elo, this is your store!</p>
                                    <p>We offer a lifetime guarantee, so if your account gets banned we will give you a fresh new account, so you don't have to worry about anything but playing and improving your gameplay!</p>
                                    <p>Our catalog is pretty wide, we offer accounts in all the main countries, EUW, EUNE, Turkey, NA and Oceania! What are you waiting?! Join us and smurf your enemies!</p>
                                    <div className="signature mb-0">
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="about-image">
                                    <img src={require("../assets/pictures/swain.jpg")} className="about-img1" alt="swain" />

                                    <img src={require("../assets/pictures/noxus.jpg")} className="about-img2" alt="noxus" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Testimonials />
                <Facility />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;
