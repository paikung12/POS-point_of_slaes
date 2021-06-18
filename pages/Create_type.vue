<template>
<div>
    <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150 -mt-20">
        <defs>
            <linearGradient id="gradient">
                <stop offset="5%" stop-color="#0693e388"></stop>
                <stop offset="95%" stop-color="#8ed1fc88"></stop>
            </linearGradient>
        </defs>
        <path d="M 0,400 C 0,400 0,133 0,133 C 39.12031774564487,159.3539612466626 78.24063549128974,185.70792249332524 128,179 C 177.75936450871026,172.29207750667476 238.1577757804859,132.5222712733617 289,131 C 339.8422242195141,129.4777287266383 381.12826138676684,166.20299241322795 434,175 C 486.87173861323316,183.79700758677205 551.3291786724471,164.6657590737265 599,151 C 646.6708213275529,137.3342409262735 677.555023923445,129.13397129186603 726,118 C 774.444976076555,106.86602870813398 840.450725633773,92.7983557588094 882,101 C 923.549274366227,109.2016442411906 940.6420735414629,139.67260567289645 985,150 C 1029.3579264585371,160.32739432710355 1100.9809802003754,150.51122154960478 1151,152 C 1201.0190197996246,153.48877845039522 1229.4340056570356,166.28250812868436 1274,165 C 1318.5659943429644,163.71749187131564 1379.2829971714823,148.35874593565782 1440,133 C 1440,133 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 200)"></path>
        <defs>
            <linearGradient id="gradient">
                <stop offset="5%" stop-color="#0693e3ff"></stop>
                <stop offset="95%" stop-color="#8ed1fcff"></stop>
            </linearGradient>
        </defs>
        <path d="M 0,400 C 0,400 0,266 0,266 C 63.62330487192365,285.1832985275846 127.2466097438473,304.3665970551693 165,310 C 202.7533902561527,315.6334029448307 214.63686589653446,307.71691030690744 263,294 C 311.36313410346554,280.28308969309256 396.2059266700151,260.7657617172011 445,264 C 493.7940733299849,267.2342382827989 506.5394274234052,293.2200428242882 553,303 C 599.4605725765948,312.7799571757118 679.6363636363637,306.35406698564594 731,294 C 782.3636363636363,281.64593301435406 804.9151180311403,263.363689233128 842,264 C 879.0848819688597,264.636310766872 930.7031642390759,284.19117608184195 984,287 C 1037.296835760924,289.80882391815805 1092.2722250125564,275.8716064395041 1144,259 C 1195.7277749874436,242.1283935604959 1244.2079357106982,222.3223981601417 1293,223 C 1341.7920642893018,223.6776018398583 1390.896032144651,244.83880091992916 1440,266 C 1440,266 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 200)"></path>
    </svg>
    <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased  text-black dark:text-white -mt-96">
        <div class="h-full ml-1 mt-14 mb-10 md:ml-64">
            <div class="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
                <!-- Table Detail -->
                <!-- Order Detail -->
                <div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words  w-full shadow-lg  bg-white  rounded-2xl">
                    <div class="rounded-t mb-0 px-0 border-0">
                        <div class="border-b">
                            <div class="flex justify-between px-6 -mb-px">
                                <h3 class="text-blue-dark py-4 font-normal text-lg text-blue-500">Table Product</h3>
                            </div>
                        </div>
                        <div class="block w-full overflow-y-auto h-96">
                            <table class="items-center w-full bg-transparent border-collapse">
                                <thead>
                                    <tr>
                                        <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">No</th>
                                        <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Order name</th>
                                        <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Type</th>
                                        <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">Manage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="text-gray-700 dark:text-gray-100" v-for="(product,i) in product" :key="i">
                                        <th class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">{{i+1}}</th>
                                        <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{{product.name}}</td>
                                        <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{{product.type}}</td>
                                        <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div class="flex items-center">
                                                <div>
                                                    <v-dialog v-model="dialog1" rounded width="500px">
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-btn v-bind="attrs" v-on="on" depressed fab icon outlined small color="blue">
                                                                <v-icon>mdi-border-color</v-icon>
                                                            </v-btn>
                                                        </template>
                                                        <div class="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
                                                            <div class="text-center">
                                                                <h2 class="mt-5 text-3xl font-bold text-blue-400">
                                                                    Edit Product
                                                                </h2>
                                                                <p class="mt-2 text-sm text-gray-400">The product you can edit text.</p>
                                                            </div>
                                                            <EditProduct />
                                                        </div>
                                                    </v-dialog>
                                                </div>
                                                <div class="ml-2">
                                                    <v-btn depressed fab icon outlined small color="red">
                                                        <v-icon>mdi-close</v-icon>
                                                    </v-btn>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- End Order Detail -->
                <!-- End Table Detail -->
                <div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words  w-full shadow-lg  bg-white  rounded-2xl">
                    <div class="rounded-t mb-0 px-0 border-0">
                        <div class="border-b">
                            <div class="flex justify-between px-6 -mb-px">
                                <h3 class="text-blue-dark py-4 font-normal text-lg text-blue-500">Table Order Detail</h3>
                            </div>
                        </div>
                        <div class="block w-full overflow-y-auto h-96">
                            <table class="items-center w-full bg-transparent border-collapse">
                                <thead>
                                    <tr>
                                        <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">No</th>
                                        <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Order name</th>
                                        <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Type</th>
                                        <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Price</th>
                                        <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">Manage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="text-gray-700 dark:text-gray-100" v-for="(order,i) in orderdetail" :key="i">
                                        <th class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">{{i+1}}</th>
                                        <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{{order.name}}</td>
                                        <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{{order.type}}</td>
                                        <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{{order.price}} B.</td>
                                        <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div class="flex items-center">
                                                <div>
                                                    <v-dialog v-model="dialog1" rounded width="500px">
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-btn v-bind="attrs" v-on="on" depressed fab icon outlined small color="blue">
                                                                 <v-icon>mdi-border-color</v-icon>
                                                            </v-btn>
                                                        </template>
                                                        <div class="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
                                                            <div class="text-center">
                                                                <h2 class="mt-5 text-3xl font-bold text-blue-400">
                                                                    Edit Order Detail
                                                                </h2>
                                                                <p class="mt-2 text-sm text-gray-400">The order you can ed text.</p>
                                                            </div>
                                                            <EditOrderDetail />
                                                        </div>
                                                    </v-dialog>
                                                </div>
                                                <div class="ml-2">
                                                    <v-btn depressed fab icon outlined small color="red">
                                                        <v-icon>mdi-close</v-icon>
                                                    </v-btn>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- Recent Activities -->
                <!-- ./Recent Activities -->
            </div>
            <!-- Task Summaries -->
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-4 gap-4 text-black dark:text-white ">
                <div class="md:col-span-2 xl:col-span-3 ">
                    <h3 class="text-lg font-semibold  text-center text-xl text-blue-400">Task Product and Order Detail.</h3>
                </div>
            </div>
            <div class="grid grid-cols-12 gap-6">
                <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-6 xxl:col-span-8">
                    <CreateDetail-ProductType />
                    <div>
                        <CreateDetail-Orderdetail />
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-6 xxl:col-span-8">
                    <div>
                        <CreateDetail-Productprice />
                    </div>
                    <!-- <div>
                        
                        <CreateDetail-Product />
                    </div> -->
                </div>
            </div>
            <!-- ./Task Summaries -->
        </div>
    </div>
</div>
</template>

<script>
import {
    Createmenu
} from '~/vuexes/createmenu'
import {
    Product
} from '@/vuexes/product'
import _ from 'lodash'
export default {
    data: () => {
        return ({
            producttype: [],
            orderdetail: [],
            product: [],
        })
    },
    async created() {
        this.product = await Product.getProduct()
        this.producttype = await Createmenu.getProducttype()
        this.orderdetail = await Createmenu.getOrderdetail()
    }
}
</script>
