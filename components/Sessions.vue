<template>
<div>
    <div>
        <div class="flex flex-row grid mt-8  gap-8 grid-cols-2 md:grid-cols-2 xl:grid-cols-">
 
            <div v-for="(item,i) in viewsession" :key="i">
                <div class="widget w-full p-4 rounded-xl bg-white border-l-8 border-green-400 shadow-md">
                    <div class="flex items-center">
                        <div class=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3 ">
                            <BaseTimer :id="item.id" :start_time="item.start_at" :end_time="item.end_at" />
                        </div>
                        <div class="flex-auto ml-3 justify-evenly py-2">
                            <div class="flex flex-wrap">
                                <div class="w-full flex-none text-xs text-blue-700 font-medium ">
                                    Working Space
                                </div>
                                <div>
                                    <h2 class="flex-auto text-lg font-medium">{{item.member.name}}</h2>
                                </div>
                            </div>
                            <p class="mt-13"></p>
                            <div class="flex p-4 pb-2 border-t border-gray-200 "></div>
                            <div class="flex space-x-3 text-sm font-medium">
                                <div class="flex-auto flex space-x-3">
                                    <div class="flex justify-center items-center">
                                        <div class="flex justify-start">
                                            <div>
                                                <v-btn class="ma-1 rounded-lg" outlined color="warning" @click="$router.push(`Page_order?session=${item.id}&&member=${item.member.id}`)">
                                                    <v-icon dense>mdi-cart-plus</v-icon>
                                                    Add order
                                                </v-btn>
                                            </div>
                                            <div class="pl-3">
                                                <!-- Dialog Time -->
                                                <v-dialog v-model="dialog1" rounded width="500px">
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-btn v-bind="attrs" v-on="on" class="ma-1 " outlined color="blue">
                                                            <v-icon>mdi-clock-outline</v-icon> Time
                                                        </v-btn>
                                                    </template>
                                                    <div class="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
                                                        <div class="text-center">
                                                            <h2 class="mt-5 text-3xl font-bold text-gray-900">
                                                                Working Space
                                                            </h2>
                                                            <p class="mt-2 text-sm text-gray-400">The order you ordered text.</p>
                                                        </div>
                                                        <FromWorking />
                                                    </div>
                                                </v-dialog>
                                            </div>
                                            <!--End Dialog Time -->
                                            <!-- Check Bin -->
                                            <v-btn @click="changeStatus(item.id)" class="ma-1 " outlined color="error">
                                                <v-icon>mdi-clipboard-text-multiple-outline</v-icon> Close Session
                                            </v-btn>
                                            <!-- End Check Bin -->
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
import {
    Time
} from '../vuexes/time'
import {
    Session
} from '../vuexes/session'
export default {
    
    data() {
        return {
            form: {
                status: 2,
            },
            formTime: {},
            dialog1: false,
            session: [],
            viewsession: [],
        }
    },
    async created() {
        this.viewsession = await Session.getViewsession(1)


    },
    methods: {
        async changeStatus(pk: number) {
            let save = await Session.updateSession(pk, this.form)
            alert(0)
        },

    },
}
</script>
