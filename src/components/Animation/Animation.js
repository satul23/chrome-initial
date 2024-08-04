import React, { useEffect, useState } from 'react';
import './ScrollImage.css';

const Animation = ({ src, index, width}) => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getTranslateX = () => {
        return -scrollY / 8;
    };

    return (
        <div className="image-wrapper">
            <img
                src={src}
                alt="Scroll effect"
                style={{
                    width: width,
                    transform: `translateX(${getTranslateX()}px)`,
                    transition: 'transform 0.2s ease-out',
                }}
                className="scroll-image"
            />
        </div>
    );
};

export default Animation;
