import React, { Component } from 'react';
import Link from 'next/link';

class AddsModal extends Component {
    _isMounted = false;
    state = {
        open: false
    };

    componentDidMount(){
        this.setState({
            open: true
        });
    }

    closeModal = (e) => {
        this._isMounted = true;
        e.preventDefault();
        this.setState({
            open: false
        });
    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    render() {
        let { open } = this.state;
        return (
            <div className={`bts-popup ${open ? 'is-visible' : ''}`} role="alert">
                <div className="bts-popup-container poroOffer">
                    <Link href="#">
                        <a onClick={this.closeModal} className="bts-popup-close close-white"></a>
                    </Link>
                    <a href="https://www.lolsmurf.net/product-details" className="btnOffer">Buy now!</a>
                </div>
            </div>
        );
    }
}

export default AddsModal;
