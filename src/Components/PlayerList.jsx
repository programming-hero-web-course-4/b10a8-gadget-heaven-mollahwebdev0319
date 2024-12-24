 
import PlayerCard from './PlayerCard';
import PropTypes from 'prop-types'
const PlayerList = ({ players, choosePlayer }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {players.map(player => (
        <PlayerCard key={player.playerId} player={player} choosePlayer={choosePlayer} />
      ))}
    </div>
  );
};
PlayerList.propTypes = { players: PropTypes.arrayOf( PropTypes.shape({ playerId: PropTypes.string.isRequired, image: PropTypes.string.isRequired, name: PropTypes.string.isRequired, country: PropTypes.string.isRequired, role: PropTypes.string.isRequired, batting_type: PropTypes.string.isRequired, bowling_type: PropTypes.string.isRequired, bidding_price: PropTypes.string.isRequired, }) ).isRequired, choosePlayer: PropTypes.func.isRequired, };
export default PlayerList;
