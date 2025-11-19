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
    
    // Scroll-Animation für die Projekt-Cards
    const [projectsRef, projectsVisible] = useScrollAnimation({ threshold: 0.1 });

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
            {/* Loading Overlay */}
            {!imagesLoaded && (
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
                {projects.map((project, index) => (
                    <Col 
                        key={index} 
                        md={12 / cardsPerRow}
                        className={`scroll-fade-up-stagger ${projectsVisible ? 'visible' : ''}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <Card className="mb-4 hover-effect" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            {project.media ? (
                                // Mehrere Medien - zeige Carousel
                                 <Carousel indicators={true} controls={true} interval={null}>
                                {project.media?.map((mediaItem, mediaIndex) => (
                                    <Carousel.Item key={mediaIndex}>
                                        {mediaItem.type === 'youtube' ? (
                                            // YouTube Video einbetten
                                            <div style={{ height: '250px', backgroundColor: '#000' }}>
                                                <iframe
                                                    width="100%"
                                                    height="100%"
                                                    src={`https://www.youtube.com/embed/${mediaItem.videoId}`}
                                                    title={`${project.title} - Video ${mediaIndex + 1}`}
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    style={{ borderRadius: '0.375rem 0.375rem 0 0' }}
                                                ></iframe>
                                            </div>
                                        ) : (
                                            // Normale Bilder
                                            <ProgressiveImage
                                                className="d-block w-100"
                                                src={mediaItem.src}
                                                alt={`${project.title} - Bild ${mediaIndex + 1}`}
                                                style={{ 
                                                    height: '250px', 
                                                    objectFit: 'cover',
                                                    objectPosition: 'center'
                                                }}
                                                onClick={() => handleImageClick(project, mediaIndex)}
                                            />
                                        )}
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                            ) : (
                                // Einzelnes Bild - mit ProgressiveImage
                                <ProgressiveImage
                                    src={project.image}
                                    alt={project.title}
                                    style={{ 
                                        height: '250px', 
                                        width: '100%',
                                        objectFit: 'cover'
                                    }}
                                    onClick={() => handleImageClick(project)}
                                />
                            )}
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
                ))}
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