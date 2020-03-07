import React, { Component } from 'react';
const TrustBox = ({ trustBoxRef }) => (
<div id="trustbox" className="trustpilot-widget" data-locale="en-GB" data-template-id="2FJR5e6SfOTWKCXO" data-businessunit-id="2FJR5e6SfOTWKCXO" data-style-height="130px" data-style-width="100%" data-theme="light" data-stars="5" data-schema-type="Organization">
    <a href="https://www.trustpilot.com/review/www.lolsmurf.net" target="_blank">Trustpilot</a>
</div>
);

class TrustBoxContainer extends Component {
  constructor(props) {
super(props);
this.trustBoxRef = React.createRef();
  }
  componentDidMount() {
// If window.Trustpilot is available it means that we need to load the TrustBox from our ref.
// If it's not, it means the script you pasted into <head /> isn't loaded just yet.
// When it is, it will automatically load the TrustBox.

/*
var aScript = document.createElement('script');

    aScript.type = 'text/javascript';
    aScript.src = "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
    aScript.async = "true"
  */  
    //document.head.appendChild(aScript2);
    /*aScript.onload = function () {
        var trustbox = document.getElementById('trustbox');
        window.Trustpilot.loadFromElement(trustbox);
    };
    
if (window.Trustpilot) {
  window.Trustpilot.loadFromElement(this.trustBoxRef.current, true);
}*/
  }
  render() {
      console.log('entre');
      /*
return <TrustBox trustBoxRef={this.trustBoxRef} />;
*/
return <></>
  }
}
export default TrustBoxContainer;