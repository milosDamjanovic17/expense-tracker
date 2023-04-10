import React from 'react';
import './Chart.css'
import ChartBar from './ChartBar';

const Chart = (props) => {

    // extract and store value fields from dataPoints(chartDataPoints value:{}) collection 
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);

    // store the maximum value from dataPointValues
    const totalMaximum = Math.max(...dataPointValues);

    return(
        <div className='chart'>

        {/* rendering ChartBar(chartDataPoints in ExpensesChart component) collection dynamically  */}
        {props.dataPoints.map(dataPoint => 
        
            <ChartBar 
                key = {dataPoint.label}
                value = {dataPoint.value}
                maxValue = {totalMaximum}
                label = {dataPoint.label}
            />)}

        </div>

    );
}


export default Chart;