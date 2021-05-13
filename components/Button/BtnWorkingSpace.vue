<template>
  <div>
          <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6">
                <!-- svg  -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            </div>
             <div class="mt-8">
               <p class="text-xl font-semibold my-2">Working Space</p>
               <div class="flex space-x-2 text-gray-400 text-sm">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                 <p>Add new session</p>  
               </div>
               <div class="flex space-x-2 text-white text-sm">
                 <p>Weeks Left</p>  
               </div>
                <div class="flex space-x-2 text-white text-sm">
                 <p>Weeks Left</p>  
               </div>
               <div class="border-t-2"></div>
                <div class="flex justify-between">
                  <div class="my-2">
                    <v-dialog
                    v-model="dialog"
                    scrollable
                    max-width="480px"
                  >
                <template v-slot:activator="{ on, attrs }">
                    <button  style="color:#348FEA" class=" px-4 py-2 text-xs font-semibold text-blue-600 pl-1"  @click="dialog = false" v-bind="attrs"  v-on="on">
                     Go to Working Space <v-icon class="pl-11 " >mdi-arrow-right </v-icon>
                   </button>
                  </template>
                  <!-- <---Card Dialog ---> 
                    <v-card
                      shaped
                    >
                      <v-card-title>Working Space</v-card-title>
                      <v-divider></v-divider>
                      <v-card-text style="height: 300px;">
                          <v-row>
                             <FromWorking />
                          </v-row>
                      </v-card-text>
                      <v-divider></v-divider>
                      <v-card-actions>
                        <div class="flex justify-end">
                            <v-btn
                            color="green darken-1"
                            text
                            @click="dialog = false"
                          >
                            Submit
                          </v-btn>
                          <v-btn
                            color="blue darken-1 "
                            text
                            @click="dialog = false"
                          >
                            Close
                          </v-btn>
                        </div>
                      </v-card-actions>
                    </v-card>
                    <!-- <---Card Dialog  End---> 
                  </v-dialog>
                  </div>
                </div>
             </div>
          </div>
  </div>
</template>

<script>
export default {
data () {
      return {
        dialog: false,
      }
    },
}
</script>