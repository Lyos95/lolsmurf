import React, { Component } from 'react';
import TopHeader from './TopHeader';
import MegaMenu from './MegaMenu';
import { initGA, logPageView } from "../googleAnalytics.js"

class Navbar extends Component {

    componentDidMount () {
        if (!window.GA_INITIALIZED) {
          initGA()
          window.GA_INITIALIZED = true
        }
        logPageView()
      }
      
    render() {
        return (
            <React.Fragment>
                <TopHeader />
                <MegaMenu />
            </React.Fragment>
        );
    }
}

export default Navbar;
