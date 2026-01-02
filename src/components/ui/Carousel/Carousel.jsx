import { useState } from 'react';

const Carousel = ({ children, index, onChange }) => {
    return (
        <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
        >
            {children}
        </div>
    );
};

export default Carousel;
