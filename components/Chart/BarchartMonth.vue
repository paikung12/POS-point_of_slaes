<template>
<div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
    <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div class="flex flex-wrap items-center">
            <div class="relative w-full max-w-full flex-grow flex-1">
                <h6 class="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                    Performance
                </h6>
                <h2 class="text-blueGray-700 text-xl font-semibold">
                    Total Type Orders
                </h2>
            </div>
        </div>
    </div>
    <div class="p-4 flex-auto">
        <div class="relative h-350-px" style="position: relative; height:350px; width:140vh">
            <canvas id="bar-chartMonth"></canvas>
        </div>
    </div>
</div>
</template>

<script>
import Chart from "chart.js";
export default {
    mounted: function () {
        this.$nextTick(function () {
            let config = {
                type: "bar",
                data: {
                    labels: [
                        "Cofee",
                        "Tea",
                        "Milk",
                        "Smoothies",
                        "ItalianSoda",
                        "Dessert",
                    ],
                    datasets: [{
                        label: new Date().getMonth(),
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 205, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(201, 203, 207, 0.2)'
                        ],
                        borderColor: [
                            'rgb(255, 99, 132)',
                            'rgb(255, 159, 64)',
                            'rgb(255, 205, 86)',
                            'rgb(75, 192, 192)',
                            'rgb(54, 162, 235)',
                            'rgb(153, 102, 255)',
                            'rgb(201, 203, 207)'
                        ],
                        borderWidth: 1,
                        data: [60, 78, 56, 34, 100, 45, 13],
                        fill: false,
                        barThickness: 8,
                    }, ],
                },
                options: {
                    maintainAspectRatio:false,
                    responsive: true,
                    scales: {
                        xAxes: [{
                            stacked: true
                            },
                         ],
                        yAxes: [{
                            stacked: true,
                            scaleLabel: {
                                display: false,
                                labelString: "Value",
                            },
                            gridLines: {
                                borderDash: [2],
                                drawBorder: false,
                                borderDashOffset: [2],
                                color: "rgba(33, 37, 41, 0.2)",
                                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        }, ],
                    },
                },
            };
            var ctx = document.getElementById("bar-chartMonth").getContext("2d");
            window.myBar = new Chart(ctx, config);
        });
    },
};
</script>
