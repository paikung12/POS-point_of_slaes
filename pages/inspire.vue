<template>
  <div>
    <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150 -mt-20"><defs><linearGradient id="gradient"><stop offset="5%" stop-color="#002bdc88"></stop><stop offset="95%" stop-color="#32ded488"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,133 0,133 C 89.97129186602871,146.11004784688996 179.94258373205741,159.2200956937799 274,161 C 368.0574162679426,162.7799043062201 466.200956937799,153.22966507177034 557,132 C 647.799043062201,110.77033492822966 731.2535885167465,77.86124401913877 824,87 C 916.7464114832535,96.13875598086123 1018.7846889952154,147.32535885167462 1123,162 C 1227.2153110047846,176.67464114832538 1333.6076555023924,154.83732057416267 1440,133 C 1440,133 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 200)"></path><defs><linearGradient id="gradient"><stop offset="5%" stop-color="#002bdcff"></stop><stop offset="95%" stop-color="#32ded4ff"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,266 0,266 C 104.88038277511961,273.6555023923445 209.76076555023923,281.31100478468903 301,274 C 392.2392344497608,266.68899521531097 469.83732057416285,244.4114832535885 552,230 C 634.1626794258372,215.5885167464115 720.8899521531099,209.0430622009569 834,218 C 947.1100478468901,226.9569377990431 1086.6028708133972,251.41626794258372 1192,262 C 1297.3971291866028,272.5837320574163 1368.6985645933014,269.2918660287081 1440,266 C 1440,266 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 200)"></path></svg>
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
             <div class="text-4xl text-center font-extrabold ...">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 ">
                Sessions
              </span>
            </div>
             <div class="mt-4">
               <div class="flex flex-col">
                 <div class="-my-2 overflow-x-auto">
                    <div class="py-2 align-middle inline-block min-w-full">
                      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white">
                        <table class="min-w-full divide-y divide-gray-200">
                        <thead>
                          <tr>
                            <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              <div class="flex cursor-pointer">
                                <span class="mr-2">No</span>
                              </div>
                            </th>
                            <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              <div class="flex cursor-pointer">
                                <span class="mr-2">NAME</span>
                              </div>
                            </th>
                            <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              <div class="flex cursor-pointer">
                                <span class="mr-2">Stock</span>
                              </div>
                            </th>
                            <th lass="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              <div class="flex cursor-pointer">
                                <span class="mr-2">STATUS</span>
                              </div>
                            </th>
                            <th class="  px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              <div class="flex cursor-pointer ">
                               <span class="mr-2 ">ACTION</span>
                              </div>
                            </th>
                          </tr>
                        </thead>
                      <tbody class="bg-white divide-y divide-gray-200">
                        <tr>
                            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                              <p>1</p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                              <p>Apple MacBook Pro 13</p>
                                <p class="text-xs text-gray-400">PC & Laptop
                              </p>
                            </td>
                          <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                              <p>77</p>
                          </td>
                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                            <div class="flex text-green-500">
                              <svg xmlns="http://www.w3.org/2000/svg"
                                class="w-5 h-5 mr-1" fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                               <p>Active</p>
                            </div>
                         </td>
                        <td class="py-4 whitespace-no-wrap text-sm leading-5">
                          <div class="flex justify-center items-center">
                                    <div>
                                      <v-btn
                                              depressed
                                              fab
                                              icon
                                              outlined
                                              small
                                              color="orange"
                                            >
                                            <v-icon>mdi-cart-plus</v-icon>
                                            </v-btn>
                                    </div>
                                    <div class="pl-3">
                                      <v-btn
                                              depressed
                                              fab
                                              icon
                                              outlined
                                              small
                                              color="blue"
                                            >
                                            <v-icon>mdi-clock-outline</v-icon>
                                            </v-btn>
                                    </div>
                                    <div class="pl-3">
                                      <v-btn
                                              depressed
                                              fab
                                              icon
                                              outlined
                                              small
                                              color="red"
                                            >
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
               </div>
             </div>
           </div>
        </div>
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>