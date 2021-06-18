<template>
<v-container fluid>
    <pre>{{product}}</pre>
    <v-form>
        <p class="text-gray-800 font-medium text-blue-500">Product</p>
        <div class="">
            <label class="block text-sm text-gray-00">Name</label>
            <v-text-field label="filled" placeholder="filled" outlined dense></v-text-field>
        </div>
        <div class="-mt-4">
            <label class="block text-sm text-gray-00">Type</label>
            <v-file-input v-model="files" color="deep-purple accent-4" counter label="File Image" multiple placeholder="Select your Image" prepend-icon="mdi-paperclip" outlined :show-size="1000" dense>
                <template v-slot:selection="{ index, text }">
                    <v-chip v-if="index < 2" color="deep-purple accent-4" dark label small>
                        {{ text }}
                    </v-chip>

                    <span v-else-if="index === 2" class="text-overline grey--text text--darken-3 mx-2">
                        +{{ files.length - 2 }} File(s)
                    </span>
                </template>
            </v-file-input>
        </div>
        <div class="-mt-4">
            <label class=" block text-sm text-gray-600">Type</label>
            <v-select :items="items" label="select" outlined dense></v-select>
        </div>
        <p class="mt-4 text-gray-800 font-medium text-blue-500">Product Price</p>
        <div class="inline-block mt-2 w-1/2 pr-1">
            <label class="hidden block text-sm text-gray-600">Level</label>
            <v-select :items="items" label="select level" outlined dense></v-select>
        </div>
        <div class="inline-block  -mt-4 -mx-1 pl-1 w-1/2">
            <label class="hidden block text-sm text-gray-600">Price</label>
            <v-text-field label="Price" placeholder="filled" outlined dense></v-text-field>
        </div>
        <div class="flex justify-center items-center text-center">
            <button type="submit" class="my-5 w-full  flex justify-center bg-blue-500  p-4  rounded-lg  font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-400 ">
                <span class="text-white">Submit</span>
            </button>
        </div>
    </v-form>
</v-container>
</template>

<script>
import {
    Product
} from '@/vuexes/product'
export default {
    props: {
       productid:{
           default:{
               name : null
           }
       }
    },
    data() {
        return {
             files: [],
             product:[],
        }
    },
    async created() {
        this.product = await Product.getProductByID(1)
    },
}
</script>

<style>

</style>
