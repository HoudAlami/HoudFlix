import { Link, useParams } from 'react-router-dom';
import './Formation.scss';
import Header from '../../components/Header/Header';

type FormationInfos = {
  id: number;
  school: string;
  diplome: string;
  image: string;
  date: number;
  description: string;
  rate: string;
};

type FormationInfosProps = {
  formations: FormationInfos[];
};

function Formation({ formations }: FormationInfosProps) {
  const { id } = useParams();
  if (!id) {
    throw new Error('id is missing');
  }
  const formationId = parseInt(id);

  const formation = formations.find(
    (formation) => formation.id === formationId
  );

  if (!formation) {
    throw new Error('project is missing');
  }

  return (
    <div className="formation">
      <div className="formation__header">
        <Header />
      </div>
      <div className="formation__content">
        <h2 className="formation__content-title">{formation.school}</h2>

        <div className="formation__content-synopsis">
          <p className="formation__content-synopsis-intro-description">
            {formation.description}
          </p>
          <div className="formation__content-synopsis-intro">
            <p className="formation__content-synopsis-intro-diplome">
              {formation.diplome}
            </p>
            <p className="formation__content-synopsis-intro-date">
              {formation.date}
            </p>
            <p className="project__content-synopsis-intro-school">
              {formation.school}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formation;
