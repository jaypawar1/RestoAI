import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const Linechart = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const myChartRef = chartRef.current.getContext("2d");

        chartInstance.current = new Chart(myChartRef, {
            type: 'line',
            data: {
                labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
                datasets: [{
                    label: 'My First Dataset',
                    data: [65, 55, 60, 21, 56, 35, 80,22,34,56,43,83,43,86,23,12,32,75,32,43,37,97,33,23,53,55,76,18,96,54,34],
                    fill: true, // Enable filling under the line
                    backgroundColor: 'rgba(0, 153, 69,0.2)',// Ensure no filling under the line
                    borderColor: '#009945',
                    tension: 0.1,
                    pointRadius: 0, // Hide points on the line
                    pointBorderWidth: 0, // Ensure no border around the points
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false // Set to false if you also want to hide the legend
                    }
                },
                scales: {
                    x: {
                        display: false // Set to false to hide the x-axis labels and grid lines
                    },
                    y: {
                        display: false // Set to false to hide the y-axis labels and grid lines
                    }
                }
            }
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <div className="w-[30vw] flex justify-center items-center">
            <canvas ref={chartRef} style={{ width: "15vw", height: "50px" }} />
        </div>
    );
};

export default Linechart;
