import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Project.scss';
import FooterLink from '../../components/FooterLink/FooterLink';
import Header from '../../components/Header/Header';

type ProjectInfos = {
  id: number;
  title: string;
  rate: string;
  image: string;
  date: number;
  description: string;
  age: string;
  technologie: string;
  video: string;
};

type ProjectInfosProps = {
  projects: ProjectInfos[];
};

function Project({ projects }: ProjectInfosProps) {
  const { id } = useParams();
  if (!id) {
    throw new Error('id is missing');
  }
  const projectId = parseInt(id);

  const project = projects.find((project) => project.id === projectId);

  if (!project) {
    throw new Error('project is missing');
  }

  // const video = 'public/assets/video/AMV - Hajime no Ippo - Hekireki.mp4';
  const videoEnded = () => {
    alert('Thanks for watching');
  };

  return (
    <div className="project">
      <Header />
      <div className="project__header">
        <ReactPlayer
          url={project.video}
          controls
          onEnded={videoEnded}
          height="100%"
          width="100%"
        />
      </div>
      <div className="project__content">
        <h2 className="project__content-title">{project.title}</h2>
        <div className="project__content-synopsis">
          <p className="project__content-synopsis-intro-description">
            {project.description}
          </p>
          <div className="project__content-synopsis-intro">
            <p className="project__content-synopsis-intro-rate">
              {project.rate}
            </p>
            <p className="project__content-synopsis-intro-date">
              {project.date}
            </p>
            <p className="project__content-synopsis-intro-age">{project.age}</p>
          </div>
        </div>
        <div className="project__content-infos">
          <h3 className="project__content-infos-title">
            Informations about {project.title}
          </h3>
          <a
            href="https://manga-sama.onrender.com/"
            className="project__content-infos-link"
          >
            Website link
          </a>
          <p className="project__content-infos-language">
            technologies used :
            <span className="project__content-infos-language-details">
              {' '}
              {project.technologie}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
