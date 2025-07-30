import { useState, useEffect } from 'react';

export const useImagePreloader = (imageUrls, options = {}) => {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [loadedImages, setLoadedImages] = useState(0);
    const [loadingProgress, setLoadingProgress] = useState(0);
    
    const { 
        timeout = 8000, // 8 Sekunden Timeout
        priority = 'high',
        onProgress = null,
        onComplete = null 
    } = options;

    useEffect(() => {
        if (!imageUrls || imageUrls.length === 0) {
            setImagesLoaded(true);
            return;
        }

        let loadedCount = 0;
        const totalImages = imageUrls.length;

        // Alle Bilder parallel laden
        const loadPromises = imageUrls.map((src, index) => {
            return new Promise((resolve) => {
                const img = new Image();
                if (img.fetchPriority) {
                    img.fetchPriority = priority;
                }
                
                img.onload = () => {
                    loadedCount++;
                    const progress = Math.round((loadedCount / totalImages) * 100);
                    
                    setLoadedImages(loadedCount);
                    setLoadingProgress(progress);
                    
                    if (onProgress) {
                        onProgress(loadedCount, totalImages, progress);
                    }
                    
                    resolve({ success: true, index, src });
                };
                
                img.onerror = () => {
                    loadedCount++;
                    const progress = Math.round((loadedCount / totalImages) * 100);
                    
                    setLoadedImages(loadedCount);
                    setLoadingProgress(progress);
                    
                    if (onProgress) {
                        onProgress(loadedCount, totalImages, progress);
                    }
                    
                    console.warn(`Failed to load image: ${src}`);
                    resolve({ success: false, index, src });
                };
                
                // Starte Download
                img.src = src;
            });
        });

        // Warte auf alle Bilder
        Promise.allSettled(loadPromises).then((results) => {
            setImagesLoaded(true);
            if (onComplete) {
                onComplete(results);
            }
        });

        // Fallback Timeout
        const fallbackTimer = setTimeout(() => {
            console.log('Image preloading timeout reached');
            setImagesLoaded(true);
            if (onComplete) {
                onComplete([]);
            }
        }, timeout);

        return () => clearTimeout(fallbackTimer);
    }, [imageUrls, timeout, priority, onProgress, onComplete]);

    return {
        imagesLoaded,
        loadedImages,
        loadingProgress,
        totalImages: imageUrls ? imageUrls.length : 0
    };
};

// Hilfsfunktion um alle Bilder aus Projekt-Daten zu extrahieren
export const extractImagesFromProjects = (projects) => {
    const images = [];
    
    // Sicherstellen, dass projects ein Array ist
    if (!Array.isArray(projects)) {
        return images;
    }
    
    projects.forEach(project => {
        // Hauptbild
        if (project.image) {
            images.push(project.image);
        }
        
        // Media Array (für komplexere Projekte)
        if (project.media && Array.isArray(project.media)) {
            project.media.forEach(mediaItem => {
                if (mediaItem.type === 'image' && mediaItem.src) {
                    images.push(mediaItem.src);
                }
            });
        }
        
        // Gallery Array
        if (project.gallery && Array.isArray(project.gallery)) {
            project.gallery.forEach(galleryItem => {
                if (typeof galleryItem === 'string') {
                    images.push(galleryItem);
                } else if (galleryItem.src) {
                    images.push(galleryItem.src);
                }
            });
        }
        
        // Additional images (falls vorhanden)
        if (project.additionalImages && Array.isArray(project.additionalImages)) {
            images.push(...project.additionalImages);
        }
    });
    
    return [...new Set(images)]; // Duplikate entfernen
};
