import {connect} from 'react-redux';

import {LastGameList as Component} from './LastGameList';

const mapStateToProps = () => ({
    lastGamesIds: ['1', '2'],
});

export const LastGameList = connect(mapStateToProps)(Component);
