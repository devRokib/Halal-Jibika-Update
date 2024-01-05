
import { Link, NavLink } from 'react-router-dom';
import './footer.css';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className='footerSection'>
      <div className="footer">
        <div className="footerColumn1">
          <h3>HALAL JIBIKA</h3>
          <ul className='footerMenu'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/jobs'>Jobs</NavLink>
            <NavLink to='/jobs/:id/favorite'>Favorite</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
          </ul>
        </div>
        <div className="footerColumn2">
          <h3>Procucts</h3>
          <ul className="footerMenuTwo" >
          <Link>Web</Link>
          <Link>App</Link>
          <Link>Software</Link>
          <Link>Company</Link>
          <Link>Ecommerce</Link>
          <Link>Terms & Conditions</Link>
          </ul>
         </div>
        <div className="footerColumn3">
          <h3>Contact us</h3>
          <p>Content for any Information.</p>
          <div>
            <p>Contact Information:</p>
            <p>Email: example@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>
        <div className="footerColumn4">
          <h3>Get in Touch</h3>
          <ul className="menuFour">
            <Link to={'https://www.facebook.com/home.php'}><FaFacebook /></Link>
            <Link to={'https://twitter.com/home?lang=en'}><FaXTwitter /></Link>
            <Link to={'https://www.linkedin.com/home?originalSubdomain=bd'}><FaLinkedin /></Link>
          </ul>
        </div>
      </div>
      <hr style={{color:'#fff'}} />
      <div className="footerBottom">
        <p style={{textAlign:'center',color:'#fff', padding:'10px 0'}}>&copy; 2024 Your Website Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;