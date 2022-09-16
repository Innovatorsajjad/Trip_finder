import React from 'react';
import PriceCard from '../../Components/PriceCard/PriceCard';
import Navbar from '../Shared/Navbar/Navbar';

const Pricing = () => {
    return (
        <>
        <Navbar style={"bg-white text-black shadow"} />
            <section className='py-12'>
                <div className="grid grid-cols-3 gap-6">
                    <PriceCard />
                </div>
            </section>
        </>

    );
};

export default Pricing;