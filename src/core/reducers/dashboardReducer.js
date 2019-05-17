import { ORGANISATION_CONSTS } from '../constants/index';

const initialState = {
  readyToShip: {
    revenues: [],
    chartData: []
  },
  receving: {
    revenues: {},
    chartData: []
  }
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORGANISATION_CONSTS.SET_READY_TO_SHIP_REVENUE_DATA: {
      return Object.assign({}, state, {
        readyToShip: {
          ...state.readyToShip,
          revenues: [...action.payload]
        }
      });
    }
    case ORGANISATION_CONSTS.SET_READY_TO_SHIP_CHART_DATA: {
      return Object.assign({}, state, {
        readyToShip: {
          ...state.readyToShip,
          chartData: [...action.payload]
        }
      });
    }
    case ORGANISATION_CONSTS.SET_RECEVING_REVENUE_DATA: {
      return Object.assign({}, state, {
        receving: {
          revenues: action.payload
        }
      });
    }
    case ORGANISATION_CONSTS.SET_RECEVING_REVENUE_CHART_DATA: {
      return Object.assign({}, state, {
        receving: {
          ...state.receving,
          chartData: [...action.payload]
        }
      });
    }
    default:
      return state;
  }
};

export default dashboardReducer;
