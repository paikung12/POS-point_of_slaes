<template>
<v-container fluid>
    <pre>{{editForm}}</pre>
    <form @submit.prevent="store()">
        <p class="text-gray-800 font-medium text-blue-500">Order Detail</p>
        <div class="">
            <label class="block text-sm text-gray-00">Name</label>
            <v-text-field placeholder="filled" v-form="editForm.name" outlined dense>{{orderdetail.name}}</v-text-field>
        </div>
        <div class="inline-block mt-2 w-1/2 pr-1">
            <label class="hidden block text-sm text-gray-600">Type</label>
            <div class="grid gap-x-28 gap-y-1 grid-cols-3">
                <div v-for="type,index in product_types" :key="index">
                    <v-checkbox class="pl-5" v-model="editForm.type" :label="type.name" :value="type.id" item-value="id">
                    </v-checkbox>
                </div>
            </div>
        </div>
        <div class="inline-block pl-1 w-1/2">
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

<script>
import {
    Product
} from '@/vuexes/product'
import {
    create,
    method
} from 'lodash'
export default {
    props: {
        id: {
            default: 'id'
        }
    },
    data() {
        return {
            files: [],
            orderdetail: [],
            editorderdetail: [],
            product_types: [],
            checkbox: [],
            editForm: {
                name: null,
                type: [],
                price: null,
            }
        }

    },
    async created() {
        this.editForm = await Product.getOrderdetailByID(this.id)
        this.product_types = await Product.getProducttype()
    },
    methods: {
        async store() {
           var data = await Product.postOrderdetail(this.editForm, this.id)
        }
    }
}
</script>

<style>

</style>
