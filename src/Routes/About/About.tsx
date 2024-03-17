import { useState } from 'react';
import './About.scss';
// import Footer from '../../components/FooterCv/FooterCv';
// import { Link } from 'react-router-dom';
import FooterLink from '../../components/FooterLink/FooterLink';
import Header from '../../components/Header/Header';

type Question = {
  id: number;
  question: string;
  answer: string;
};

type QuestionProps = {
  questions: Question[];
};

function About({ questions }: QuestionProps) {
  const [showContent, setShowContent] = useState<number | null>(null);

  const handleClickQuestion = (id: number) => {
    setShowContent(showContent === id ? null : id);
  };

  return (
    <div className="about">
      <div className="about__header">
        <Header />

        <div className="about__header-content">
          <h2 className="about__header-content-title">
            If you want to know more about me,
            <br /> you have some questions with answer bellow.
          </h2>
          <h3 className="about__header-content-text">
            It's with plasurre that i will be able to exchange with you
          </h3>
          <div className="about__header-content-contact">
            <div className="about__header-content-contact-area">
              <p className="about__header-content-contact-area-mail">
                houd_alami@hotmail.com
              </p>
              <a href="mailto:houd_alami@hotmail.com" className="link">
                <button
                  type="button"
                  className="about__header-content-contact-area-button"
                >
                  Contact Me
                  <img
                    src="/assets/fleche-droite.png"
                    alt="arrow"
                    className="arrow"
                  />
                </button>
              </a>
            </div>
            <p className="about__header-content-contact-text">
              Ready to talk with me ? Click the red button and send me an email
            </p>
          </div>
        </div>
      </div>
      <div className="about__content">
        <div className="about__content-questions">
          <h2 className="about__content-questions-title">
            Questions I am often asked
          </h2>
          <ul className="about__content-questions-list">
            {questions.map((question) => (
              <li
                className="about__content-questions-list-item"
                key={question.id}
                onClick={() => handleClickQuestion(question.id)}
              >
                <h3 className="about__content-questions-list-item-title">
                  {question.question}
                  <img
                    src="public/assets/fleche-droite.png"
                    alt="arrow"
                    className={`arrow ${
                      showContent === question.id ? 'arrow-rotate' : ''
                    }`}
                  />
                </h3>
                <p
                  className={
                    showContent === question.id
                      ? 'answerNotHidden'
                      : 'answerHidden'
                  }
                >
                  {question.answer}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <Footer /> */}
      <FooterLink />
    </div>
  );
}

export default About;
