import React, {Component} from 'react';
import {Doughnut} from "react-chartjs-2";

const expenses={
    labels: ["test1", "test2"],
    datasets: [
        {
            label: ["Nombre de dépenses par catégorie"],
            data: [50, 100],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 4
        }
    ]
};



class Charts extends Component {
    render() {
        return (
            <div>
                <Doughnut data={expenses} />
            </div>
        );
    }
}

export default Charts;