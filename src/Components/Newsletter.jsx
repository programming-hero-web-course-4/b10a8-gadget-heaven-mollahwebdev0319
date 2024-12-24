import PropTypes from 'prop-types'

const Newsletter = () => {
  return (
    <div className="bg-gradient-to-r  from-gray-800 to-gray-600 text-white text-center p-8 ">
      <h2 className="text-2xl font-bold mb-4"> Subscribe to our Newsletter</h2>
      <p className="text-xl mb-4">Get the latest updates and news right in your inbox!</p>
      <input 
        type="email" 
        placeholder="Enter your email" 
        className="px-4 py-2 rounded mb-4 text-gray-800 w-64"
      />
      <button className="bg-gradient-to-r from-pink-500 to-yellow-500 px-4 py-2 text-xl rounded">Subscribe</button>
    </div>
  );
};
Newsletter.propTypes = { onSubscribe: PropTypes.func, };
export default Newsletter;
