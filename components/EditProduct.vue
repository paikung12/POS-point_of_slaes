<template>
<v-container fluid>
    <form @submit.prevent="store()">
        <pre>{{editForm1}}</pre>
        <p class="text-gray-800 font-medium text-blue-500">Product</p>
        <div class="">
            <label class="block text-sm text-gray-00">Name</label>
            <v-text-field label="filled" placeholder="filled" v-model="editForm1.name" outlined dense>{{product.name}}</v-text-field>
        </div>
        <div class="-mt-4">
            <label class="block text-sm text-gray-00">Image</label>
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
            <label class=" block text-sm text-gray-600">product type</label>
            <v-select v-model="editForm1.type" :items="product_types" label="select" item-text="name" item-value="id" outlined dense></v-select>
        </div>
        <p class="mt-4 text-gray-800 font-medium text-blue-500">Product Price</p>
        <div class="inline-block mt-2 w-1/2 pr-1">
            <label class="hidden block text-sm text-gray-600">Level</label>
            <v-select v-model="editForm2.heat" :items="heat_levels" label="select" item-text="name" item-value="id" outlined dense></v-select>
        </div>
        <div class="inline-block  -mt-4 -mx-1 pl-1 w-1/2">
            <label class="hidden block text-sm text-gray-600">Price</label>
            <v-text-field label="Price" placeholder="filled" :items="product_price" v-model="editForm2.price" outlined dense></v-text-field>
        </div>
        <div class="inline-block  -mt-4 -mx-1 pl-1 w-1/2">
            <label class="hidden block text-sm text-gray-600">Time</label>
            <v-text-field label="Time" placeholder="filled" v-model="time" outlined dense></v-text-field>
        </div>
        <div class="flex justify-center items-center text-center">
            <button @click.prevent="addPrice(editForm1, editForm2, time)" type="submit" class="my-5 w-full  flex justify-center bg-blue-500  p-4  rounded-lg  font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-400 ">
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
                product:null,
                heat: null,
                price: null,
                time: null,
            },
        }
    },
    async created() {
        this.editForm1 = await Product.getProductByID(this.id)
        this.editForm2 = await Product.getProductpriceByID(this.editForm2)
        this.editForm2 = await Product.getProductpriceByID(this.editForm2)
        this.product_types = await Product.getProducttype()
        this.heat_levels = await Product.getHeatlevel()
        this.product_price = await Product.getProductprices()
    },
    methods: {
        async store( ) {
            var product = await Product.putProduct(this.editForm1)
            console.log(product)
            this.editForm2.product = product.id

            for (let i in this.prices) {
                this.editForm2.heat = this.prices[i].heat
                this.editForm2.price = this.prices[i].price
                this.editForm2.time = this.prices[i].time
                var productprice = await Product.putProductprice(this.editForm2)
            }
        },
        async addPrice() {
            var data = await Product.getHeatlevelByID(id)
            this.prices.put({
                heat: id,
                name: data.name,
                price: p,
                time: t,
            })

        },

    }

}
</script>

<style>

</style>
