import "./Navbar.css"
import Button from '../Button/Button'
function Navbar({first,secound,third,fourth}) {
  return (
    <nav className='navbar'>
      <ul className='navbar__list'>
        <li className="navbar__item">
          <a href="/" className="navbar__link active">
            {first}
          </a>
        </li>
        <li className="navbar__item">
          <a href="/" className="navbar__link">
            {secound}
          </a>
        </li>
        <li className="navbar__item">
          <a href="/" className="navbar__link">
            {third}
          </a>
        </li>
        <li className="navbar__item">
          <a href="/" className="navbar__link">
            {fourth}
          </a>
        </li>
      </ul>
      <Button styled={true} buttonName="Call center"/>
    </nav>
  )
}

export default Navbar;