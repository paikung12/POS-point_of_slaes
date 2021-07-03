<template>
<div class="mb-4">
    <div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
        <div class="flex items-center justify-between mb-6">
            <div class="flex items-center">
                <div class="flex flex-col">
                    <div class="flex items-center justify-between mb-4 space-x-12">
                        <span class="px-2 py-1 flex items-center font-semibold text-xl text-green-400 rounded-md text-gray-800 bg-green-50">
                            Order <div class="ml-3">
                                <v-icon color="orange">mdi-coffee</v-icon>
                            </div>
                        </span>
                        <span class="px-20 py-1 flex items-center font-semibold text-xs rounded-md text-white border border-white  bg-white"></span>
                    </div>
                    <span class="text-sm text-gray-500 dark:text-white ml-2">
                        Summary of order.
                    </span>
                </div>
            </div>
            <div class="text-gray-200 -ml-48">
                <svg width="25" height="25" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z">
                    </path>
                </svg>
            </div>
            <p v-if="response" class=" font-bold text-4xl text-black dark:text-white -ml-16 pr-5">{{count_order}} </p>
        </div>
        <div class="border-t-2 "></div>
        <br>
        <div class="flex items-center justify-between mb-6">
            <div class="flex items-center">
                <div class="flex flex-col">
                    <div class="flex items-center justify-between mb-4 space-x-12">
                        <span class="px-2 py-1 flex items-center font-semibold text-xl text-green-400 rounded-md text-gray-800 bg-green-50">
                            Price <div class="ml-2">
                                <v-icon color="orange">mdi-currency-usd</v-icon>
                            </div>
                        </span>
                        <span class="px-20 py-1 flex items-center font-semibold text-xs rounded-md text-white border border-white  bg-white"></span>
                    </div>
                    <span class="text-sm text-gray-500 dark:text-white ml-2">
                        Summary of Price.
                    </span>
                </div>
            </div>
            <div class="text-gray-200   -ml-48">
                <svg width="25" height="25" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z">
                    </path>
                </svg>
            </div>
            <p v-if="response" class=" font-bold text-4xl text-black dark:text-white -ml-16 pr-5 "> {{summery_order}}</p>
        </div>
    </div>
    <div class="mt-8">
        <div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
            <div class="flex items-center justify-between mb-6">
                <div class="flex items-center">
                    <div class="flex flex-col">
                        <div class="flex items-center justify-between mb-4 space-x-12">
                            <span class="px-2 py-1 flex items-center font-semibold text-xl text-blue-400 rounded-md text-gray-800 bg-blue-50">
                                Member <div class="ml-3">
                                    <v-icon color="orange">mdi-crown</v-icon>
                                </div>
                            </span>
                            <span class="px-20 py-1 flex items-center font-semibold text-xs rounded-md text-white border border-white  bg-white"></span>
                        </div>
                        <span class="text-sm text-gray-500 dark:text-white ml-2">
                            Summary of order by Member.
                        </span>
                    </div>
                </div>
                <div class="text-gray-200  -ml-32">
                    <svg width="25" height="25" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z">
                        </path>
                    </svg>
                </div>
                <p v-if="response" class=" font-bold text-4xl text-black dark:text-white ml-2 pr-5"> {{count_member}}</p>
            </div>
            <div class="border-t-2 "></div>
            <br>
            <div class="flex items-center justify-between mb-6">
                <div class="flex items-center">
                    <div class="flex flex-col">
                        <div class="flex items-center justify-between mb-4 space-x-12">
                            <span class="px-2 py-1 flex items-center font-semibold text-xl text-blue-400 rounded-md text-gray-800 bg-blue-50">
                                Anonymous <div class="ml-3">
                                    <v-icon color="orange">mdi-account</v-icon>
                                </div>
                            </span>
                            <span class="px-16 py-1 flex items-center font-semibold text-xs rounded-md text-white border border-white  bg-white"></span>
                        </div>
                        <span class="text-sm text-gray-500 dark:text-white ml-2">
                            Summary of order by Anonymous.
                        </span>
                    </div>
                </div>
                <div class="text-gray-200 -ml-32">
                    <svg width="25" height="25" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z">
                        </path>
                    </svg>
                </div>
                <p v-if="response" class=" font-bold text-4xl text-black dark:text-white ml-2 pr-5"> {{count_anon}}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import moment from 'moment'
import {
    Product
} from '~/vuexes/product';
export default {
    props: {
        month: {
            default: "January"
        },
        year: {
            default: "2021"
        },
    },
    data: () => ({
        count_order: 0,
        summery_order: 0,
        count_member: 0,
        count_anon: 0,
        response: false,
        selectMonth: 1,
        day: "",
        selectYear: '',
    }),
    async created() {
        await this.getOrder()
        this.response = true
    },
    methods: {
        async getOrder() {
            this.selectMonth = moment().month(this.month).format("M")
            this.selectYear = moment().year(this.year).format("YYYY")
            var order = await Product.getOrderViewByDate(this.day, this.selectMonth, this.selectYear)
            for (let index = 0; index < order.length; index++) {

                this.count_order += order[index].count
                this.summery_order += order[index].total_price
                if (order[index].member == 1) {
                    this.count_anon += order[index].count
                } else {
                    this.count_member += order[index].count
                }

            }
        },

    }
}
</script>
