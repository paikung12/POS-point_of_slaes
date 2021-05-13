<template>
  <div >
          <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl" >
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
                <!-- svg  -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            </div>
             <div class="mt-8">
               <p class="text-xl font-semibold my-2">Add Order</p>
               <div class="flex space-x-2 text-gray-400 text-sm">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                 <p>menu</p>  
               </div>
               <div class="flex space-x-2 text-gray-400  text-sm">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                 <p>add order</p>  
               </div>
                <div class="flex space-x-2 text-gray-400  text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                 <p>pay qith cashless credit</p>  
               </div>
               <div class="border-t-2"></div>
                <div class="flex justify-between">
                  <div class="my-2">
                   <button class=" px-4 py-2 text-xs font-semibold  text-blue-600 " @click="$router.push('Page_order')">
                     Go to Order <v-icon class="pl-20 " >mdi-arrow-right </v-icon>
                   </button>
                  </div>
                </div>
             </div>
          </div>
  </div>
</template>

<script>
import Page_order from '../../pages/Page_order'
export default {
  components: {
    Page_order
  }
}
</script>