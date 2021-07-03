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
                <div class="font-bold text-3xl pl-5 text-white ">Summary of Month</div>
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

            <v-select @change="changeMonth()" dark :items="month_items" v-model="month" label="Month" outlined></v-select>
        </v-col>
        <v-col cols="2" sm="2">

            <v-select @change="changeYear()" dark :items="items" v-model="year" label="Year" outlined></v-select>
        </v-col>

    </div>
    <div class="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
        <!-- <---Summary of Product ---->
        <div class="flex flex-col flex-wrap sm:flex-row ">
            <div class="w-full sm:w-1/2 xl:w-1/5" v-if="response">
                <Chart-SumMonth :month="month" :year="year" />
            </div>

            <!-- <---Table Sum ---->
            <div class="w-full sm:w-1/2 xl:w-4/5 pl-8">
                <div class="flex flex-wrap">
                    <div class="w-full" v-if="response">
                        <Chart-LiechartMonth :month="month" :year="year" />
                    </div>
                    <div class="w-full " v-if="response">
                        <Chart-BarchartMonth :month="month" :year="year" />
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
const months = Array.from({
    length: 12
}, (e, i) => {
    return new Date(null, i + 1, null).toLocaleDateString("en", {
        month: "long"
    });
})
const now = new Date().getUTCFullYear();
const years = Array(now - (now - 3)).fill('').map((v, idx) => now - idx);

export default {
    watch: {},
    data: () => ({
        items: years,

        radioGroup: 0,
        day: "",
        month: moment().format("MMMM"),
        year: moment().format("YYYY"),

        month_items: months,
        response: false,
        selectMonth: 1,
    }),
    async created() {

        this.response = true;

    },
    methods: {

        async changeMonth() {
            this.response = false;
            setInterval(() => {
                this.response = true;
            }, 500);

        },
        async changeYear() {
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
