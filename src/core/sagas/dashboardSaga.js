import { call, put, takeLatest } from 'redux-saga/effects';
import { ORGANISATION_CONSTS } from '../constants';
import {
  createData,
  fetchData,
  deleteData,
  updateData
} from '../http/http-organisation';

function* fetchReadyToShipRevenueData(action) {
  try {
    const data = yield call(fetchData, action.param);
    yield put({
      type: ORGANISATION_CONSTS.SET_READY_TO_SHIP_REVENUE_DATA,
      payload: data
    });
  } catch (e) {
    yield put({
      type: ORGANISATION_CONSTS.ERROR_FETCHING_DATA,
      message: e.message
    });
  }
}

function* fetchReadyToShipChartData(action) {
  try {
    const data = yield call(fetchData, action.param);
    yield put({
      type: ORGANISATION_CONSTS.SET_READY_TO_SHIP_CHART_DATA,
      payload: data
    });
  } catch (e) {
    yield put({
      type: ORGANISATION_CONSTS.ERROR_FETCHING_DATA,
      message: e.message
    });
  }
}

function* fetchReceivingRevenueData(action) {
  try {
    const data = yield call(fetchData, action.param);
    yield put({
      type: ORGANISATION_CONSTS.SET_RECEVING_REVENUE_DATA,
      payload: data
    });
  } catch (e) {
    yield put({
      type: ORGANISATION_CONSTS.ERROR_FETCHING_DATA,
      message: e.message
    });
  }
}

function* fetchReceivingChartData(action) {
  try {
    const data = yield call(fetchData, action.param);
    yield put({
      type: ORGANISATION_CONSTS.SET_RECEVING_REVENUE_CHART_DATA,
      payload: data
    });
  } catch (e) {
    yield put({
      type: ORGANISATION_CONSTS.ERROR_FETCHING_DATA,
      message: e.message
    });
  }
}

export default function* dashboardSaga() {
  yield takeLatest(
    ORGANISATION_CONSTS.GET_READY_TO_SHIP_REVENUE_DATA,
    fetchReadyToShipRevenueData
  );
  yield takeLatest(
    ORGANISATION_CONSTS.GET_READY_TO_SHIP_CHART_DATA,
    fetchReadyToShipChartData
  );
  yield takeLatest(
    ORGANISATION_CONSTS.GET_RECEVING_REVENUE_DATA,
    fetchReceivingRevenueData
  );
  yield takeLatest(
    ORGANISATION_CONSTS.GET_RECEVING_REVENUE_CHART_DATA,
    fetchReceivingChartData
  );
}
