import { connect } from 'react-redux';

import { LastGameCard as Component } from './LastGameCard';

const gameCollection = {
  1: {
    id: '1',
    name: 'Pathfinder',
    image:
      'https://shop.buka.ru/data/img_files/4644/additional750x580/v99RYC2jx2_719x0.jpg',
  },
};

const gameHistoryCollection = {
  1: { id: '1', gameId: '1', date: '2021-11-12T13:13:14.836Z' },
  2: { id: '2', gameId: '1', date: '2021-12-12T13:13:14.836Z' },
};

const mapStateToProps = (_, { id }) => {
  const gameHistory = gameHistoryCollection[id];
  const game = gameCollection[gameHistory.gameId];

  return {
    date: gameHistory.date,
    gameName: game.name,
    gameImage: game.image,
  };
};

export const LastGameCard = connect(mapStateToProps)(Component);
