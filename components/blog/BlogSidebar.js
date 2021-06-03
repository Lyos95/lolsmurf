import React, { Component } from 'react';
import Link from 'next/link';

class BlogSidebar extends Component {
    render() {
        return (
            <aside className="widget-area" id="secondary">
                <section className="widget widget_comero_posts_thumb">
                    <h3 className="widget-title">Popular Posts</h3>

                    <article className="item">
   

                        <div className="info">
                            <time>June 30, 2020</time>
                            <h4 className="title usmall">
                                <Link href="/league-of-legends-smurfs">
                                    <a>Buy your lol smurf account now.</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
 

                        <div className="info">
                            <time>June 30, 2020</time>
                            <h4 className="title usmall">
                                <Link href="/league-of-legends-smurfs">
                                    <a>Buy your lol smurf now</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                   

                        <div className="info">
                            <time>June 30, 2020</time>
                            <h4 className="title usmall">
                                <Link href="/about">
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
                            <Link href="/which-league-of-legends-champion-should-i-play">
                                <a>Which League of Legends champion should I play?</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/buy-lol-account-safe">
                                <a>How to buy a League of Legends account SAFELY</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/best-champs-to-carry-low-elo">
                                <a>Best champs to carry low elo</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/how-do-i-improve-faster-in-league-of-legends">
                                <a>How Do I Improve Faster in League of Legends</a>
                            </Link>
                        </li>
                    </ul>
                </section>


           </aside>
        );
    }
}

export default BlogSidebar;