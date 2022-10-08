
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { MethodType } from '../../../types';
import useBars from './Hooks/useBars';
Chart.register(...registerables);

function BarChart(props: {label:string, data: Array<MethodType>, column: keyof MethodType}) {
    
    const {data, label, column} = props;
    const [bars] = useBars(data,column);
    return (
        <Bar
            data={{
                labels: Object.keys(bars),
                datasets: [{
                    label,
                    data: Object.values(bars)
                }]
            }}
            options= {{
                maintainAspectRatio: false,
                responsive: true
            }}/>
    );
}

export default BarChart;