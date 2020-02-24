import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    items: 1,
    autoplay: true,
    navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>"
    ]
}

class Testimonials extends Component {

    state = { 
        display: false,
        panel: true
    };

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {
        return (
            <section className="testimonials-area ptb-60">
                <div className="container">
                    {this.state.display ? <OwlCarousel 
                        className="testimonials-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="single-testimonials">
                            <div className="client-image">
                                <img src={require("../../assets/testimonial/owner.jpg")} alt="image" />
                            </div>

                            <p>As the owner of the website I can guarentee you an insta delivery for your League of Legends smurf, as soon as you buy it you will recieve all the information required to log in.</p>
                            <div className="client-info">
                                <h4>Lyos</h4>
                                <span>Founder</span>
                            </div>
                        </div>

                        <div className="single-testimonials">
                            <div className="client-image">
                                <img src={require("../../assets/testimonial/owner2.jpg")} alt="image" />
                            </div>

                            <p>Why did I create this website? I was tired of scams so I decided to sell league of legends smurfs so people can have a trusted place to buy their accounts</p>
                            <div className="client-info">
                                <h4>Lyos</h4>
                                <span>Founder</span>
                            </div>
                        </div>

                        <div className="single-testimonials">
                            <div className="client-image">
                                <img src={require("../../assets/testimonial/owner3.jpg")} alt="image" />
                            </div>

                            <p>We securee you full transparency in the proccess of buying your new league of legends lvl 30 account, just choose your region, choose the desire amount of accounts you want, pay and that's it! You will recieve your league of legends account immediately</p>

                            <div className="client-info">
                                <h4>Lyos</h4>
                                <span>Founder</span>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </section>
        );
    }
}

export default Testimonials;
