import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './ReadyToShip.scss';
import StackBarChart from '../../shared/components/charts/stack-bar/StackBar';
import { API_END_POINTS as apiEndPoints } from '../../core/constants/index';
import { GLOBAL_CONSTS as constants } from '../../core/constants/index';

import {
  getReadyToShipRevenues,
  getReadyToShipChartData
} from '../../core/actions';

class ReadyToShip extends Component {
  constructor() {
    super();
    this.state = {
      chartTypes: constants.readyToShip.chart,
      activeTab: 0,
      chartTabs: constants.readyToShip.chartTabs,
      chartStyle: {
        margin: {
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }
      }
    };
    this.activeTab = this.activeTab.bind(this);
  }

  componentDidMount() {
    this.props.getReadyToShipRevenues(apiEndPoints.rtsRevenueData);
    this.props.getReadyToShipChartData(this.state.chartTypes[0]);
  }

  render() {
    return (
      <div className="ready-to-ship-container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="page-title">Ready to ship</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="left-section">
              {Array.isArray(this.props.revenueData) &&
                this.props.revenueData.length &&
                this.props.revenueData.map((res, i) => (
                  <div key={i} className="label-group row">
                    <label
                      htmlFor="potentialRevenues"
                      className="col-sm-7 label"
                    >
                      {res.label} :
                    </label>
                    <div className="col-sm-2">
                      <span className="labe-value">${res.value}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="col-md-7">
            <div className="middle-section">
              <div className="row">
                <div className="col-md-12">
                  <div className="chart-tabs-container">
                    <ul className="chart-tabs">
                      {this.state.chartTabs.map((res, index) => (
                        <li
                          key={res.label}
                          onClick={event => this.activeTab(event, index)}
                        >
                          <a
                            className={
                              this.state.activeTab === index ? 'active' : ''
                            }
                          >
                            {res.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <StackBarChart
                    width={900}
                    height={300}
                    margin={this.state.chartStyle.m}
                    data={this.props.chartData}
                    customLabel={true}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="right-section">
              <span>
                <Link to="/receiving">Receving</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  activeTab(event, index) {
    event.preventDefault();
    this.setState({
      activeTab: index
    });
    if (index !== undefined) {
      this.props.getReadyToShipChartData(this.state.chartTypes[index]);
    }
  }
}

const mapStateToProps = state => {
  return {
    revenueData: state.organisation.readyToShip.revenues,
    chartData: state.organisation.readyToShip.chartData
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getReadyToShipRevenues,
      getReadyToShipChartData
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReadyToShip);
