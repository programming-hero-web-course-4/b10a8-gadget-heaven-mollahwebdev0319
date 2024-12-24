import PropTypes from 'prop-types';

const PlayerCard = ({ player, choosePlayer }) => {
  return (
    <div className="bg-emerald-100 p-4 shadow-md rounded-md justify-items-start"> 
      <img src={player.image} alt={player.name} className="w-[500px] h-[500px] object-cover object-center rounded-md mb-4" />
      <h3 className="text-xl font-bold mb-2">{player.name}</h3>
      <p className="text-gray-600">{player.country}</p>
      <p className="text-gray-600">{player.role}</p>
      <p className="text-gray-600"> Batting: {player.batting_type}</p>
      <p className="text-gray-600"> Bowling: {player.bowling_type}</p>
      <p className="text-gray-800 font-bold">Price: {player.bidding_price}</p>
      <button className="bg-purple-600 text-white px-4 py-2 mt-4 rounded" 
      onClick={() => choosePlayer(player)}> Choose Player </button>
    </div>
  );
};
 PlayerCard.propTypes = { player: PropTypes.shape({ image: PropTypes.string.isRequired, name: PropTypes.string.isRequired, country: PropTypes.string.isRequired, role: PropTypes.string.isRequired, batting_type: PropTypes.string.isRequired, bowling_type: PropTypes.string.isRequired, bidding_price: PropTypes.string.isRequired, }).isRequired, choosePlayer: PropTypes.func.isRequired, };


export default PlayerCard;


