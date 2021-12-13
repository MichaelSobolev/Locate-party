import { connect } from 'react-redux';

import { UserInfo as Component } from './UserInfo';

const mapStateToProps = () => ({
  name: 'Валерон Тестостерон',
  image: 'http://cs619425.vk.me/v619425386/ee52/cRErWQMSd5Y.jpg',
  email: 'valeron@mail.ru',
});

export const UserInfo = connect(mapStateToProps)(Component);
