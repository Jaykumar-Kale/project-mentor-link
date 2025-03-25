import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1a202c', color: 'white', textAlign: 'center', padding: '10px', marginTop: '40px' }}>
      <div>
        <p>&copy; 2025 Mentor-Link. All rights reserved.</p>
        <div>
          <Link to="/about" style={{ margin: '0 10px', color: 'lightblue' }}>About Us</Link>
          <Link to="/contact" style={{ margin: '0 10px', color: 'lightblue' }}>Contact</Link>
          <Link to="/privacy-policy" style={{ margin: '0 10px', color: 'lightblue' }}>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;