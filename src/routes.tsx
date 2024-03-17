import { createBrowserRouter } from 'react-router-dom';
import Root from './Routes/Root/Root';
import Home from './Routes/Home/Home';
import ProfilPage from './Routes/ProfilPage/ProfilPage';
import About from './Routes/About/About';
import questionsData from './data/questions';
import projectsData from './data/projects';
import formationData from './data/formation';
import hobbieData from './data/hobbies';
import Project from './Routes/Project/Project';
import Formation from './Routes/Formation/Formation';
import Hobbies from './Routes/Hobbie/Hobbie';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <ProfilPage />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About questions={questionsData} />,
      },
      {
        path: 'project/:id',
        element: <Project projects={projectsData} />,
      },
      {
        path: 'formation/:id',
        element: <Formation formations={formationData} />,
      },
      {
        path: 'hobbie/:id',
        element: <Hobbies hobbies={hobbieData} />,
      },
    ],
  },
]);
