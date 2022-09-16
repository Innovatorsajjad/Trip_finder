import React from 'react';

const HeroSection = () => {
    return (
        <section>
            <div class="carousel w-auto h-screen relative">
                <div id="slide1" class="carousel-item relative w-full">
                    <img src="https://tripfinder-redq.firebaseapp.com/static/media/1.3bd6d5f8.jpg" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img src="https://tripfinder-redq.firebaseapp.com/static/media/3.b9923e48.jpg" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img src="https://tripfinder-redq.firebaseapp.com/static/media/2.7ac6e294.jpg" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>
                </div>
        </section>
    );
};

export default HeroSection;