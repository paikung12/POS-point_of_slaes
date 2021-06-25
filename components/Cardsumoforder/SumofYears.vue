<template>
<div>
    <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150 -mt-36">
        <defs>
            <linearGradient id="gradient">
                <stop offset="5%" stop-color="#9900ef88"></stop>
                <stop offset="95%" stop-color="#8ed1fc88"></stop>
            </linearGradient>
        </defs>
        <path d="M 0,400 C 0,400 0,133 0,133 C 57.82009833725449,109.46300457321104 115.64019667450899,85.92600914642206 165,96 C 214.35980332549101,106.07399085357794 255.25931163921865,149.7589679875228 297,161 C 338.74068836078135,172.2410320124772 381.32255676861666,151.03811890348675 432,138 C 482.67744323138334,124.96188109651325 541.4504612863147,120.08855639853022 583,136 C 624.5495387136853,151.91144360146978 648.8755980861243,188.60765550239236 694,174 C 739.1244019138757,159.39234449760764 805.0471463691877,93.4808215919004 859,84 C 912.9528536308123,74.5191784080996 954.9358164371249,121.46905813000609 997,141 C 1039.064183562875,160.5309418699939 1081.2095878823125,152.64294588807527 1130,136 C 1178.7904121176875,119.35705411192473 1234.2258320336248,93.95915831769278 1287,92 C 1339.7741679663752,90.04084168230722 1389.8870839831875,111.52042084115361 1440,133 C 1440,133 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 200)"></path>
        <defs>
            <linearGradient id="gradient">
                <stop offset="5%" stop-color="#9900efff"></stop>
                <stop offset="95%" stop-color="#8ed1fcff"></stop>
            </linearGradient>
        </defs>
        <path d="M 0,400 C 0,400 0,266 0,266 C 40.745314441301645,262.3340955351714 81.49062888260329,258.66819107034286 133,248 C 184.5093711173967,237.33180892965714 246.78279891088846,219.6613312538 295,234 C 343.21720108911154,248.3386687462 377.37817547384276,294.6864839144571 418,309 C 458.62182452615724,323.3135160855429 505.7044991937404,305.5927330883714 556,302 C 606.2955008062596,298.4072669116286 659.8038277511961,308.94258373205736 714,302 C 768.1961722488039,295.05741626794264 823.0801898014751,270.636931983399 878,262 C 932.9198101985249,253.36306801660098 987.8754130429036,260.5096883343466 1025,259 C 1062.1245869570964,257.4903116656534 1081.4181580269105,247.3243146792144 1131,258 C 1180.5818419730895,268.6756853207856 1260.451954849454,300.1930529487959 1317,305 C 1373.548045150546,309.8069470512041 1406.774022575273,287.90347352560207 1440,266 C 1440,266 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 200)"></path>
    </svg>
    <div class="flex justify-end pr-5 -mt-96">
        <div class="flex flex-row justify-between items-center px-5  ">
            <v-btn large icon dark class="white--text" fab @click="$router.push('Home')">
                <v-icon style="font-size:48px;"> mdi-arrow-left-thin-circle-outline</v-icon>
            </v-btn>
            <div class="text-gray-800">
                <div class="font-bold text-3xl pl-5 text-white ">Summary of Years</div>
                <span class="text-xs pl-5 text-white">Location ID#SIMON123</span>
            </div>
            <div class=" pl-28 flex items-center flex flex-row justify-end">
                <div class="text-sm text-center mr-4">
                    <div class="font-light  text-white"></div>
                    <span class="font-semibold text-xl text-white"></span>
                </div>
            </div>
        </div>
        <v-col cols="2" sm="2">
            <!-- <v-select @change="changeYear()" dark :items="items" v-model="year" label="Standard" outlined></v-select> -->
        </v-col>
    </div>
    <div class="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
        <!-- <---Summary of Product ---->
        <div class="flex flex-col flex-wrap sm:flex-row ">
            <div class="w-full sm:w-1/2 xl:w-1/5">
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
                            <p class=" font-bold text-4xl text-black dark:text-white -ml-16 pr-5"> {{count_order}}</p>
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
                            <p class=" font-bold text-4xl text-black dark:text-white -ml-16 pr-5 "> {{summery_order}}</p>
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
                                <p class=" font-bold text-4xl text-black dark:text-white ml-2 pr-5"> {{count_member}}</p>
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
                                <p class=" font-bold text-4xl text-black dark:text-white ml-2 pr-5"> {{count_anon}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- <---Table Sum ---->
            <div class="w-full sm:w-1/2 xl:w-4/5 pl-8">
                <div class="flex flex-wrap">
                    <div class="w-full">
                        <Chart-LiechartYears :year="year" />
                    </div>

                </div>

            </div>
        </div>
        <!-- <---Summary of Today ---->
    </div>
</div>
</template>

<script>
import moment from 'moment';
import {
    Product
} from '~/vuexes/product'
import {
    rearg
} from 'lodash';
const now = new Date().getUTCFullYear();
const years = Array(now - (now - 3)).fill('').map((v, idx) => now - idx);
export default {
    watch: {},
    data: () => ({
        response: false,
        items: years,
        year: null,
        count_order: 0,
        summery_order: 0,
        count_member: 0,
        count_anon: 0,
    }),
    async created() {
        this.year = moment().format("YYYY")
        await this.getOrder()
        this.response = true
    },
    methods: {
        async getOrder() {
            var order = await Product.getViewOrder()
            let thisyear = moment().startOf("year").format()
            let endyear = moment().startOf("year").add(1, 'year').format()
            for (let index = 0; index < order.length; index++) {
                if (order[index].create_at >= thisyear && order[index].create_at <= endyear) {
                    this.count_order += order[index].count
                    this.summery_order += order[index].total_price
                    if (order[index].member == 1) {
                        this.count_anon += order[index].count
                    } else {
                        this.count_member += order[index].count
                    }
                }
            }
        },
        async changeYear() {
            console.log(this.year)
            this.response = false;
            setInterval(() => {
                this.response = true;
            }, 500);

        }

    }
}
</script>

<style>

</style>
