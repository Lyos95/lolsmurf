import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import BlogGridOneColumn from '../components/blog/BlogGridOneColumn';

class Blog extends Component {
    render() {
        return (
            <>
                <Navbar />

                <Breadcrumb title="Blog" />

                <BlogGridOneColumn />

                <Facility />
                
                <Footer />
            </>
        );
    }
}

export default Blog;