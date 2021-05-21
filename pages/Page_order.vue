<template>
<div>
    <div class="flex lg:flex-row flex-col-reverse shadow-lg">
        <!-- left section -->
        <div class="w-full lg:w-3/4 min-h-screen shadow-lg ">
            <!-- header -->
            <div class=" min-h-screen ">
                <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
                    <path d="M 0,400 C 0,400 0,200 0,200 C 44.32605937243913,207.607087155357 88.65211874487827,215.214174310714 135,214 C 181.34788125512173,212.785825689286 229.71758439292603,202.75038991250102 285,210 C 340.282415607074,217.24961008749898 402.4775436834175,241.784266039282 451,257 C 499.5224563165825,272.215733960718 534.3722408734042,278.11254593037086 580,273 C 625.6277591265958,267.88745406962914 682.0334928229664,251.76555023923441 731,239 C 779.9665071770336,226.23444976076559 821.49378783473,216.8252531126913 860,220 C 898.50621216527,223.1747468873087 933.9913558381136,238.93343731000022 991,247 C 1048.0086441618864,255.06656268999978 1126.5407888128157,255.44099764730765 1177,260 C 1227.4592111871843,264.55900235269235 1249.845488910624,273.3025721007692 1289,264 C 1328.154511089376,254.69742789923075 1384.077255544688,227.3487139496154 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#fcb900ff" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 200)"></path>
                </svg>
                <div class="flex flex-row justify-between items-center px-5 -mt-80 ">
                    <v-btn large icon dark class="white--text" fab @click="$router.push('inspire')">
                        <v-icon style="font-size:48px;"> mdi-arrow-left-thin-circle-outline</v-icon>
                    </v-btn>
                    <div class="text-gray-800">
                        <div class="font-bold text-3xl pl-5 text-white ">Menu</div>
                        <span class="text-xs pl-5 text-white">Location ID#SIMON123</span>
                    </div>
                    <div class=" pl-28 flex items-center flex flex-row justify-end">
                        <div class="text-sm text-center mr-4">
                            <div class="font-light  text-white">All Menu </div>
                            <span class="font-semibold text-xl text-white">28</span>
                        </div>
                    </div>
                </div>
                <div class=" lg:pl-5 w-full pt-20 ">
                    <v-tabs color="#FFD352">
                        <v-tab>Coffee</v-tab>
                        <v-tab>Tea</v-tab>
                        <v-tab>Italian Soda</v-tab>
                        <v-tab>Smoothies</v-tab>
                        <v-tab>Bread</v-tab>
                        <v-tab-item>
                            <Tabs-Coffee />
                        </v-tab-item>
                        <v-tab-item>
                            <Tabs-Tea />
                        </v-tab-item>
                        <v-tab-item>
                            <Tabs-Italiansoda />
                        </v-tab-item>
                        <v-tab-item>
                            <Tabs-Smoothies />
                        </v-tab-item>
                        <v-tab-item>
                            <Tabs-Bread />
                        </v-tab-item>
                    </v-tabs>
                </div>
            </div>
        </div>
        <!-- end left section -->
        <!-- right section -->
        <div class="w-full lg:w-1/3">
            <!-- header -->
            <div class="flex flex-row items-center justify-center px-5 mt-5">
                <div class="font-bold text-5xl text-yellow-400">Main Order</div>
            </div>
            <br>
            <pre>{{menuchoose}}</pre>
            <div class=" flex flex-row items-center justify-center ">
                <v-col cols="12" sm="6">
                    <v-text-field label="Name" outlined></v-text-field>
                </v-col>
            </div>
            <!-- end header -->
            <!-- order list -->
            <div class="px-5 py-4 mt-0.5 overflow-y-auto h-64">
                <div class="flex flex-row justify-between items-center mb-4" v-for="(menuchoose,i) in menuchooses" :key="i">
                    <div class="flex flex-row items-center w-2/5">
                        <div class="border-4 border-yellow-400 border-opacity-75 w-10 text-center">{{i+1}}</div>
                        <span class="ml-4 font-semibold text-sm">{{menuchoose.name}}</span>
                    </div>
                    <div class="w-32 flex pt-3 ">
                        <button @click="decreaseCounter(0)" class="bg-white text-yellow-400   hover:text-gray-700 hover:bg-gray-400 h-full w-8 rounded-l cursor-pointer  shadow-lg">
                            -
                        </button>
                        <p class="text-center w-10 bg-white font-sans text-md  shadow-lg text-yellow-400 ">{{counter}}</p>
                        <button @click="increaseCounter(10)" class="bg-white text-yellow-400 hover:text-gray-700 hover:bg-gray-400 h-full w-8 rounded-r cursor-pointer shadow-lg">
                            +
                        </button>
                    </div>
                    <div class="font-semibold text-lg w-16 text-center">
                        {{menuchoose.price}}
                    </div>
                    <button @click="del(i)" class="inline-block p-3 text-center text-white transition bg-red-500 rounded-full shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none">
                        <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
            <!-- end order list -->
            <!-- totalItems -->
            <div class="px-5 mt-5">
                <div class="py-4 rounded-md shadow-lg">
                    <div class=" px-4 flex justify-between ">
                        <span class="font-semibold text-sm">Subtotal Hour</span>
                        <span class="font-bold"> {{SumHr}} hr</span>
                    </div>
                    <div class="border-t-2 mt-3 py-2 px-4 flex items-center justify-between">
                        <span class="font-semibold text-2xl">Total</span>
                        <span class="font-bold text-2xl text-yellow-400">$ {{Sumtotal}}</span>
                    </div>
                </div>
            </div>
            <!-- end total -->
            <!-- cash -->
            <div class="px-5 mt-5">
                <div class="rounded-md shadow-lg px-4 py-4">
                    <div class="flex flex-row justify-between items-center">
                        <div class="flex flex-col">
                            <span class="uppercase text-xs font-semibold">cashless credit</span>
                            <span class=" text-xs text-yellow-400 ">{{SumHr}} hour</span>
                        </div>
                        <div class="px-4 py-3 bg-blue-200 text-blue-400 rounded-md font-bold"> $ {{Sumtotal}}</div>
                    </div>
                </div>
            </div>
            <!-- end cash -->
            <!-- button pay-->
            <div class="px-5 mt-5">
                <div class="px-4 py-4 rounded-md shadow-lg text-center bg-yellow-500 text-white font-semibold">
                    Pay With Cashless Credit
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { Menu } from '@/vuexes/menu'
import { keys } from 'lodash';
export default {
    data: () => {
        return ({
            counter: 0,

        });
    },
    methods: {
        increaseCounter(menuchooses: any) {
            if (this.counter < menuchooses) this.counter++;
        },
        decreaseCounter(menuchooses: any) {
            if (this.counter > menuchooses) this.counter--;
        },
        total: function () {
            let total = 0
        },
        del(i :any){
            this.$delete(this.menuchooses , i)
        }

    },
    computed: {
        output() {
            return this.counter >= 10
        },
        menuchooses() {
            return Menu.chooseMenus
        },
        Sumtotal: function () {
            var sum = 0
            this.menuchooses.forEach((e: { price: number }) => { sum += e.price })
            return sum
        },
        SumHr: function () {
            var sumHr = 0
            this.menuchooses.forEach((e: { hr: number }) => { sumHr += e.hr })
            return sumHr
        },
    }

}
</script>

<style>

</style>
