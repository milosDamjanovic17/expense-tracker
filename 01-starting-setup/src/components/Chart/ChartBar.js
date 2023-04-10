import React from 'react';
import './ChartBar.css'

const ChartBar = (props) => {

    let barFillHeight = '0%';

    if(props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) +'%'; // logic explain: lets say: (props.value = 200 / props.maxValue = 800) * 100 = 0.25 * 100 = 25%
    };

    return(
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' 
                    style={{height: barFillHeight}}> {/* dynamically add height field to ChartBar.css and assign barFillHeight value */}
                </div>
            </div>
            <div className='chart-bar__label'>{props.label}</div>
        </div>

    )
} 


export default ChartBar;