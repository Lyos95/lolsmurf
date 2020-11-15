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
        return (
            <React.Fragment>
                <NextSeo
                title='Which League of Legends champion should I play'
                description= 'These are the best champions you should play'
                canonical="https://www.lolsmurf.net/best-champs-to-carry-low-elo"
                />
                <Navbar />
                <Breadcrumb title='Which League of Legends champion should I play ?' />
                <section className="blog-details-area ptb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-details">
                                <div className="article-img">
                                    <img src={require("../assets/blog/pyke.jpg")} alt="best-champs-to-carry-low-elo" />
                                </div>

                                <div className="article-content">
                                    <ul className="entry-meta">
                                        <li>
                                            <i className="far fa-user"></i> 
                                            <Link href="#">
                                                <a>Skenry</a>
                                            </Link>
                                        </li>
                                        <li><i className="far fa-calendar-alt"></i> September 05, 2020</li>
                                    </ul>

                                    <h1>Which League of Legends champion should I play ?</h1>

                                    <p>In this article we are going to discover what are the best League of Legends solo queue champions for you that will help you to rank up in solo queue</p>

                                    <p>Before we start we would recommend you to <b>practice this champions in a different account (buy lol smurf account) </b>so you won't lose any lps in your main account while you are practicing</p>
                                    <Link href="/league-of-legends-smurfs">
                                        <img style={{marginBottom:'20px',cursor:'pointer'}} onClick={()=>{}} src={require("../assets/blog/buy-lol-smurf.jpg")} />
                                    </Link>

                                    <p>In League of legends, solo queue is a place where completely different personalities and playstyles have to coexist. 
                                        But it's always important to focus on yourself and have your own plan and play according to it. Don't blame 
                                        anyone else, because you have to remember, you are the only common factor in all your games. Once you start having a plan before the game starts 
                                        , you'll soon start climbing elo.</p>

                                    <p>But I am pretty sure you are wondering, ok ok, but <b>Which Lol champion should I play ? </b> Well, we've put together some of the best 
                                       solo queue champions in League of Legends for a wide range of personalities, for different roles. In this way you will have 
                                       different options to choose from when you have to decide with which league of legends champion you want to
                                       use to smurf your enemies in low elo! They will think you are a lol smurf playing in their games!</p>

                                    <blockquote className="wp-block-quote">
                                        <p>Don't worry if your favourite champion isn't here, if you are smurfing your on your enemies just keep playing that lol champion and don't count them him/her out! 
                                       </p>
                                    </blockquote>

                                    <h2>Passive personalities</h2>

                                    <h3>Sion</h3>
                                    <p> Combining <b>tankiness with all his CC</b>, Sion can
                                        hold every AD matchup really easy and then snowball his advantage in other lanes with the rest of his team 
                                        with his ultimate leading them to victory.</p>

                                    <p> Thanks to his W passive, <b>Sion will stack health by farming</b>, it's like Nasus but  with his health, 
                                    no matter how overpowered is your enemy champion. Sion will be able to hold him avoiding any snowball from the enemy toplaner. And 
                                    <b>if you die during a team fight</b>, don't worry! <b>You will turn into a zombie </b>and you will hit like a truck <b>forcing your enemies to run away from you!</b></p>

                                    <p> One of the most annoying things about this champ is that <b>he can splitpush </b>and be annoying for the enemy team by just scaping with his R while your team is doing objectives <b> or he can just control the whole teamfight with his CC and tankiness </b>  unlocking your teammates to do damage.
                                    </p>

                                    <h3>Garen</h3>
                                    <p>If you’re looking for a champion for the top lane, <b>one of the best champs to carry in low elo is Garen.</b> 
                                       He is really annoying to deal with while <b>he can trade with you really easily while having zero counterplay</b>, once you understand his dmg and his tankiness
                                        you shouldn't fear almost any opponent. He is not just played in low elo, Garen is also played in diamond and even in challenger! He is an easy champ but his kit is really overturned
                                        since he can tank and make a lot of damage with his ultimate</p>

                                    <p>His passive gives him a <b>big advantage over many champions who rely on poke</b>. So if you lose a lot of your health because of a mistake you made, you just have to step away for a while 
                                    and you will restore all your health back!
                                    </p>

                                    <p> <b>Garen has a lot of damage </b> and you shouldn't underestimate  him, if Sion was pure CC and tankiness, <b>Garen is a mix of damage and tankiness</b>, if your enemy carry is immobile  Garen will just run him down 
                                    with his Q and finishing him with his ultimate which does true damage.
                                    </p>

                                    <Link href="/league-of-legends-smurfs">
                                        <img style={{marginBottom:'20px',cursor:'pointer'}} onClick={()=>{}} src={require("../assets/blog/buy-lol-smurf.jpg")} />
                                    </Link>
                                    <h3>Janna</h3>
                                    <p> <b>Janna is one of the most OP supports in the game</b>, no matter in which patch we are, she has always had a great winratio. <b>She offers </b>really valuable things with her kit, <b>move speed,shields,slows and healing!!</b> 
                                   </p>

                                    <p> With her passive Janna <b>offers movespeed which will help herself and her teammates to reposition. </b> And, do you have a lol smurf adc in your team ? Just press <b>Janna's shield onto your ADC which will also give him AD </b> and let him finish the job.</p>

                                    <p> And if your ADC is in any danger, just <b>press your ultimate and throw away all your enemies while you heal your whole team!</b>
                                        If you take this power into a team fight you can become a one-man army.
                                    </p>

                                    <h3>Ezreal</h3>
                                    <p> <b>Ezreal is the safest ADC in the game</b>, no matter if you are against a League of Legends smurf account, Ezreal will always be able to reposition himself and farm safely from afar with his Q.
                                   </p>

                                    <p> Ezreal is one of those champs that will <b>scale really well </b> and win the game by himself but he isn't super aggressive, Ezreal is more like a <b>poke based champion.</b> You just throw Q's and W's to the enemy team 
                                        and <b>once the enemy team is low enough you can force fights or objectives.</b>
                                    </p>
                                    

                                    <p>One of the keys about this champ, and the reason he is really safe, is because <b>he has another flash in his kit!</b></p>
                                    <p> So, if you ever feel in danger you can just E away from your enemies as many times as you want to make really hard for your enemies to punish your miss position.
                                    </p>
                                    <Link href="/league-of-legends-smurfs">
                                        <img style={{marginBottom:'20px',cursor:'pointer'}} onClick={()=>{}} src={require("../assets/blog/buy-lol-smurf.jpg")} />
                                    </Link>

                                    <h3>Ziggs</h3>
                                    <p>If you thought Ezreal was a safe pick just let me present you Ziggs! This yordle <b>can farm the lane from miles away</b>, so far that they won't be able to do anything to stop you.</p>

                                    <p>One of the best things about this champ is that he doesn't have any mana issues, so you will spend the whole early game spamming bombs and farming, because <b>this champion scales really well </b>into the late game
                                    </p>

                                    <p> The main mechanic of Ziggs that you have always to keep in mind is that <b>Ziggs is meant to poke champions and then one-shot the towers with his W </b>, but it doesn't mean he has no burst because of his ultimate deals tons of damage! So let's smurf on your enemies!
                                    </p>

                                    <h2>Aggressive</h2>

                                    <h3>Ekko</h3>
                                    <p> Ekko is one of the best champions to play if you are an aggressive player, playing Ekko has basically no downsides. 
                                        He has <b>strong ganks</b> because of his <b>jungle clear</b> and his <b>high mobility</b>
                                        .But one of the strongest things about Ekko is his <b>burst damage</b>, so you can 100 to 0 squishy champions in just a couple of seconds with your combo. 
                                        Ohh, and he's really annoying to deal with because of his <b>high movility</b>.
                                    </p>

                                    <p>Ekko is <b> really good for ganks.</b> When you gank, make sure to start with Timewinder, 
                                       which applies some damage and will also slow your enemy. Timewinder will synergies well with Parallel Convergence,
                                       and Phase Dive.
                                       You also need to keep in mind that Ekko has his <b>Chronobreaking</b> so <b>if you mess up you can just rewind and reposition yourself</b>.
                                       </p>

                                    <p> When looking for ganks, <b>it’s great to pair Ekko with champions that can offer additional CC</b> to guarantee kills.
                                    </p>
                                    

                                    <Link href="/league-of-legends-smurfs">
                                        <img style={{marginBottom:'20px',cursor:'pointer'}} onClick={()=>{}} src={require("../assets/blog/buy-lol-smurf.jpg")} />
                                    </Link>
                                    
                                    
                                    <h3>Zed</h3>
                                    <p> Zed is a champion whose sole purpose is to assassinate his enemies so if you like to roam and snowball games 
                                        he is your champion! Zed has a <b>decent laning phase</b>, and he can farm minions quite safely using Razor Shuriken and Shadow Slash
                                        this is your champion! But before that you will need to reach <b>level 6 to start to obliterate every 
                                        target on the enemy team and snowball the game</b>.

                                    </p>

                                    <p> <b>Death Mark, is gonna be a really powerful tool to use to kill squishy champions</b>,
                                        that will allow you to finish the kills with some high burst damage. Plus, his passive, Contempt for the Weak,
                                         will help you a lot with the additional damage it offers to finish champions with low health.
                                    </p>

                                    


                                    <h3>Lucian</h3>
                                    <p> Lucian is a really powerfull Marksman who <b>excels in the laning phase</b> and if played properly
                                        will become a serious threat in during the mid and late game. Lucian is a solid pick for solo queue because
                                         he <b>doesn’t have any bad matchup.</b>
                                    </p>

                                    <p> You have to notice that mostly all Marksmen champions are weaker at the start of a match,
                                        but not Lucian so you should take advantage
                                        of this <b>strong early game </b>and poke your opponents  as much as possible during the early stages making sure you
                                        end the laning phase with an advantage. As a tip use his passive to gain a small edge over your opponents.
                                        So <b>combine his abilities with a free double auto-attack </b>and you will find yourself
                                        ahead in trades against your lane opponents.
                                       </p>

                                    <p> As a difference from other adcs, <b>Lucian can be a bruiser or a glass cannon</b> like a Caitlyn.
                                    </p>


                                    <Link href="/league-of-legends-smurfs">
                                        <img style={{marginBottom:'20px',cursor:'pointer'}} onClick={()=>{}} src={require("../assets/blog/buy-lol-smurf.jpg")} />
                                    </Link>
                                   
                                   
                                    <h3>Pyke </h3>
                                    <p> If you want to carry as a support, you will need some damage and Pyke <b>has tons of damage</b>. He is
                                         a champion that if player correctly, can smurf the game alone.
                                    </p>

                                    <p> His ability to create picks with his Bone Skewer and Ghostwater Dive means you’re in a prime 
                                        position to <b>directly impact in the engagements </b>creating key opportunities <b>by pulling an important or squishy champion 
                                        towards you</b> and your allies will kill him instantly if the opportunity is great.
                                       </p>

                                    <p> If you’re worried you won't be able to finish the kills, <b>Pyke’s ultimate</b>, Death From Below, is here to save
                                        your day since it can be used to
                                         <b>execute low health champions, while ensuring everyone involved in the kill receives the full gold reward </b>(which is really op). 
                                         And also on top of you can re-cast it immediately.
                                    </p>

                                    <h3>Thanks for reading</h3>
                                    <p> Thanks for reading! If you are thinking about climbing in solo queue you should practice this champs in a smurf account,
                                        so your main account's elo won't be affected by this. If you are thinking about getting one you can buy lol smurf account! <Link href="/league-of-legends-smurfs">Just click here if you are interested</Link>
                                    </p>
                                    <Link href="/league-of-legends-smurfs">
                                        <img style={{marginBottom:'20px',cursor:'pointer'}} onClick={()=>{}} src={require("../assets/blog/buy-lol-smurf.jpg")} />
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