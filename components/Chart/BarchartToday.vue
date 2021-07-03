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
import moment from 'moment'
import {
    Product
} from '~/vuexes/product';
export default {
    props: {
        date: {
            default: "1"
        },

    },
    components: {
        apexchart: VueApexCharts,
    },
    data: () => ({
        typename: [],
        selectDay: "",
        selectMonth: "",
        selectYear: "",
        price_coffee: 0,
        price_tea: 0,
        price_milk: 0,
        price_soda: 0,
        price_smoothie: 0,
        price_dessert: 0,
        price_time: 0,
        order: [],
        test: {
            name: "ToTal Price In Today",
            data: null
        },

        response: false,
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
        this.selectDay = moment(this.date).format("D")
        this.selectMonth = moment(this.date).format("M")
        this.selectYear = moment(this.date).format("YYYY")
        await this.getData()
        await this.getAllPrice()
        this.response = true
    },
    methods: {
        async getData() {
            let product_type = await Product.getProducttype()
            for (let index = 0; index < product_type.length; index++) {
                this.typename.push(product_type[index].name)
            }
            this.options.xaxis.categories = this.typename

        },
        async getAllPrice() {
            var order = await Product.getOrderViewByDate(this.selectDay, this.selectMonth, this.selectYear)

            for (let index = 0; index < order.length; index++) {

                if (order[index].product.type_id == 1) {
                    this.price_coffee += order[index].total_price
                }
                 else if (order[index].product.type_id == 2) {
                    this.price_tea += order[index].total_price
                } 
                else if (order[index].product.type_id == 3) {
                    this.price_milk += order[index].total_price
                } 
                else if (order[index].product.type_id == 4) {
                    this.price_soda += order[index].total_price
                } 
                else if (order[index].product.type_id == 5) {
                    this.price_smoothie += order[index].total_price
                } 
                else if (order[index].product.type_id == 6) {
                    this.price_dessert += order[index].total_price
                } 
                else if (order[index].product.type_id == 7) {
                    this.price_time += order[index].total_price
                }

            }
            this.test.data = [
                this.price_coffee,
                this.price_tea,
                this.price_milk,
                this.price_soda,
                this.price_smoothie,
                this.price_dessert,
                this.price_time
            ]

            this.series[0] = this.test
        },
    },

};
</script>
