import { Container, Row, Col, Card, Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useScrollAnimation, useImagePreloader, extractImagesFromProjects } from '../../hooks';
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
    const [selectedMedia, setSelectedMedia] = useState([]);
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
    const [selectedTitle, setSelectedTitle] = useState('');
    
    // Extrahiere alle Bilder aus den Projekten
    const allImages = extractImagesFromProjects(projects);
    
    // Preload alle Bilder
    const { imagesLoaded, loadedImages, loadingProgress, totalImages } = useImagePreloader(allImages, {
        timeout: 10000, // 10 Sekunden für viele Bilder
        onProgress: (loaded, total, progress) => {
            // Silent loading - only log in development if needed
            if (process.env.NODE_ENV === 'development') {
                // console.log(`Loading progress: ${progress}% (${loaded}/${total})`);
            }
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

    const handleImageClick = (project, mediaIndex = 0) => {
        // Sammle alle Media Items (Bilder und Videos)
        let media = [];
        
        if (project.media) {
            media = project.media;
        } else if (project.image) {
            media = [{ type: 'image', src: project.image }];
        }
        
        setSelectedMedia(media);
        setCurrentMediaIndex(mediaIndex);
        setSelectedTitle(project.title);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedMedia([]);
        setCurrentMediaIndex(0);
        setSelectedTitle('');
    };

    // Keyboard-Navigation aktivieren
    useEffect(() => {
        if (!showModal) return;
        
        const handlePrevMedia = () => {
            setCurrentMediaIndex(prev => 
                prev === 0 ? selectedMedia.length - 1 : prev - 1
            );
        };

        const handleNextMedia = () => {
            setCurrentMediaIndex(prev => 
                prev === selectedMedia.length - 1 ? 0 : prev + 1
            );
        };
        
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') handlePrevMedia();
            if (e.key === 'ArrowRight') handleNextMedia();
            if (e.key === 'Escape') handleCloseModal();
        };
        
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [showModal, selectedMedia.length]);

    // Handler für Media Navigation (für Buttons)
    const handlePrevMedia = () => {
        setCurrentMediaIndex(prev => 
            prev === 0 ? selectedMedia.length - 1 : prev - 1
        );
    };

    const handleNextMedia = () => {
        setCurrentMediaIndex(prev => 
            prev === selectedMedia.length - 1 ? 0 : prev + 1
        );
    };

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
            <Row ref={projectsRef} className="projects-grid">
                {projects.map((project, index) => {
                    // Bestimme das erste Bild
                    const firstImage = project.image || (project.media && project.media.find(m => m.type === 'image')?.src);
                    
                    return (
                    <Col 
                        key={index} 
                        md={12 / cardsPerRow}
                        xs={12}
                        className={`project-col scroll-fade-up-stagger ${projectsVisible ? 'visible' : ''}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <Card className="project-card mb-4 hover-effect">
                            <div className="project-card-media">
                                {firstImage && (
                                    <img 
                                        src={firstImage}
                                        alt={project.title}
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
                                        {project.linkText || "Link zum Projekt"}
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
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        {selectedTitle} 
                        {selectedMedia.length > 1 && (
                            <span className="text-muted ms-2">
                                ({currentMediaIndex + 1} von {selectedMedia.length})
                            </span>
                        )}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center p-0" style={{ position: 'relative', minHeight: '400px' }}>
                    {selectedMedia.length > 0 && (
                        <>
                            {selectedMedia[currentMediaIndex]?.type === 'image' ? (
                                <ProgressiveImage
                                    src={selectedMedia[currentMediaIndex].src}
                                    alt={`${selectedTitle} - Bild ${currentMediaIndex + 1}`}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '80vh',
                                        objectFit: 'contain'
                                    }}
                                />
                            ) : selectedMedia[currentMediaIndex]?.type === 'youtube' ? (
                                <div style={{ 
                                    position: 'relative', 
                                    paddingBottom: '56.25%', 
                                    height: 0,
                                    overflow: 'hidden'
                                }}>
                                    <iframe
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%'
                                        }}
                                        src={`https://www.youtube.com/embed/${selectedMedia[currentMediaIndex].videoId}`}
                                        title={selectedTitle}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            ) : null}
                            
                            {/* Navigation nur bei mehreren Media Items */}
                            {selectedMedia.length > 1 && (
                                <>
                                    {/* Vorheriges Media */}
                                    <button
                                        className="btn btn-dark position-absolute"
                                        style={{
                                            left: '10px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            opacity: 0.8,
                                            zIndex: 10
                                        }}
                                        onClick={handlePrevMedia}
                                        aria-label="Vorheriges Medium"
                                    >
                                        ‹
                                    </button>
                                    
                                    {/* Nächstes Media */}
                                    <button
                                        className="btn btn-dark position-absolute"
                                        style={{
                                            right: '10px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            opacity: 0.8,
                                            zIndex: 10
                                        }}
                                        onClick={handleNextMedia}
                                        aria-label="Nächstes Medium"
                                    >
                                        ›
                                    </button>
                                    
                                    {/* Thumbnails am unteren Rand */}
                                    <div 
                                        className="position-absolute w-100 d-flex justify-content-center"
                                        style={{ bottom: '10px', gap: '5px', zIndex: 10 }}
                                    >
                                        {selectedMedia.map((item, index) => (
                                            <div
                                                key={index}
                                                style={{
                                                    width: '50px',
                                                    height: '50px',
                                                    border: index === currentMediaIndex 
                                                        ? '2px solid white' 
                                                        : '1px solid rgba(255,255,255,0.5)',
                                                    borderRadius: '4px',
                                                    cursor: 'pointer',
                                                    opacity: index === currentMediaIndex ? 1 : 0.7,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    background: 'rgba(0,0,0,0.5)',
                                                    color: 'white',
                                                    fontSize: '20px'
                                                }}
                                                onClick={() => setCurrentMediaIndex(index)}
                                            >
                                                {item.type === 'image' ? (
                                                    <img
                                                        src={item.src}
                                                        alt={`Thumbnail ${index + 1}`}
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover',
                                                            borderRadius: '4px'
                                                        }}
                                                    />
                                                ) : (
                                                    '▶'
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer className="text-muted small">
                    {selectedMedia.length > 1 && (
                        <span>Nutze ← → Pfeiltasten oder klicke die Buttons zur Navigation</span>
                    )}
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

ProjectsSection.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string,
        media: PropTypes.arrayOf(PropTypes.shape({
            type: PropTypes.oneOf(['image', 'youtube']).isRequired,
            src: PropTypes.string,
            videoId: PropTypes.string
        })),
        link: PropTypes.string,
        linkText: PropTypes.string
    })),
    pageTitle: PropTypes.string,
    pageDescription: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]),
    cardsPerRow: PropTypes.number
};

ProjectsSection.defaultProps = {
    projects: [],
    pageTitle: 'Projekte',
    pageDescription: 'Das sind meine Projekte!',
    cardsPerRow: 3
};

export default ProjectsSection;
