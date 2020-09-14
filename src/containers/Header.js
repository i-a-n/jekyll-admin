import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

export class Header extends Component {
  render() {
    const { config } = this.props;
    return (
      <div className="header">
        <h3 className="title">
          <Link target="_blank" to={config.url || '/'}>
            <span>{config.title || 'Website Admin Panel'}</span>
          </Link>
        </h3>
        <span className="version">v{process.env.REACT_APP_VERSION}</span>
      </div>
    );
  }
}

Header.propTypes = {
  config: PropTypes.object.isRequired,
};

export default Header;
