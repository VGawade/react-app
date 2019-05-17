import React, { Component } from 'react';
import './Header.scss';
class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-2">
          <div className="btn-container lft-btn-container">
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-secondary dollar active">
                <input
                  type="radio"
                  name="options"
                  id="option1"
                  autoComplete="off"
                />{' '}
                $
              </label>
              <label className="btn btn-secondary units">
                <input
                  type="radio"
                  name="options"
                  id="option2"
                  autoComplete="off"
                />{' '}
                Units
              </label>
            </div>
          </div>
        </div>
        <div className="col-md-8">H</div>
        <div className="col-md-2">
          <div className="btn-container rt-btn-container">
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-secondary active">
                <input
                  type="radio"
                  name="options"
                  id="option1"
                  autoComplete="off"
                />{' '}
                Settings
              </label>
              <label className="btn btn-secondary">
                <input
                  type="radio"
                  name="options"
                  id="option2"
                  autoComplete="off"
                />{' '}
                Reset
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
