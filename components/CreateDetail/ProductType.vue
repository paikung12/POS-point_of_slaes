<template>
<div>
    <div class="bg-white py-4 px-4 shadow-xl rounded-2xl my-4 mx-4">
        <v-form @submit="saveproducttype()">
            <div class="flex justify-between px-4 items-center">
                <div class="text-lg font-semibold">
                    <p class="text-blue-600">Product Type</p>
                    <v-row>
                        <v-col cols="4">
                            <v-subheader>Name:</v-subheader>
                        </v-col>
                        <v-col cols="8">
                            <v-text-field v-model="form.name" outlined label="Filled"></v-text-field>
                        </v-col>
                    </v-row>
                    <span class="text-gray-400 text-base text-blue-400">You can add Product Type.</span>
                </div>
                <div class="text-lg font-semibold">
                    <button  class="focus:outline-none bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-2 rounded-full inline-flex items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </v-form>
    </div>
</div>
</template>

<script>
import { Product } from '~/vuexes/product'
export default {
     data() {
        return {
            form: {
                name: null
            },          
        }
    },
    methods: {
        async saveproducttype() {
            if(this.form.name){
                var data = await Product.postProducttype(this.form)
                console.log(data)
                alert("testy")
            }
            else{
                alert("fail")
            }   
           
            
        },
    }
}
</script>

<style>

</style>
