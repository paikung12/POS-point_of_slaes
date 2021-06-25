<template>
<v-container fluid>
    <pre>{{editForm}}</pre>
    <form @submit.prevent="store()">
        <p class="text-gray-800 font-medium text-blue-500">Order Detail</p>
        <div class="">
            <label class="block text-sm text-gray-00">Name</label>
            <v-text-field  placeholder="filled" v-form="editForm.name" outlined dense>{{editForm.name}}</v-text-field>
        </div>
        <div class="inline-block mt-2 w-1/2 pr-1">
            <label class="hidden block text-sm text-gray-600">Type</label>
            <v-select  v-model="editForm.type" :items="product_types" label="select" item-text="name" item-value="id" outlined dense></v-select>
        </div>
        <div class="inline-block  -mt-4 -mx-1 pl-1 w-1/2">
            <label class="hidden block text-sm text-gray-600">Price</label>
            <v-text-field label="Price" placeholder="filled" v-form="editForm.price" item-text="name" item-value="id" outlined dense></v-text-field>
        </div>
        <div class="flex justify-center items-center text-center">
            <button type="submit" class="my-5 w-full  flex justify-center bg-blue-500  p-4  rounded-lg  font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-400 ">
                <span class="text-white">Submit</span>
            </button>
        </div>
    </form>
</v-container>
</template>

<script >
import { Product} from '@/vuexes/product'
import {
    create,
    method
} from 'lodash'
import { Core } from '~/vuexes/core'
export default {
    props: {
        id: {
            default: 'id'
        }
    },
    data() {
        return {
            orderdetail: [],
            editorderdetail: [],
            product_types:[],
            editForm: {
                name:null,
                type:null,
                price:null,
            }
        }

    },
    async created() {
        this.editForm = await Product.getOrderdetailByID(this.id)
        this.editorderdetail = await Product.putOrderdetail(this.editForm)
        this.product_types = await Product.getProducttype()
    },
    methods: {
        async store() {
            var data = await Product.putOrderdetail(this.editForm)
        }
    }
}
</script>

<style>

</style>


