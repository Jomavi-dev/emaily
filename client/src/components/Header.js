import React, { Component } from 'react';
import { connect } from 'react-redux';
import Payment from './Payment'
import { Link } from 'react-router-dom';
import "./Header.css"

class Header extends Component {
  renderContent() {
    return this.props.auth
      ? [
        <li key='1'><Payment /></li>,
        <li key='2'><a href="/api/logout">logout</a></li>,
        <li key='3' className='credits_badge'>{this.props.auth.credits}</li>
      ]
      : <li><a href="/auth/google">login with Google</a></li>
  }

  render() {
    return (
      <div className="header">
        <nav className="wrapper">
          <Link to={this.props.auth ? "/surveys" : "/"} className="header__brandName">Emaily.</Link>
          {/* <img src="" alt="emaily" className="header__logo" /> */}
          <ul id="navMenu">
            {this.renderContent()}
          </ul>
        </nav>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);