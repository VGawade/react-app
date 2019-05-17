import { ORGANISATION_CONSTS } from '../constants/index';

const getReadyToShipRevenues = param => {
  return {
    type: ORGANISATION_CONSTS.GET_READY_TO_SHIP_REVENUE_DATA,
    param
  };
};

const setReadyToShipRevenues = payload => ({
  type: ORGANISATION_CONSTS.SET_READY_TO_SHIP_REVENUE_DATA,
  payload
});

const getReadyToShipChartData = param => {
  return {
    type: ORGANISATION_CONSTS.GET_READY_TO_SHIP_CHART_DATA,
    param
  };
};

const setReadyToShipChartData = payload => ({
  type: ORGANISATION_CONSTS.SET_READY_TO_SHIP_CHART_DATA,
  payload
});

const getRecevingRevenues = param => {
  return {
    type: ORGANISATION_CONSTS.GET_RECEVING_REVENUE_DATA,
    param
  };
};

const setRecevingRevenues = payload => ({
  type: ORGANISATION_CONSTS.SET_RECEVING_REVENUE_DATA,
  payload
});

const getRecevingRevenuesChartData = param => ({
  type: ORGANISATION_CONSTS.GET_RECEVING_REVENUE_CHART_DATA,
  param
});

const setRecevingRevenuesChartData = payload => ({
  type: ORGANISATION_CONSTS.SET_RECEVING_REVENUE_CHART_DATA,
  payload
});

export {
  getReadyToShipRevenues,
  setReadyToShipRevenues,
  getReadyToShipChartData,
  setReadyToShipChartData,
  getRecevingRevenues,
  setRecevingRevenues,
  getRecevingRevenuesChartData,
  setRecevingRevenuesChartData
};
