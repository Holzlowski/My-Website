import { Container, Row, Col, Carousel, Card, Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { useImagePreloader, extractImagesFromProjects } from '../../hooks/useImagePreloader';
import ProgressiveImage from '../ProgressiveImage/ProgressiveImage';
import '../../styles/ScrollAnimations.css';
import './Projectssection.css';

const ProjectsSection = (
    {
        projects = [],
        pageTitle = 'Projekte',
        pageDescription = 'Das sind meine Projekte!',
        cardsPerRow = 3
    }
) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedTitle, setSelectedTitle] = useState('');
    
    // Extrahiere alle Bilder aus den Projekten
    const allImages = extractImagesFromProjects(projects);
    
    // Preload alle Bilder
    const { imagesLoaded, loadedImages, loadingProgress, totalImages } = useImagePreloader(allImages, {
        timeout: 10000, // 10 Sekunden für viele Bilder
        onProgress: (loaded, total, progress) => {
            console.log(`Loading progress: ${progress}% (${loaded}/${total})`);
        }
    });
    
    // Scroll-Animation für den Titel-Bereich
    const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
    
    // Scroll-Animation für die Projekt-Cards - auf Mobile niedrigerer threshold
    const isMobileView = typeof window !== 'undefined' && window.innerWidth <= 768;
    const [projectsRef, projectsVisible] = useScrollAnimation({ 
        threshold: isMobileView ? 0.01 : 0.1,
        rootMargin: isMobileView ? '0px 0px 50px 0px' : '0px 0px -50px 0px'
    });

    const handleImageClick = (project, imageIndex = 0) => {
        // Sammle alle Bilder des Projekts (keine YouTube Videos)
        let images = [];
        
        if (project.media) {
            images = project.media
                .filter(item => item.type === 'image')
                .map(item => item.src);
        } else if (project.image) {
            images = [project.image];
        }
        
        setSelectedImages(images);
        setCurrentImageIndex(imageIndex);
        setSelectedTitle(project.title);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedImages([]);
        setCurrentImageIndex(0);
        setSelectedTitle('');
    };

    const handlePrevImage = () => {
        setCurrentImageIndex(prev => 
            prev === 0 ? selectedImages.length - 1 : prev - 1
        );
    };

    const handleNextImage = () => {
        setCurrentImageIndex(prev => 
            prev === selectedImages.length - 1 ? 0 : prev + 1
        );
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') handlePrevImage();
        if (e.key === 'ArrowRight') handleNextImage();
        if (e.key === 'Escape') handleCloseModal();
    };

    // Keyboard-Navigation aktivieren
    useEffect(() => {
        if (showModal) {
            document.addEventListener('keydown', handleKeyDown);
            return () => document.removeEventListener('keydown', handleKeyDown);
        }
    }, [showModal, selectedImages]);

    return (
        <Container className="projects-container">
            {/* Loading Overlay - DEAKTIVIERT */}
            {false && !imagesLoaded && (
                <div className="loading-overlay">
                    <div className="loading-spinner"></div>
                    <p>Bilder laden... ({loadedImages}/{totalImages})</p>
                    <div className="loading-progress-bar">
                        <div 
                            className="loading-progress-fill" 
                            style={{ width: `${loadingProgress}%` }}
                        ></div>
                    </div>
                </div>
            )}
            
            <div ref={titleRef} className={`scroll-fade-up ${titleVisible ? 'visible' : ''}`}>
                <h2>{pageTitle}</h2>
                {Array.isArray(pageDescription) ? (
                    pageDescription.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))
                ) : (
                    <p>{pageDescription}</p>
                )}
            </div>
            <Row ref={projectsRef}>
                {projects.map((project, index) => {
                    // Bestimme das erste Bild
                    const firstImage = project.image || (project.media && project.media.find(m => m.type === 'image')?.src);
                    
                    return (
                    <Col 
                        key={index} 
                        md={12 / cardsPerRow}
                        xs={12}
                        className={`scroll-fade-up-stagger ${projectsVisible ? 'visible' : ''}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <Card className="mb-4 hover-effect" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <div style={{ 
                                width: '100%', 
                                height: '250px', 
                                overflow: 'hidden', 
                                backgroundColor: '#1a1a1a'
                            }}>
                                {firstImage && (
                                    <img 
                                        src={firstImage}
                                        alt={project.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            display: 'block',
                                            cursor: 'pointer'
                                        }}
                                        onClick={() => handleImageClick(project, 0)}
                                    />
                                )}
                            </div>
                            <Card.Body>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text className='project-description'>
                                    {project.description}
                                </Card.Text>
                                {project.link && (
                                    <Card.Link href={project.link} target="_blank" rel="noopener noreferrer">
                                        {project.title === "Spell Dashboard" ? project.link : "Link zum Projekt"}
                                    </Card.Link>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                    );
                })}
            </Row>

            {/* Lightbox Modal mit Galerie-Navigation */}
            <Modal 
                show={showModal} 
                onHide={handleCloseModal} 
                size="xl" 
                centered
                onKeyDown={handleKeyDown}
                tabIndex={-1}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        {selectedTitle} 
                        {selectedImages.length > 1 && (
                            <span className="text-muted ms-2">
                                ({currentImageIndex + 1} von {selectedImages.length})
                            </span>
                        )}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center p-0" style={{ position: 'relative' }}>
                    {selectedImages.length > 0 && (
                        <>
                            <ProgressiveImage
                                src={selectedImages[currentImageIndex]}
                                alt={`${selectedTitle} - Bild ${currentImageIndex + 1}`}
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '80vh',
                                    objectFit: 'contain'
                                }}
                            />
                            
                            {/* Navigation nur bei mehreren Bildern */}
                            {selectedImages.length > 1 && (
                                <>
                                    {/* Vorheriges Bild */}
                                    <button
                                        className="btn btn-dark position-absolute"
                                        style={{
                                            left: '10px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            opacity: 0.8,
                                            zIndex: 10
                                        }}
                                        onClick={handlePrevImage}
                                    >
                                        ‹
                                    </button>
                                    
                                    {/* Nächstes Bild */}
                                    <button
                                        className="btn btn-dark position-absolute"
                                        style={{
                                            right: '10px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            opacity: 0.8,
                                            zIndex: 10
                                        }}
                                        onClick={handleNextImage}
                                    >
                                        ›
                                    </button>
                                    
                                    {/* Thumbnails am unteren Rand */}
                                    <div 
                                        className="position-absolute w-100 d-flex justify-content-center"
                                        style={{ bottom: '10px', gap: '5px' }}
                                    >
                                        {selectedImages.map((img, index) => (
                                            <img
                                                key={index}
                                                src={img}
                                                alt={`Thumbnail ${index + 1}`}
                                                style={{
                                                    width: '50px',
                                                    height: '50px',
                                                    objectFit: 'cover',
                                                    border: index === currentImageIndex 
                                                        ? '2px solid white' 
                                                        : '1px solid rgba(255,255,255,0.5)',
                                                    borderRadius: '4px',
                                                    cursor: 'pointer',
                                                    opacity: index === currentImageIndex ? 1 : 0.7
                                                }}
                                                onClick={() => setCurrentImageIndex(index)}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer className="text-muted small">
                    {selectedImages.length > 1 && (
                        <span>Nutze ← → Pfeiltasten oder klicke die Buttons zur Navigation</span>
                    )}
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default ProjectsSection;