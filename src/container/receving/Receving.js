import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Receving.scss';
import StackBarChart from '../../shared/components/charts/stack-bar/StackBar';
import PieChartComponent from '../../shared/components/charts/pie-chart/PieChart';
import { API_END_POINTS as apiEndPoints } from '../../core/constants/index';
import { GLOBAL_CONSTS as constants } from '../../core/constants/index';

import {
  getRecevingRevenues,
  getRecevingRevenuesChartData
} from '../../core/actions';

class Receving extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartStyle: {
        margin: {
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }
      }
    };
    //this.activeTab = this.activeTab.bind(this);
  }

  componentDidMount() {
    this.props.getRecevingRevenues(apiEndPoints.recRevenueData);
    this.props.getRecevingRevenuesChartData(apiEndPoints.recChartData);
  }

  render() {
    return (
      <div className="receiving-container">
        <div className="row">
          <div className="col-md-4">
            <h1 className="page-title">Receiving</h1>
          </div>
          <div className="col-md-4">
            <h1 className="page-title">Received</h1>
          </div>
          <div className="col-md-4">
            <h1 className="page-title">Due Next 4 Week</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-2">
                <div className="left-link-section">
                  <span>
                    <Link to="/ready-to-ship">Ready to Ship</Link>
                  </span>
                </div>
              </div>
              <div className="col-md-10">
                <div className="revenue-section">
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
            </div>
          </div>
          <div className="col-md-4">
            <div className="middle-section">
              <div className="row">
                <div className="col-md-12">
                  <PieChartComponent />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="right-section">
              <StackBarChart
                width={300}
                height={300}
                margin={this.state.chartStyle.margin}
                data={this.props.chartData}
                layout="horizontal"
                customLabel={false}
                xAxisType="number"
                yAxisType="category"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    revenueData: state.organisation.receving.revenues,
    chartData: state.organisation.receving.chartData
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getRecevingRevenues,
      getRecevingRevenuesChartData
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Receving);
