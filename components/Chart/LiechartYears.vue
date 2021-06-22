<template>
<div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
    <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div class="flex flex-wrap items-center">
            <div class="relative w-full max-w-full flex-grow flex-1">
                <h6 class="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                    Performance
                </h6>
                <h2 class="text-blueGray-700 text-xl font-semibold">
                    Summary of Day
                </h2>
            </div>
        </div>
    </div>
    <div class="p-4 flex-auto">
        <div class="relative h-350-px" style="position: relative; height:350px; width:140vh">
            <canvas id="lie-chartYears"></canvas>
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
                type: "line",
                data: {
                    labels: [
                        'January', 'February', 'March',
                        'April', 'May', 'June', 'July',
                        'August', 'September', 'October',
                        'November', 'December'
                    ],
                    datasets: [{
                        label: 'My First Dataset',
                        data: [65, 59, 80, 81, 56, 55, 40, 30],
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }, ],
                },
                options: {
                    maintainAspectRatio: false,
                    responsive: true,
                    scales: {
                        xAxes: [{
                            stacked: true
                        }, ],
                        yAxes: [{
                            stacked: true
                        }, ],
                    },
                },
            };
            var ctx = document.getElementById("lie-chartYears").getContext("2d");
            window.myBar = new Chart(ctx, config);
        });
    },
};
</script>
