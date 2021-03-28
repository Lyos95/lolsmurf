import React, { Component } from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Facility from "../components/Common/Facility";
import Breadcrumb from "../components/Common/Breadcrumb";
import { NextSeo } from "next-seo";
import Link from "next/link";
import BlogSidebar from "../components/blog/BlogSidebar";
class BlogDetailsTwo extends Component {
  render() {
    return (
      <React.Fragment>
        <NextSeo
          noindex={true}
          title="LOLSmurf Cookies"
          description="These are the best tips for improving in League of Legends"
          canonical="https://www.lolsmurf.net/cookies"
        />
        <Navbar />
        <Breadcrumb title="Cookies" />
        <section className="blog-details-area ptb-60">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="blog-details">
                  <div className="article-content">
                    <h1>Cookies</h1>

                    <h3>What are cookies?</h3>

                    <p>
                      Cookies are small data files that are received on the
                      terminal from the website visited and are used to record
                      certain browsing interactions on a website, storing data
                      that can be updated and retrieved. These files are stored
                      on the user's computer and contain anonymous data that is
                      not harmful to the user's computer. They are used to
                      remember the user's preferences, such as the language
                      selected, access data or personalisation of the page.
                    </p>

                    <p>
                      Cookies can also be used to record anonymous information
                      about how a visitor uses a site. For example, which web
                      page you came from, or whether you used a banner ad to get
                      there.
                    </p>

                    <h3>How do we use cookies?</h3>
                    <p>
                      {" "}
                      LOLSmurf mostly use “first-party cookies”. However, to
                      view some of our pages, you will have to accept cookies
                      from external organisations. The 3 types of first-party
                      cookie we use are to:
                    </p>
                    <ul>
                      <li>
                        {" "}
                        <p>store visitor preferences</p>{" "}
                      </li>
                      <li>
                        {" "}
                        <p> make our websites operational</p>{" "}
                      </li>
                      <li>
                        {" "}
                        <p>gather analytics data (about user behaviour)</p>{" "}
                      </li>
                    </ul>

                    <h3>Visitor preferences</h3>
                    <p>
                      {" "}
                      Our sites may also have links to social networks (such as
                      Facebook or Twitter). We do not control the cookies used by these external
                      websites. For more information about cookies from social
                      networks or other external websites, we advise you to
                      review their own cookie policies.
                    </p>

                    <h3>This website uses cookies as follows:</h3>
                    <p>
                      {" "}
                      These are set by us and only we can read them. They
                      remember:{" "}
                    </p>
                    <ul>
                      <li>
                        {" "}
                        <p>
                          if you have agreed to (or refused) this site’s cookie
                          policy
                        </p>{" "}
                      </li>
                      <li>
                        {" "}
                        <p>
                          {" "}
                          if you have already replied to our survey pop-up
                          (about how helpful the site content was) – so you
                          won't be asked again
                        </p>{" "}
                      </li>
                      <li>
                        {" "}
                        <p>store visitor preferences</p>{" "}
                      </li>
                    </ul>
                    <h3>Operational cookies</h3>
                    <p>
                      {" "}
                      There are some cookies that we have to include in order
                      for certain web pages to function. For this reason, they
                      do not require your consent. In particular:
                    </p>
                    <ul>
                      <li> <p>Authentication cookies</p> </li>
                      <li> <p>Technical cookies required by certain IT systems</p></li>
                    </ul>

                    <h3>Third-party cookies</h3>
                    <p>
                      {" "}
                      Some of our pages display content from external providers,
                      e.g. YouTube, Facebook and Twitter. To view this
                      third-party content, you first have to accept their
                      specific terms and conditions. This includes their cookie
                      policies, which we have no control over. But if you do not
                      view this content, no third-party cookies are installed on
                      your device.{" "}
                    </p>
                  
                    <h3>How can you manage cookies?</h3>
                    <p>
                      You can manage/delete cookies as you wish - for details,
                      see aboutcookies.org.
                    </p>
                    <h3>Removing cookies from your device</h3>
                    <p>
                      You can delete all cookies that are already on your device
                      by clearing the browsing history of your browser. This
                      will remove all cookies from all websites you have
                      visited. Be aware though that you may also lose some saved
                      information (e.g. saved login details, site preferences).
                    </p>
                    <h3>Managing site-specific cookies</h3>
                    <p>
                      For more detailed control over site-specific cookies,
                      check the privacy and cookie settings in your preferred
                      browser
                    </p>
                    <h3>Blocking cookies</h3>
                    <p>
                      You can set most modern browsers to prevent any cookies
                      being placed on your device, but you may then have to
                      manually adjust some preferences every time you visit a
                      site/page. And some services and functionalities may not
                      work properly at all (e.g. profile logging-in).
                    </p>
                    <h3>Managing our analytics cookies</h3>
                    <p>
                      You can manage your preferences concerning cookies from
                      Europa Analytics on the dedicated Europa Analytics page.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
             
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
