import React, { Component } from 'react';
import Link from 'next/link';

class BlogSidebar extends Component {
    render() {
        return (
            <aside className="widget-area" id="secondary">
                <section className="widget widget_comero_posts_thumb">
                    <h3 className="widget-title">Popular Posts</h3>

                    <article className="item">
                        <Link href="#">
                            <a className="thumb">
                                <span className="fullimage cover bg1" role="img"></span>
                            </a>
                        </Link>

                        <div className="info">
                            <time>June 30, 2020</time>
                            <h4 className="title usmall">
                                <Link href="/product-details">
                                    <a>Buy your smurf account now.</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link href="#">
                            <a className="thumb">
                                <span className="fullimage cover bg2" role="img"></span>
                            </a>
                        </Link>

                        <div className="info">
                            <time>June 30, 2020</time>
                            <h4 className="title usmall">
                                <Link href="/product-details">
                                    <a>Buy you smurf now</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link href="#">
                            <a className="thumb">
                                <span className="fullimage cover bg3" role="img"></span>
                            </a>
                        </Link>

                        <div className="info">
                            <time>June 30, 2020</time>
                            <h4 className="title usmall">
                                <Link href="/">
                                    <a>What is LolSmurf?</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>
                </section>

             

                <section className="widget widget_recent_entries">
                    <h3 className="widget-title">Recent Posts</h3>

                    <ul>
                        <li>
                            <Link href="/">
                                <a>How to Become a Successful Jungler</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>What are the best champions to climb in solo queue?</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Best place to buy league of legends smurf</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Best place to buy lol lvl 30 account</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Farm like a pro</a>
                            </Link>
                        </li>
                    </ul>
                </section>


           </aside>
        );
    }
}

export default BlogSidebar;