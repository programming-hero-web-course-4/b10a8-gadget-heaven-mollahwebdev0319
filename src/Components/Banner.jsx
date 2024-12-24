import PropTypes from 'prop-types'
import banner from '../assets/images/banner-main.png' 
const Banner = ({ addCoins }) => {
  return (
    <div className="bg-purple-600 text-white text-center p-8">

      <div className='flex justify-center'>
      <img  src={banner} alt="Dream 11 Cricket Team Banner" />
      </div>
      <h2 className="text-5xl font-bold mb-4">Assemble Your Ultimate Dream 11 Cricket Team</h2>
      <p className="text-2xl mb-4">Beyond Boundaries, Beyond Limits</p>
      
      <button className="bg-yellow-400 px-4 py-2 text-2xl text-black font-bold rounded-xl" onClick={addCoins}>Claim Free Credit</button>
    </div>
  );
};
Banner.propTypes = { addCoins: PropTypes.func.isRequired, };
export default Banner;
