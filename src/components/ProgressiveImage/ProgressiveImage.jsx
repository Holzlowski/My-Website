import React, { useState, useEffect } from 'react';
import './ProgressiveImage.css';

const ProgressiveImage = ({ 
    src, 
    alt, 
    className = '', 
    style = {},
    onClick,
    placeholderColor = '#2a2a2a'
}) => {
    const [imgSrc, setImgSrc] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        // Reset state when src changes
        setIsLoading(true);
        setHasError(false);
        setImgSrc(null);

        const img = new Image();
        
        img.onload = () => {
            setImgSrc(src);
            setIsLoading(false);
        };

        img.onerror = () => {
            setHasError(true);
            setIsLoading(false);
        };

        img.src = src;

        // Cleanup
        return () => {
            img.onload = null;
            img.onerror = null;
        };
    }, [src]);

    return (
        <div 
            className={`progressive-image-wrapper ${className}`}
            style={{
                ...style,
                backgroundColor: isLoading ? placeholderColor : 'transparent',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {isLoading && (
                <div className="progressive-image-placeholder">
                    <div className="progressive-image-spinner"></div>
                </div>
            )}
            
            {hasError && (
                <div className="progressive-image-error">
                    <span>⚠️ Bild konnte nicht geladen werden</span>
                </div>
            )}
            
            {imgSrc && (
                <img
                    src={imgSrc}
                    alt={alt}
                    className={`progressive-image ${isLoading ? 'loading' : 'loaded'}`}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: style.objectFit || 'cover',
                        objectPosition: style.objectPosition || 'center',
                        opacity: isLoading ? 0 : 1,
                        transition: 'opacity 0.5s ease-in-out',
                        cursor: onClick ? 'pointer' : 'default'
                    }}
                    onClick={onClick}
                    loading="lazy"
                />
            )}
        </div>
    );
};

export default ProgressiveImage;
