import { useState } from 'react';
import './Hobbies.scss';
import { Link } from 'react-router-dom';

type HobbiesInfos = {
  id: number;
  hobbie: string;
  rate: string;
  image: string;
  date: number;
};

type HobbiesInfosProps = {
  hobbies: HobbiesInfos[];
};

function Hobbies({ hobbies }: HobbiesInfosProps) {
  const [showContent, setShowContent] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => {
    setShowContent(id);
  };
  const handleMouseLeave = () => {
    setShowContent(null);
  };
  return (
    <div className="hobbies">
      <h2 className="hobbies__title">Centres d'intérêt</h2>
      <ul className="hobbies__items">
        {hobbies.map((hobbie) => (
          <li
            className="hobbies__item"
            key={hobbie.id}
            onMouseEnter={() => handleMouseEnter(hobbie.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="hobbies__item-content">
              <Link to={`/hobbie/${hobbie.id}`}>
                <img
                  src={hobbie.image}
                  alt="japon"
                  className="hobbies__item-image"
                />
              </Link>

              <div
                className={
                  showContent === hobbie.id
                    ? 'hobbies__item-infos'
                    : 'hobbies__item-infos-hidden'
                }
              >
                <p className="hobbies__item-infos-hobbie">{hobbie.hobbie}</p>
                <p className="hobbies__item-infos-rate">{hobbie.rate}</p>
                <p className="hobbies__item-infos-date">{hobbie.date}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Hobbies;
