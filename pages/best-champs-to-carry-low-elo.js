import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import DetailsContentTwo from '../components/blog/DetailsContentTwo';
import {NextSeo} from 'next-seo'

class BlogDetailsTwo extends Component {
    render() {
        return (
            <React.Fragment>
                <NextSeo
                title='▷Best champs to carry in low elo'
                description= 'These are the best champions in each role to carry in low elo'
                canonical="https://www.lolsmurf.net/best-champs-to-carry-low-elo"
                />
                <Navbar />
                <Breadcrumb title='Best champs to carry LOW ELO' />
                <DetailsContentTwo />
                <Facility />
                <Footer />
            </React.Fragment>
        );
    }
}

export default BlogDetailsTwo;