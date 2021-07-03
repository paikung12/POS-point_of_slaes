<template>
<div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
    <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div class="flex flex-wrap items-center">
            <div class="relative w-full max-w-full flex-grow flex-1">
                <h6 class="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                    Performance
                </h6>
                <h2 class="text-blueGray-700 text-xl font-semibold">
                    Total orders
                </h2>
            </div>
        </div>
    </div>
    <div class="p-4 flex-auto">
        <div v-if="response" class="relative h-350-px" style="position: relative; height:350px; width:140vh">

            <apexchart width="1320px" height="360px" type="bar" :options="options" :series="series"></apexchart>

        </div>
    </div>
</div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import Chart from "chart.js";
import {
    Product
} from '~/vuexes/product';
import moment from 'moment';
export default {
    props: {

        year: {
            default: "2021"
        },

    },
    components: {
        apexchart: VueApexCharts,
    },

    data: () => ({
        count_coffee: 0,
        count_tea: 0,
        count_milk: 0,
        count_soda: 0,
        count_smoothie: 0,
        count_dessert: 0,
        count_time: 0,
        allcount: {
            name: "Total Order In Year",
            data: null
        },
        response: false,
        dialog1: false,
        product_type: [],
        options: {
            chart: {
                id: 'vuechart-example',
            },
            xaxis: {
                categories: []
            }
        },
        series: [{
            name: '',
            data: []
        }]
    }),
    async created() {
        await this.getType()
        await this.getOrder()
        this.response = true
    },
    methods: {
        async getType() {
            let type = await Product.getProducttype()

            for (let index = 0; index < type.length; index++) {
                this.product_type.push(type[index].name)
            }

            this.options.xaxis.categories = this.product_type

        },
        async getOrder() {
            var order = await Product.getOrderViewByDate("", "", this.year)
            for (let index = 0; index < order.length; index++) {

                if (order[index].product.type_id == 1) {
                    this.count_coffee += order[index].count
                } else if (order[index].product.type_id == 2) {
                    this.count_tea += order[index].count
                } else if (order[index].product.type_id == 3) {
                    this.count_milk += order[index].count
                } else if (order[index].product.type_id == 4) {
                    this.count_soda += order[index].count
                } else if (order[index].product.type_id == 5) {
                    this.count_smoothie += order[index].count
                } else if (order[index].product.type_id == 6) {
                    this.count_dessert += order[index].count
                } else if (order[index].product.type_id == 7) {
                    this.count_time += order[index].count
                }

            }
            this.allcount.data = [
                this.count_coffee,
                this.count_tea,
                this.count_milk,
                this.count_soda,
                this.count_smoothie,
                this.count_dessert,
                this.count_time
            ]
            this.series[0] = this.allcount

        },
    }
}
</script>
