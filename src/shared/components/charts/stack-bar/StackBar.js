import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList
} from 'recharts';

const renderCustomizedLabel = props => {
  const { x, y, width, height, value } = props;
  const radius = 10;

  return (
    <g>
      <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
      <text
        x={x + width / 2}
        y={y - radius}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {value.split(' ')[1]}
      </text>
    </g>
  );
};

export default class StackBarChart extends PureComponent {
  constructor() {
    super();
  }
  render() {
    const {
      width,
      height,
      margin,
      data,
      layout,
      customLabel,
      xAxisType,
      yAxisType
    } = this.props;
    return (
      <BarChart
        width={width}
        height={height}
        data={data}
        margin={margin}
        layout={layout}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xAxisType ? 'name' : ''} type={xAxisType} />
        <YAxis dataKey={yAxisType ? 'name' : ''} type={yAxisType} />
        <Tooltip />
        <Legend />

        <Bar dataKey="pv" fill="#80d62a" minPointSize={5} />
        <Bar dataKey="pv" fill="#80d62a" minPointSize={5}>
          {customLabel && (
            <LabelList dataKey="name" content={renderCustomizedLabel} />
          )}
        </Bar>
        <Bar dataKey="uv" fill="#0f9dfc" minPointSize={10} />
      </BarChart>
    );
  }
}
