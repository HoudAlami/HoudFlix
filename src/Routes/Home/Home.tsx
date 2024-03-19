import { Link } from 'react-router-dom';
import './Home.scss';
import Projects from '../../components/Projects/Projects';
import Formation from '../../components/Formation/Formation';
import Hobbies from '../../components/Hobbies/Hobbies';

import projectsData from '../../data/projects';
import formationData from '../../data/formation';
import hobbiesData from '../../data/hobbies';
import Footer from '../../components/FooterCv/FooterCv';
import FooterLink from '../../components/FooterLink/FooterLink';
import Header from '../../components/Header/Header';

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__header-top">
          <Header />
        </div>
        <div className="home__header-bottom">
          <div className="home__header-title">
            <img src="/assets/H.png" alt="H" className="home__header-h" />
            <h2 className="home__header-intro">En savoir plus sur Houd</h2>
          </div>
          <p className="home__header-text">
            Bonjour à tous ! Je m'appelle Houd et je suis un développeur
            Fullstack (Javascript/Typescript/React/NodeJs). <br></br> En
            reconversion professionnelle, je recherche l'entreprise où je
            pourrai m'épanouir.
            <br></br> Je vous souhaite une bonne visite sur mon portfolio.
          </p>
          <Link to={'/about'} className="link">
            <button type="button" className="home__header-button">
              PLUS
            </button>
          </Link>
        </div>
      </div>
      <Projects projects={projectsData} />
      <Formation formations={formationData} />
      <Hobbies hobbies={hobbiesData} />
      <Footer />
      <FooterLink />
    </div>
  );
}

export default Home;
