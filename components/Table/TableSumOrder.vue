<template>
<div>
    <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
        <div class=" overflow-y-scroll" style="height: 50vh;">
            <table class="min-w-full">
                <thead>
                    <tr>
                        <th class="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">No</th>
                        <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Order</th>
                        <th class="py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Count</th>
                        <th class="py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Prices</th>
                        <th class="px-6 py-3 border-b-2 border-gray-300 text-blue-500">Manage</th>
                    </tr>
                </thead>
                <tbody class="bg-white">
                    <tr v-for="(item,i) in order_today" :key="i">
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                            <div class="flex items-center">
                                <div>
                                    <div class="text-sm leading-5 text-gray-800">{{i+1}}</div>
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                            <div class="text-sm leading-5 text-gray-900">{{item.product.product_named}}</div>
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                            <div class="text-sm leading-5 text-gray-900">{{item.count}} </div>
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                            <div class="text-sm leading-5 text-gray-900">{{item.total_price}} </div>
                        </td>
                        <td class="flex justify-center px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                            <div class="text-center">
                                <v-dialog v-model="dialog" width="500">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn icon color="blue lighten-2" dark v-bind="attrs" v-on="on">
                                            <v-icon>mdi-eye</v-icon>
                                        </v-btn>
                                    </template>
                                    <v-card rounded="xl">
                                        <v-card-title>
                                            <div class="text-center p-5 flex-auto justify-center">
                                                <v-icon x-large color="orange">mdi-chef-hat</v-icon>
                                                <h2 class="text-xl font-bold py-4 ">Order Details</h2>
                                            </div>
                                        </v-card-title>
                                        <v-card-text>
                                            <div class="grid grid-cols-3 lg:grid-cols-3 gap-5 w-full ">
                                                <div class="flex" v-for="(item,i) in item.detail" :key="i">
                                                    <div class="mt-2">
                                                        {{item.name}}
                                                    </div>
                                                </div>
                                            </div>
                                        </v-card-text>
                                        <v-card-actions>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>
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
        date: {
            default: "1"
        },

    },
    data: () => {
        return ({
            dialog1: false,
            selectDay: "",
            selectMonth: "",
            selectYear: "",
            order_today: [],
            response: false,
        })
    },
    async created() {
        this.selectDay = moment(this.date).format("D")
        this.selectMonth = moment(this.date).format("M")
        this.selectYear = moment(this.date).format("YYYY")
        await this.getOrder()
        this.response = true

    },
    methods: {
        async getOrder() {
            this.order_today = await Product.getOrderViewByDate(this.selectDay, this.selectMonth, this.selectYear)

        },
    }
}
</script>

<style>

</style>
