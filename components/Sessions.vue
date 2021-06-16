<template>
<div>
    <div class="flex flex-row grid mt-8  gap-8 grid-cols-2 md:grid-cols-2 xl:grid-cols-">
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
                                        <v-btn class="ma-1 rounded-lg" outlined color="warning" @click="$router.push('Page_order')">
                                            <v-icon dense>mdi-cart-plus</v-icon>
                                            Add order
                                        </v-btn>
                                    </div>
                                    <div class="pl-3">
                                        <!-- Dialog Time -->
                                        <v-dialog v-model="dialog1" rounded width="500px">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn v-bind="attrs" v-on="on" class="ma-1 " outlined color="blue">
                                                  <v-icon>mdi-clock-outline</v-icon>   Time 
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
                                    <div class="pl-3">
                                        <v-dialog v-model="dialog2" rounded width="500px">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn v-bind="attrs" v-on="on" class="ma-1 " outlined color="error">
                                                    <v-icon>mdi-clipboard-text-multiple-outline</v-icon> Close Session
                                                </v-btn>
                                            </template>
                                            <div class="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
                                                <div class="text-center">
                                                    <h2 class="mt-5 text-3xl font-bold text-gray-900">
                                                        Your Orders
                                                    </h2>
                                                    <p class="mt-2 text-sm text-gray-400">The order you ordered text.</p>
                                                </div>
                                                <form class="mt-8 space-y-3" action="#" method="POST">
                                                    <div class="grid grid-cols-1 space-y-2">
                                                        <label class="text-sm font-bold text-gray-700 tracking-wide">The order you have</label>
                                                        <div class="flex items-center justify-center w-full">
                                                            <label class="flex flex-col rounded-lg border-4 border-dashed w-full h-60 pt-3 group text-center">
                                                                <table class=" ">
                                                                    <thead>
                                                                        <tr>
                                                                            <th class="text-blue-400">No</th>
                                                                            <th class="text-blue-400">Order</th>
                                                                            <th class="text-blue-400">Price</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody class="bg-white">
                                                                        <tr>
                                                                            <td>#1</td>
                                                                            <td>Essapesso</td>
                                                                            <td>$ 45 B.</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="flex">
                                                        <div class="w-2/3">
                                                            <p class="text-sm text-gray-500">
                                                                <span class="font-semibold text-2xl">Total</span>
                                                                <span class="font-bold text-2xl text-yellow-400">$ 45</span>
                                                            </p>
                                                        </div>
                                                        <div class="w-1/3">
                                                            <v-text-field label="Filled" outlined dense></v-text-field>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <button type="submit" class="my-5 w-full  flex justify-center bg-blue-500  p-4  rounded-full  font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-400 ">
                                                            <span class="text-white">Check Bill</span>
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </v-dialog>
                                    </div>
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
</template>

<script>
export default {
    data() {
        return {
            dialog1: false,
            dialog2: false,
        }
    },
}
</script>
