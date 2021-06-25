<template>
<v-container fluid>
    <form @submit.prevent="store()">
        <p class="text-gray-800 font-medium text-blue-500">Product</p>
        <div class="">
            <v-text-field label="filled" placeholder="filled" v-model="editForm1.name" outlined dense>{{product.name}}</v-text-field>
        </div>
        <div class="-mt-4">
            
        </div>
        <div class="-mt-4">
            <v-select v-model="editForm1.type" :items="product_types"  item-text="name" item-value="id" outlined dense></v-select>
        </div>
        <p class="mt-4 text-gray-800 font-medium text-blue-500">Product Price</p>
        <div v-for="(item,i) in product_price" :key="i">
            <div class="inline-block mt-2 w-1/2 pr-1">
                <div>
                    <label class="hidden block text-sm text-gray-600">Level</label>
                    <v-select v-model="item.heat" :items="heat_levels" label="select" item-text="name" item-value="id" outlined dense></v-select>
                </div>
            </div>
            <div class="inline-block  -mt-4 -mx-1 pl-1 w-1/2">
                <label class="hidden block text-sm text-gray-600">Price</label>
                <v-text-field label="Price" placeholder="filled" v-model="item.price" outlined dense>{{item.price}}</v-text-field>
            </div>
            <div class="inline-block  -mt-4 -mx-1 pl-1 w-1/2">
                <label class="hidden block text-sm text-gray-600">Time</label>
                <v-text-field label="Time" placeholder="filled" v-model="item.time" outlined dense>{{item.time}}</v-text-field>
            </div>
        </div>
        <div class="flex justify-center items-center text-center">
            <button @click.prevent="store()" type="submit" class="my-5 w-full  flex justify-center bg-blue-500  p-4  rounded-lg  font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-400 ">
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
    Core
} from '~/vuexes/core'
export default {
    props: {
        id: {
            default: 'id'
        },
    },
    data() {
        return {
            files: [],
            product: [],
            checkbox: [],
            product_types: [],
            prices: [],
            price: null,
            time: null,
            heat_levels: [],
            product_price: [],
            editForm1: {
                name: null,
                type: null,
            },
            editForm2: {
                product: null,
                heat: null,
                price: null,
                time: null,
            },
        }
    },
    async created() {
        this.editForm1 = await Product.getProductByID(this.id)
        this.product_types = await Product.getProducttype()
        this.heat_levels = await Product.getHeatlevel()
        this.product_price = await Product.getProductpricess(this.editForm1.id)
    },
    methods: {
        async store() {
            var product = await Product.putProduct(this.editForm1, this.id)
            console.log(product)
            this.editForm2.product = this.id

            for (let i in this.product_price) {
                this.editForm2.heat = this.product_price[i].heat
                this.editForm2.price = this.product_price[i].price
                this.editForm2.time = this.product_price[i].time
                var productprice = await Product.putProductprice(this.editForm2, this.product_price[i].id)
                console.log(productprice)
            }
            
            console.log(this.editForm2)
        },
        

    }

}
</script>

<style>

</style>
