import "../assets/styles/stylelol.min.css";
import "../assets/styles/responsivelol.min.css";
import "../assets/styles/bootstrap.min.css";
import "../assets/styles/fontawesome.min.css";


import { Provider } from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import { initStore } from "../store/reducers/cartReducer";
import { DefaultSeo } from "next-seo";
import GoTop from "../components/Shared/GoTop";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

export default withRedux(initStore)(
  class MyApp extends App {
    constructor(props) {
      super(props);
      this.persistor = persistStore(props.store);
    }

    componentDidMount() {
      // Include the Crisp code here, without the <script></script> tags
      /* window.$crisp = [];
            window.CRISP_WEBSITE_ID = "340f0a84-4c85-43bf-a5a0-ec570e266448";
        
            (function() {
              var d = document;
              var s = d.createElement("script");        
              s.src = "https://client.crisp.chat/l.js";
              s.async = 1;
              d.getElementsByTagName("head")[0].appendChild(s);
              
            })();*/
      //hotjar.initialize(1867163, 6);
    }

    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {},
      };
    }

    render() {
      const { Component, pageProps, store } = this.props;

      return (
        <>
          <DefaultSeo
            title="LolSmurf - Best League of Legends smurfs"
            description="Unverified Ranked Unranked. Cheap Prices. Instant Delivery. Buy now! Lifetime Warranty. Lifetime Warranty. Highlights: Online Buying Option Available, We Offer Premium Support Service, Providing Instant Delivery. "
          />
          <Provider store={store}>
            <PersistGate
              loading={<Component {...pageProps} />}
              persistor={this.persistor}
            >
              <Component {...pageProps} />
            </PersistGate>
          </Provider>

          <GoTop scrollStepInPx="50" delayInMs="16.66" />
        </>
      );
    }
  }
);
