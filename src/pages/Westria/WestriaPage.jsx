import React from 'react';
import { Container } from 'react-bootstrap';
// import Wüstenbild from '../../assets/images/Wüste.png'; 
// import Wüstenvordergrund from '../../assets/images/Wüste_Vordergrund.png'
import './WestriaPage.css';

const WestriaPage = () => {
  return (
    <div className="westria-page">
      <div className='westria-header'>
        <div className='background'></div> 
        <div className='foreground'></div> 
        <div className="title-text"> WESTRIA </div>
      </div>
      <Container>
        <div className="westria-content">
          <h1>Westria - Meine Fantasywelt</h1>
          
          <div className="westria-intro">
            <p>
              Willkommen in Westria, einer Welt, die ich über Jahre hinweg erschaffen habe.
              Hier treffen Magie und Abenteuer aufeinander, wo jede Geschichte ihren eigenen Zauber hat.
            </p>
          </div>

          <div className="westria-sections">
            <div className="westria-section">
              <h3>Die Welt</h3>
              <p>
                Westria ist eine Welt voller Geheimnisse, alter Magie und epischer Abenteuer.
                Von den nebligen Sümpfen bis zu den kristallklaren Bergseen erstreckt sich
                ein Reich, das darauf wartet, entdeckt zu werden.
              </p>
            </div>

            <div className="westria-section">
              <h3>Geschichten</h3>
              <p>
                Jede Geschichte in Westria erzählt von mutigen Helden, dunklen Geheimnissen
                und der ewigen Schlacht zwischen Licht und Schatten.
              </p>
            </div>

            <div className="westria-section">
              <h3>Charaktere</h3>
              <p>
                Von weisen Zauberern bis zu tapferen Kriegern - die Bewohner Westrias
                haben alle ihre eigenen Geschichten zu erzählen.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WestriaPage;
