import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import PlayerList from './Components/PlayerList';
import SelectedPlayers from './Components/SelectedPlayers';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import playersData from './assets/players.json';

function App() {
  const [coins, setCoins] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [availablePlayers, setAvailablePlayers] = useState([]);
  const [showSelected, setShowSelected] = useState(false);

  useEffect(() => {
    setAvailablePlayers(playersData);
  }, []);

  const addCoins = () => {
    setCoins(coins + 10000000);
    toast.success('Coins added!');
  };

  const choosePlayer = (player) => {
    if (selectedPlayers.length >= 6) {
      toast.error('You can only select up to 6 players!');
      return;
    }
    if (selectedPlayers.find(p => p.playerId === player.playerId)) {
      toast.error('Player already selected!');
      return;
    }
    if (coins < parseFloat(player.bidding_price.replace(' million USD', '')) * 1000000) {
      toast.error('Not enough coins!');
      return;
    }
    setSelectedPlayers([...selectedPlayers, player]);
    setCoins(coins - parseFloat(player.bidding_price.replace(' million USD', '')) * 1000000);
    toast.success('Player selected!');
  };

  const removePlayer = (playerId) => {
    const player = selectedPlayers.find(p => p.playerId === playerId);
    setSelectedPlayers(selectedPlayers.filter(p => p.playerId !== playerId));
    setCoins(coins + parseFloat(player.bidding_price.replace(' million USD', '')) * 1000000);
    toast.success('Player removed!');
  };

  return (
    <div className="App">
      <Navbar coins={coins} />
      <Banner addCoins={addCoins} />
      <div className="p-4 flex justify-end gap-5 items-center">
        <button className="bg-purple-600 text-white px-4 py-2 rounded" onClick={() => setShowSelected(false)}>Available Players</button>
        <button className="bg-yellow-400 hover:bg-red-800 text-white px-4 py-2 rounded" onClick={() => setShowSelected(true)}>Selected Players: {selectedPlayers.length}</button>
      </div>
      <div className="main-section p-4">
        {!showSelected ? (
          <PlayerList players={availablePlayers} choosePlayer={choosePlayer} />
        ) : (
          <SelectedPlayers selectedPlayers={selectedPlayers} removePlayer={removePlayer} />
        )}
      </div>
      <Newsletter />
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
