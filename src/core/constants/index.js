const ORGANISATION_CONSTS = {
  GET_READY_TO_SHIP_REVENUE_DATA: 'GET_READY_TO_SHIP_REVENUE_DATA',
  SET_READY_TO_SHIP_REVENUE_DATA: 'SET_READY_TO_SHIP_REVENUE_DATA',
  GET_RECEVING_REVENUE_DATA: 'GET_RECEVING_REVENUE_DATA',
  SET_RECEVING_REVENUE_DATA: 'SET_RECEVING_REVENUE_DATA',
  GET_READY_TO_SHIP_CHART_DATA: 'GET_READY_TO_SHIP_CHART_DATA',
  SET_READY_TO_SHIP_CHART_DATA: 'SET_READY_TO_SHIP_CHART_DATA',
  GET_RECEVING_REVENUE_CHART_DATA: 'GET_RECEVING_REVENUE_CHART_DATA',
  SET_RECEVING_REVENUE_CHART_DATA: 'SET_RECEVING_REVENUE_CHART_DATA'
};

const API_END_POINTS = {
  rtsRevenueData: 'ready-to-ship-revenue-data',
  rtsTableData: 'ready-to-ship-table-data',
  recRevenueData: 'receiving-revenue-data',
  recTableData: 'receiving-table-data',
  recChartData: 'pie-chart-data'
};

const GLOBAL_CONSTS = {
  readyToShip: {
    chartTabs: [
      {
        label: 'All'
      },
      {
        label: 'Top Customers'
      },
      {
        label: 'Will call'
      },
      {
        label: 'Hold'
      }
    ],
    chart: [
      'stack-bar-all',
      'stack-bar-top',
      'stack-bar-will-call',
      'stack-bar-hold'
    ]
  }
};

export { ORGANISATION_CONSTS, API_END_POINTS, GLOBAL_CONSTS };
