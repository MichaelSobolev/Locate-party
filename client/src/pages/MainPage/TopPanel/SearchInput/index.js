import { connect } from 'react-redux';

import { SearchInput as Component } from './SearchInput';

const mapStateToProps = () => ({
  results: [
    { id: '1', name: 'Величайший бодибилдер человечества!', href: '/' },
  ],
  value: 'Валерон Тестостерон',
});

const mapDispatchToProps = {
  onChange: (value) => ({
    type: 'COMPONENTS/SEARCH_INPUT/change',
    payload: { value },
  }),
};

export const SearchInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
