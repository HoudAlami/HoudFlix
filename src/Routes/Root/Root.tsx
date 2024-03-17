import { Link, Outlet } from 'react-router-dom';
import './Root.scss';
import FooterLink from '../../components/FooterLink/FooterLink';
function Root() {
  return (
    <div className="root">
      <Outlet />
    </div>
  );
}

export default Root;
