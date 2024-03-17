import { useState } from 'react';
import './Formation.scss';
import { Link } from 'react-router-dom';

type FormationInfos = {
  id: number;
  school: string;
  diplome: string;
  image: string;
  date: number;
};

type FormationInfosProps = {
  formations: FormationInfos[];
};

function Formation({ formations }: FormationInfosProps) {
  const [showContent, setShowContent] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => {
    setShowContent(id);
  };
  const handleMouseLeave = () => {
    setShowContent(null);
  };
  return (
    <div className="formation">
      <h2 className="formation__title">Formations</h2>
      <ul className="formation__items">
        {formations.map((formation) => (
          <li
            className="formation__item"
            key={formation.id}
            onMouseEnter={() => handleMouseEnter(formation.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="formation__item-content">
              <Link
                to={`/formation/${formation.id}`}
                className="formation__item-link"
              >
                <img
                  src={formation.image}
                  alt="japon"
                  className="formation__item-image"
                />
              </Link>
              <div
                className={
                  showContent === formation.id
                    ? 'formation__item-infos'
                    : 'formation__item-infos-hidden'
                }
              >
                <p className="formation__item-infos-school">
                  {formation.school}
                </p>
                <p className="formation__item-infos-diplome">
                  {formation.diplome}
                </p>
                <p className="formation__item-infos-date">{formation.date}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Formation;
