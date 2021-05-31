import React from 'react';
import Book from '../../Customer/Book/Book';
import Footer from '../../Shared/Footer/Footer';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Project from '../Project/Project';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div className="home-container">
            <Header></Header>
            <Services></Services>
            <Project></Project>
            <Testimonials></Testimonials>
           <Contact></Contact>
            <Footer></Footer>
            
            
            
        </div>
    );
};

export default Home;