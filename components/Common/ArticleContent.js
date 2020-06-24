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

class ArticleContent extends Component {

    state = { 
        display: false,
        panel: true
    };

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {
        return (
            <div className="parag">
                
            <h2 className="margin-top-h2">What is a League of Legends smurf account?</h2>

            <p>It is pretty simple, but don't worry! You are not alone, there are a lot of people who don't know what a smurf is. 
               Well, it is pretty simple, a smurf is simply an <b>unranked lvl 30 account </b> where people start playing in order to practice
               new champions or just for playing in a competitive environment for fun without taking the risk of losing their lps in
               their main account if they are playing bad that particular day.
            </p>
            <p><b>How much time do you need to invest in order to get your lol account up to lvl 30?</b> Around <b>3-4 days playing 24/7</b></p>
            <p> Are you interested in buying a smurf account? If you want to buy a smurf account, then you are in the right place! 
                Over here in Lol Smurf, we offer cheap league smurfs in the market. <b>Our unranked league of legends lvl 30 accounts 
                has at least 40k BE </b>for buying lots of champions of your choice and we also grant you a lifetime warranty.
            </p>
            
            <h2>What is the best place to buy league smurfs?</h2>
            
            <p> Lol Smurf is the best site to buy lol accounts, over here in our lolsmurf shop, you can <b>buy your unranked league accounts
                buy just $9.25! </b>Our cheap lol smurfs are also high quality, we can offer the accounts at that price because we already 
                produce tons of them so we can afford to lower the price of our lol unranked accounts
            </p>
            
            <h2 className="margin-top-h2">League of legends regions</h2>
            
            <p>In League of legends there are plenty of regions! We have 4 main regions <b>EUW (EU West), NA (Noth America), CH (China), 
                and KR (Korea)</b>, but we also have many wildcards regions like <b>TR (Turkey), JP (Japan), OCE (Oceania)...</b>
            </p>
            
            <p> Playing in a different region means more ping, so at least your regions are close like EUW and EUNE we wouldn't recommend 
                you to play in a region different from yours. But if you are moving to a different region and you prefer to <b>buy level 30 
                lol account Over here in Lol Smurf </b> you can buy lvl 30 account EUW,EUNE,NA, and Turkey!
            </p>     

            <h2 className="margin-top-h2">What is a PBE Account?</h2>
            <p>A League of Legends PBE account is an account that allows you to play in the Public Beta environment, but, what does it
                means? That means <b>you can try all the new champions, skins and so on before they hit the official servers!!</b> And what is
                more impressive, you can buy and try any skin or champion without having to save BE because <b>every champ and skin in the
                game cost 1 BE </b>
            </p>
            <h2 className="margin-top-h2">Buy PBE Account?</h2>
            <p>So, you want to buy pbe account for league of legends? Then you are in the right place! In Lol Smurf we have the pbe account you are looking for sale!
            </p>

            <h2>Unverified league of legends accounts</h2>
            <p>Are you tired of getting scammed every time you are trying to buy a smurf? In Lol Smurf <b>we only sell unverified league accounts</b>,so, don't worry
                we are a safe place to buy league of legends accounts. But, why is this so important?
            </p>
            <p>
                Once you buy your lol account, you have to make sure to bind your new account to your email and verify it, then no one will be able to
                steal your unverified league of legends smurf. A lot of people get scammed because they don't buy an unverified league of legends account, because after
                the purchase the seller retrieves their lol account through their email. That is why we are the best site to buy league of legends accounts, we only sell
                 Unverified league of legends accounts because we want you to buy your lol account safe.
            </p>

            <h2></h2>
            <p></p>
        </div>
        );
    }
}

export default ArticleContent;
