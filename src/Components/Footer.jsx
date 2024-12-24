import logo from'../assets/images/logo-footer.png';
import PropTypes from 'prop-types';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p>We are a passionate team dedicated to providing the best services to our customers.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Home</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Services</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">About</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Subscribe</h3>
          <p>Subscribe to our newsletter for the latest updates.</p>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="px-4 py-2 rounded mb-4 text-gray-800 w-full"
          />
          <button className="bg-gradient-to-r from-pink-500 to-yellow-500 px-4 py-2 text-xl rounded w-full">Subscribe</button>
        </div>
      </div>
      <div className="text-center mt-8">
      <img src={logo} alt="Logo" className="mx-auto mb-4" />
        &copy; 2024 Your Company All Rights Reserved.
      </div>
    </footer>
  );
};
Footer.propTypes = { year: PropTypes.number.isRequired, companyName: PropTypes.string.isRequired, };
export default Footer;
