import React from 'react';
import './ProgressiveImage.css';

const ProgressiveImage = ({ 
    src, 
    alt, 
    className = '', 
    style = {},
    onClick
}) => {
    return (
        <div 
            className={`progressive-image-wrapper ${className}`}
            style={{
                ...style,
                width: '100%',
                position: 'relative',
                overflow: 'hidden',
                display: 'block'
            }}
        >
            <img
                src={src}
                alt={alt}
                className="progressive-image"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: style.objectFit || 'cover',
                    objectPosition: style.objectPosition || 'center',
                    cursor: onClick ? 'pointer' : 'default',
                    display: 'block'
                }}
                onClick={onClick}
            />
        </div>
    );
};

export default ProgressiveImage;
