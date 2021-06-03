import React, { Component } from 'react';
import Link from 'next/link';

export class BlogGridOneColumn extends Component {
    render() {
        return (
            <section className="news-area ptb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 col-md-12 offset-md-0">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="/which-league-of-legends-champion-should-i-play">
                                        <a><img src={require("../../assets/blog/pyke.jpg")} alt="image" /></a>
                                    </Link>
                                    <div className="post-tag">
                                        <Link href="/which-league-of-legends-champion-should-i-play">
                                            <a>Improve</a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">05 Sep, 2020</span>
                                    <h3>
                                        <Link href="/which-league-of-legends-champion-should-i-play">
                                            <a>Which League of Legends champion should I play ?</a>
                                        </Link>
                                    </h3>
                                    <p>In this article we are going to discover what are the best League of Legends solo queue champions for you that will help you to rank up in solo queue</p>

                                    <Link href="/which-league-of-legends-champion-should-i-play"> 
                                        <a className="read-more-btn">
                                            Read More <i className="icofont-double-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="/buy-lol-account-safe">
                                        <a><img src={require("../../assets/blog/ashe-high-noon1.webp")} alt="image" /></a>
                                    </Link>

                                    <div className="post-tag">
                                        <Link href="/buy-lol-account-safe">
                                            <a>Tips</a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">14 July, 2020</span>
                                    <h3>
                                        <Link href="/buy-lol-account-safe">
                                            <a>How to buy a League of Legends account SAFELY</a>
                                        </Link>
                                    </h3>
                                    <p>In this article we are going to show you what do you need to take into cosideration when you are trying to buy a League of Legends</p>
                                    
                                    <Link href="/buy-lol-account-safe"> 
                                        <a className="read-more-btn">
                                            Read More <i className="icofont-double-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="/best-champs-to-carry-low-elo">
                                        <a><img src={require("../../assets/blog/champion-yasuo-spirit-blossom-splash.jpg")} alt="image" /></a>
                                    </Link>

                                    <div className="post-tag">
                                        <Link href="/best-champs-to-carry-low-elo">
                                            <a>Improve</a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">June 30, 2020</span>
                                    <h3>
                                        <Link href="/best-champs-to-carry-low-elo">
                                            <a>Best champs to carry LOW ELO</a>
                                        </Link>
                                    </h3>
                                    <p>In this article we are going to see what are the best League of Legends solo queue champions for top, mid, jungle and bot that will help you to rank up in solo queue</p>
                                    
                                    <Link href="/best-champs-to-carry-low-elo"> 
                                        <a className="read-more-btn">
                                            Read More <i className="icofont-double-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="/how-do-i-improve-faster-in-league-of-legends">
                                        <a><img src={require("../../assets/blog/tft-legends.jpg")} alt="image" /></a>
                                    </Link>

                                    <div className="post-tag">
                                        <Link href="/how-do-i-improve-faster-in-league-of-legends">
                                            <a>Improve</a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">June 30, 2020</span>
                                    <h3>
                                        <Link href="/how-do-i-improve-faster-in-league-of-legends">
                                            <a>How Do I Improve Faster in League of Legends</a>
                                        </Link>
                                    </h3>
                                    <p>League of Legends has so many different things that will keep you engaged with the game. Well, League of Legends
                                         is quite difficult to play at first. So if you are a noob or you are starting to play LOL...</p>
                                    
                                    <Link href="/how-do-i-improve-faster-in-league-of-legends"> 
                                        <a className="read-more-btn">
                                            Read More <i className="icofont-double-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
{/**
 *   <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="/blog-details">
                                        <a><img src={require("../../assets/blog/champion-teemo-spirit-blossom-splash.jpg")} alt="image" /></a>
                                    </Link>

                                    <div className="post-tag">
                                        <Link href="#">
                                            <a>Imrpove</a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="blog-post-content">
                                    <span className="date">25 Feb, 2020</span>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a></a>
                                        </Link>
                                    </h3>
                                    <p></p>
                                    
                                    <Link href="/blog-details"> 
                                        <a className="read-more-btn">
                                            Read More <i className="icofont-double-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

 * 
 */}
                          
                           
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BlogGridOneColumn;
