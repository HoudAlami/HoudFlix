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
            <h2 className="home__header-intro">Learn more about Houd</h2>
          </div>
          <p className="home__header-text">
            Hi there ! My name is Houd and i'm a Fullstack Developer
            (Javascript/Typescript/React/Node) <br></br> In reconversion
            professional, i'm looking for my first experience of developer.
            <br></br> I wish you a good visit on my portfolio.
          </p>
          <Link to={'/about'} className="link">
            <button type="button" className="home__header-button">
              MORE
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
