import { connect } from 'react-redux';

import { TopPanel as Component } from './TopPanel';

const mapStateToProps = () => ({ userName: 'Валерон Тестостерон' });

export const TopPanel = connect(mapStateToProps)(Component);
