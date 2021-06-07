<template>
<div>
    <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150 -mt-20">
        <defs>
            <linearGradient id="gradient">
                <stop offset="5%" stop-color="#002bdc88"></stop>
                <stop offset="95%" stop-color="#32ded488"></stop>
            </linearGradient>
        </defs>
        <path d="M 0,400 C 0,400 0,133 0,133 C 89.97129186602871,146.11004784688996 179.94258373205741,159.2200956937799 274,161 C 368.0574162679426,162.7799043062201 466.200956937799,153.22966507177034 557,132 C 647.799043062201,110.77033492822966 731.2535885167465,77.86124401913877 824,87 C 916.7464114832535,96.13875598086123 1018.7846889952154,147.32535885167462 1123,162 C 1227.2153110047846,176.67464114832538 1333.6076555023924,154.83732057416267 1440,133 C 1440,133 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 200)"></path>
        <defs>
            <linearGradient id="gradient">
                <stop offset="5%" stop-color="#002bdcff"></stop>
                <stop offset="95%" stop-color="#32ded4ff"></stop>
            </linearGradient>
        </defs>
        <path d="M 0,400 C 0,400 0,266 0,266 C 104.88038277511961,273.6555023923445 209.76076555023923,281.31100478468903 301,274 C 392.2392344497608,266.68899521531097 469.83732057416285,244.4114832535885 552,230 C 634.1626794258372,215.5885167464115 720.8899521531099,209.0430622009569 834,218 C 947.1100478468901,226.9569377990431 1086.6028708133972,251.41626794258372 1192,262 C 1297.3971291866028,272.5837320574163 1368.6985645933014,269.2918660287081 1440,266 C 1440,266 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 200)"></path>
    </svg>
    <div class="flex -mt-30">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 pl-16 py14 pt-8 -mt-96">
            <Button-BtnAddOrder />

            <Button-BtnWorkingSpace />

            <Button-BtnAddMember />

            <Button-BtnSummaryofOrder />
        </div>
    </div>
    <div class="col-span-12  pl-16 pr-16">
        <div class="grid gap-2 grid-cols-1 lg:grid-cols-1">
            <div class="bg-white p-4  rounded-lg">
                <div class="text-4xl text-center font-extrabold">
                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 ">
                        Sessions
                    </span>
                </div>
                <div class="flex flex-row grid mt-8  gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    <div class="widget w-full p-4 rounded-xl bg-white border-l-8 border-green-400 shadow-md ">
                        <div class="flex items-center">
                            <div class=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3 ">
                                <BaseTimer />
                            </div>
                            <div class="flex-auto ml-3 justify-evenly py-2">
                                <div class="flex flex-wrap ">
                                    <div class="w-full flex-none text-xs text-blue-700 font-medium ">
                                        Working Space
                                    </div>
                                    <h2 class="flex-auto text-lg font-medium ">Massive Dynamic</h2>
                                </div>
                                <p class="mt-13"></p>
                                <div class="flex p-4 pb-2 border-t border-gray-200 "></div>
                                <div class="flex space-x-3 text-sm font-medium">
                                    <div class="flex-auto flex space-x-3">
                                        <div class="flex justify-center items-center">
                                            <div class="flex justify-start">
                                                <div>
                                                    <v-btn class="ma-1 rounded-lg" outlined color="warning">
                                                        <v-icon dense>mdi-cart-plus</v-icon>
                                                        Add order
                                                    </v-btn>
                                                </div>
                                                <div class="pl-3">
                                                    <v-btn class="ma-1 rounded-lg" outlined color="primary">
                                                        <v-icon dense>mdi-clock-outline</v-icon>
                                                        Time
                                                    </v-btn>
                                                </div>
                                                <div class="pl-3">
                                                    <v-btn class="ma-1 " outlined color="error">
                                                        <v-icon dense>mdi-close</v-icon>
                                                    </v-btn>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { Session } from '~/vuexes/session'
export default {
    data () {
        return{
            session: []
        }
    },
    async created (){
        this.session = await Session.getSession()
    },
}
</script>

<style>

</style>
