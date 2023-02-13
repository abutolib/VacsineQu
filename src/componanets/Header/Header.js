import './header.css';
import logo from '../../assets/images/logo.svg'
import Navbar from '../Navbar/Navbar'
function Header() {
  return (
    <div className="header">
      <div className='container'>
        <div className='header__inner'>
          <a href="#">
            <img src={logo} />
          </a>

          <Navbar first={"Home"} secound={"Sheulde"} third={"Quota"} fourth={"Information"} />

        </div>
      </div>
    </div>
  );
}

export default Header;