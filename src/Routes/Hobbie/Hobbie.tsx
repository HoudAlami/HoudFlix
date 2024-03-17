import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './Hobbie.scss';

type HobbieInfos = {
  id: number;
  hobbie: string;
  image: string;
  date: number;
  details: string;
  rate: string;
};

type HobbieInfosProps = {
  hobbies: HobbieInfos[];
};

function Hobbies({ hobbies }: HobbieInfosProps) {
  const { id } = useParams();
  if (!id) {
    throw new Error('id is missing');
  }
  const hobbieId = parseInt(id);

  const hobbie = hobbies.find((hobbie) => hobbie.id === hobbieId);

  if (!hobbie) {
    throw new Error('project is missing');
  }
  return (
    <div className="hobbie">
      <div className="hobbie__header">
        <Header />
        <img src={hobbie.image} alt="image" className="hobbie__header-image" />
      </div>
      <div className="hobbie__content">
        <h2 className="hobbie__content-title">{hobbie.hobbie}</h2>

        <div className="hobbie__content-synopsis">
          <p className="hobbie__content-synopsis-intro-details">
            {hobbie.details}
          </p>
          <div className="hobbie__content-synopsis-intro">
            <p className="hobbie__content-synopsis-intro-rate">{hobbie.rate}</p>
            <p className="hobbie__content-synopsis-intro-school">
              {hobbie.date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
