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
            <div id="chart" v-if="response">

                <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import moment from 'moment'
import {
    Product
} from '~/vuexes/product';
import _ from 'lodash'
export default {
    props: {
        month: {
            default: "January"
        }
    },
    components: {
        apexchart: VueApexCharts,
    },
    data: () => ({
        series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        chartOptions: {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: 'Product Trends by Month',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: [],
            }
        },
        selectMonth: 1,
        year: null,
        date: [],
        order: [],
        dayinmonth: [],
        response:false
    }),
    async created() {
        this.selectMonth = moment().month(this.month).format("M")
        this.year = moment().format("YYYY")
        await this.getOrder()
        this.response = true;
    },
    methods: {
        
        async getOrder() {
            this.order = await Product.getOrderByDate(this.selectMonth, this.year)
            for (let index = 0; index < this.order.length; index++) {
                this.order[index].date = moment(this.order[index].create_at).format("DD/MM/YY")
            }
            var test = _.chain(this.order)
                // Group the elements of Array based on `color` property
                .groupBy("date") 
                .map((value, key) => ({
                    date: key,
                    order: value,
                    priceAll: _.sumBy(value,(r)=>{return r.total_price})
                }))
                .value() //_().groupBy(this.order, function (b) {return b.date})

            console.log(test,_.map(test,'date'))

             this.chartOptions.xaxis.categories  =  _.map(test,'date')
             this.series[0].data =  _.map(test,'priceAll')

        }
    }

};
</script>
