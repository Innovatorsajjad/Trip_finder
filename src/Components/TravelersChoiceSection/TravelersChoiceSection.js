import React from 'react';
import Card from '../Card/Card';    

const TravelersChoiceSection = () => {
    return (
        <section className='container mx-auto py-12'>
            <h2 className='text-2xl font-semibold mb-3'>Travelers’ Choice: Top hotels</h2>
            <div className="grid grid-cols-5 gap-6">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/> 
            </div>
        </section>
    );
};

export default TravelersChoiceSection;