<template>
<v-container fluid>
    <v-form>
        <p class="text-gray-800 font-medium text-blue-500">Order Detail</p>
        <div class="">
            <label class="block text-sm text-gray-00">Name</label>
            <v-text-field label="filled" placeholder="filled" outlined dense></v-text-field>
        </div>
        <div class="inline-block mt-2 w-1/2 pr-1">
            <label class="hidden block text-sm text-gray-600">Type</label>
            <v-select :items="items" label="Select Type" outlined dense></v-select>
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
import { create } from 'lodash'
export default {
    data() {
        return {
             files: [],
        }
        
    },
    async created(){
        
    }
}
</script>

<style>

</style>
