import logo from '../IMG/logo.svg'
import '../CSS/Header.css';

function Header() {
    return (
      <div className="Header">
        <div className="Header-Total">
          <img src = {logo} className = 'logo-1'/>
          <div className='header-buttons'>
            <button className="login">Login</button>
            <button className="register">Register</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Header;