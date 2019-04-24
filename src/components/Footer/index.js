import React from 'react';
import Proptypes from 'prop-types';

import { connect } from 'react-redux';

const Footer = ({ count }) => (
  <p>
    Você tem
    {count}
    {' '}
favoritos
  </p>
);

Footer.propTypes = {
  count: Proptypes.number.isRequired,
};

const mapStateToProps = state => ({
  count: state.favorites.length,
});

export default connect(mapStateToProps)(Footer);
