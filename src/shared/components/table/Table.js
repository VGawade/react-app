import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { RowDetailState } from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableRowDetail
} from '@devexpress/dx-react-grid-material-ui';

import { generateRows } from './demoDataGenerator';

const RowDetail = ({ row }) => (
  <div>
    Details for {row.name} from {row.city}
  </div>
);

const theme = createMuiTheme({
  palette: {
    type: 'dark' // Switching the dark mode on is a single property value change.
  },
  typography: { useNextVariants: true }
});

export default class DataTable extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'name', title: 'Name' },
        { name: 'sex', title: 'Sex' },
        { name: 'city', title: 'City' },
        { name: 'car', title: 'Car' }
      ],
      rows: generateRows({ length: 8 })
    };
  }

  render() {
    const { rows, columns } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <Paper>
          <Grid rows={rows} columns={columns}>
            <RowDetailState defaultExpandedRowIds={[2, 5]} />
            <Table />
            <TableHeaderRow />
            <TableRowDetail contentComponent={RowDetail} />
          </Grid>
        </Paper>
      </MuiThemeProvider>
    );
  }
}
