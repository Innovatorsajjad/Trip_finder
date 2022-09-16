import React from 'react';
import ExploreCard from '../ExploreCard/ExploreCard';

const ExploreDestinationSection = () => {
    return (
        <section className='container mx-auto py-12'>
            <h2 className='text-2xl font-semibold mb-3'>Explore Destinationsd</h2>
            <div className="grid grid-cols-5 gap-6">
                <ExploreCard/>
                <ExploreCard/>
                <ExploreCard/>
                <ExploreCard/>
                <ExploreCard/>
            </div>
        </section>
    );
};

export default ExploreDestinationSection;