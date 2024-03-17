import { useState } from 'react';
import './Projects.scss';
import { Link } from 'react-router-dom';

type ProjectInfos = {
  id: number;
  title: string;
  rate: string;
  image: string;
  date: number;
};

type ProjectInfosProps = {
  projects: ProjectInfos[];
};

function Projects({ projects }: ProjectInfosProps) {
  const [showContent, setShowContent] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => {
    setShowContent(id);
  };
  const handleMouseLeave = () => {
    setShowContent(null);
  };
  return (
    <div className="projects">
      <h2 className="projects__title">Personal achievements</h2>
      <ul className="projects__items">
        {projects.map((project) => (
          <li
            className="projects__item"
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={handleMouseLeave}
            key={project.id}
          >
            <div className="projects__item-content">
              <Link
                to={`/project/${project.id}`}
                className="projects__item-link"
              >
                <img
                  src={project.image}
                  alt="image"
                  className="projects__item-image"
                />
              </Link>

              <div
                className={
                  showContent === project.id
                    ? 'projects__item-infos'
                    : 'projects__item-infos-hidden'
                }
              >
                <p className="projects__item-infos-title">{project.title}</p>
                <p className="projects__item-infos-rate">{project.rate}</p>
                <p className="projects__item-infos-date">{project.date}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
