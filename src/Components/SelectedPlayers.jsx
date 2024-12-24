import PropTypes from 'prop-types'

const SelectedPlayers = ({ selectedPlayers, removePlayer }) => {
  return (
    <div className="grid grid-cols-1 gap-4 justify-items-start">
      {selectedPlayers.map(player => (
        <div key={player.playerId} className="bg-white p-4 shadow-md rounded-md text-center">
          <img src={player.image} alt={player.name} className="w-50 h-48 object-fill rounded-md mb-4" />
          <h3 className="text-xl font-bold mb-2">{player.name}</h3>
          <p className="text-gray-600">{player.role}</p>
          <p className="text-gray-800 font-bold">Price: {player.bidding_price}</p>
          <button className="bg-red-600 text-white px-4 py-2 mt-4 rounded" onClick={() => removePlayer(player.playerId)}>Remove</button>
        </div>
      ))}
    </div>
  );
};
SelectedPlayers.propTypes = { selectedPlayers: PropTypes.arrayOf( PropTypes.shape({ playerId: PropTypes.string.isRequired, image: PropTypes.string.isRequired, name: PropTypes.string.isRequired, country: PropTypes.string.isRequired, role: PropTypes.string.isRequired, batting_type: PropTypes.string.isRequired, bowling_type: PropTypes.string.isRequired, bidding_price: PropTypes.string.isRequired, }) ).isRequired, removePlayer: PropTypes.func.isRequired, };
export default SelectedPlayers;
