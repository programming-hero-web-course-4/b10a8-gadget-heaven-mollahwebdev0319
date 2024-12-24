import PropTypes from 'prop-types';
import image from '../assets/images/logo.png';
const Navbar = ({ coins }) => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src= {image} alt="" />
        
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:text-gray-400">Home</a></li>
          <li><a href="/fixture" className="hover:text-gray-400">Fixture</a></li>
          <li><a href="/teams" className="hover:text-gray-400">Teams</a></li>
          <li><a href="/schedules" className="hover:text-gray-400">Schedules</a></li>
        </ul>
      </div>
      <div> 
        <button className="bg-teal-400 px-4 py-2 text-2xl font-semibold rounded"> 
          Coins: {coins}</button> 
        </div>
    </nav>
  );
};
Navbar.propTypes = { coins: PropTypes.number.isRequired, };
export default Navbar;
