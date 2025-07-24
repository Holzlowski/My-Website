import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';
import './Projectssection.css';

const ProjectsSection = (
    {
        projects = [],
        pageTitle = 'Projekte',
        pageDescription = 'Das sind meine Projekte!',
        cardsPerRow = 3
    }
) => {
    return (
        <Container className="projects-container">
            <div >
                <h2>{pageTitle}</h2>
                {Array.isArray(pageDescription) ? (
                    pageDescription.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))
                ) : (
                    <p>{pageDescription}</p>
                )}
            </div>
            <Row>
                {projects.map((project, index) => (
                    <Col key={index} md={12 / cardsPerRow}>
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
                                            <img
                                                className="d-block w-100"
                                                src={mediaItem.src}
                                                alt={`${project.title} - Bild ${mediaIndex + 1}`}
                                                style={{ 
                                                    height: '250px', 
                                                    objectFit: 'cover',
                                                    objectPosition: 'center'
                                                }}
                                            />
                                        )}
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                            ) : (
                                // Einzelnes Bild - normale Card.Img
                                <Card.Img
                                    variant="top"
                                    src={project.image}
                                    alt={project.title}
                                    style={{ height: '250px', objectFit: 'cover' }}
                                />
                            )}
                            <Card.Body>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text className='project-description'>
                                    {project.description}
                                </Card.Text>
                                {project.link && (
                                    <Card.Link href={project.link} target="_blank" rel="noopener noreferrer">
                                        Zum Respository
                                    </Card.Link>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ProjectsSection;