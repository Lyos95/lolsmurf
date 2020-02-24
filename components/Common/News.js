import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1024: {
            items: 3,
        }
    }
}

class News extends Component {
    state = { 
        display: false,
        panel: true
    };

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {
        return (
            <section className="news-area ptb-60">
                <div className="container">
                    <div className="section-title">
                        <h2><span className="dot"></span> League of Legends Blog</h2>
                    </div>

                    <div className="row">
                        {this.state.display ? <OwlCarousel 
                            className="news-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12 col-md-12">
                                <div className="single-news-post">
                                    <div className="news-image">
                                        <Link href="#">
                                            <a>
                                                <img src={require("../../assets/pictures/Tipsforthejungle.png")} alt="image" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="news-content">
                                        <h3>
                                            <Link href="#">
                                                <a>Master the jungle</a>
                                            </Link>
                                        </h3>
                                        <span className="author">By <a href="#">Lyos</a></span>
                                        <p>Let's try to improve your gameplay as a jungle with this simple tips that most people doesn't apply in their games!</p>
                                        <Link href="#">
                                            <a className="btn btn-light">Read More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-news-post">
                                    <div className="news-image">
                                        <Link href="#">
                                            <a>
                                                <img src={require("../../assets/pictures/enjoythegame.png")} alt="image" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="news-content">
                                        <h3>
                                            <Link href="#">
                                                <a>Enjoy League of legends</a>
                                            </Link>
                                        </h3>
                                        <span className="author">By <a href="#">Lyos</a></span>
                                        <p>One of the keys for winning games is the attitude</p>
                                        <Link href="#">
                                            <a className="btn btn-light">Read More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-news-post">
                                    <div className="news-image">
                                        <Link href="#">
                                            <a>
                                                <img src={require("../../assets/pictures/snowballgames.png")} alt="image" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="news-content">
                                        <h3>
                                            <Link href="#">
                                                <a>Learn how to snowball your games in League of Legends</a>
                                            </Link>
                                        </h3>
                                        <span className="author">By <a href="#">Lyos</a></span>
                                        <p>A couple of simple tips by a master player on how to snowball your games</p>
                                        <Link href="#">
                                            <a className="btn btn-light">Read More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-news-post">
                                    <div className="news-image">
                                        <Link href="#">
                                            <a>
                                                <img src={require("../../assets/pictures/rethinkeverygame.png")} alt="image" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="news-content">
                                        <h3>
                                            <Link href="#">
                                                <a>Why watching your games is so important?</a>
                                            </Link>
                                        </h3>
                                        <span className="author">By <a href="#">Lyos</a></span>
                                        <p>Have you ever thought about re-watching your games after you lost or even after a tight victory? Let me explain you the importance of this</p>
                                        <Link href="#">
                                            <a className="btn btn-light">Read More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-news-post">
                                    <div className="news-image">
                                        <Link href="#">
                                            <a>
                                                <img src={require("../../assets/pictures/playother.png")} alt="image" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="news-content">
                                        <h3>
                                            <Link href="#">
                                                <a>Why playing with your friends makes the game more enjoyable!</a>
                                            </Link>
                                        </h3>
                                        <span className="author">By <a href="#">Lyos</a></span>
                                        <p>After taking the game really serious for quite a long time I decided to start playing more for fun with my friends and my rank went up!!</p>
                                        <Link href="#">
                                            <a className="btn btn-light">Read More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>
            </section>
        );
    }
}

export default News;
