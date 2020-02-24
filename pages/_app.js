import '../assets/styles/bootstrap.min.css';
import '../assets/styles/fontawesome.min.css';
import '../assets/styles/style.css';
import '../assets/styles/responsive.css';
import '../assets/styles/animate.min.css';
import '../assets/styles/slick.css';
import '../assets/styles/slick-theme.css';

import { Provider } from 'react-redux';
import App, {Container} from 'next/app';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store/reducers/cartReducer';
import { DefaultSeo } from 'next-seo';
import GoTop from '../components/Shared/GoTop';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
export default withRedux(initStore)(
    class MyApp extends App {
        constructor(props) {
            super(props)
            this.persistor = persistStore(props.store)
          }
        static async getInitialProps ({ Component, ctx }) {
            return {
                pageProps: Component.getInitialProps
                    ? await Component.getInitialProps(ctx)
                    : {}
            }
        }

        render () {
            const { Component, pageProps, store } = this.props

            return (
                <Container>
                    <DefaultSeo
                        title="LeagueSmurf - Best League of Legends smurfs"
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
                </Container>
            );
        }
    }
)