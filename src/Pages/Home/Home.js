import React from 'react';
import ExploreDestinationSection from '../../Components/ExploreDestinationSection/ExploreDestinationSection';
import HeroSection from '../../Components/HeroSection/HeroSection';
import TravelersChoiceSection from '../../Components/TravelersChoiceSection/TravelersChoiceSection';
import Navbar from '../Shared/Navbar/Navbar';

const Home = () => {
    return (
        <>
            <Navbar/>
            <HeroSection />
            <ExploreDestinationSection/>
            <TravelersChoiceSection />
        </>
    );
};

export default Home;