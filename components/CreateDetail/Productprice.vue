<template>
<div>
    <div class="bg-white py-4 px-4 shadow-xl rounded-2xl my-4 mx-4">
        <v-form @submit.prevent="saveproduct()">
            <div class="flex justify-between px-4 items-center">
                <div class="text-lg font-semibold">
                    <p class="text-blue-600 ">Product </p>
                    <div class="flex flex-row">
                        <v-file-input v-model="files" color="deep-purple accent-4" counter label="Image input" multiple placeholder="Select your files" prepend-icon="mdi-paperclip" outlined :show-size="1000">
                            <template v-slot:selection="{ index, text }">
                                <v-chip v-if="index < 2" color="deep-purple accent-4" dark label small>
                                    {{ text }}
                                </v-chip>

                                <span v-else-if="index === 2" class="text-overline grey--text text--darken-3 mx-2">
                                    +{{ files.length - 2 }} File(s)
                                </span>
                            </template>
                        </v-file-input>
                        <v-col cols="2">
                            <v-subheader>Name:</v-subheader>
                        </v-col>
                        <v-text-field outlined label="Filled" v-model="form1.name"></v-text-field>
                        <v-col cols="2">
                            <v-subheader>Type:</v-subheader>
                        </v-col>
                        <v-select v-model="form1.type" :items="product_types" label="select" item-text="name" item-value="id" outlined></v-select>

                    </div>
                </div>
                <div class="text-lg font-semibold">
                    <button class="focus:outline-none bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-2 rounded-full inline-flex items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div class="flex justify-between px-4 items-center">
                <div class="text-lg font-semibold">
                    <p class="text-blue-600"></p>
                    <v-row align="center">
                        <v-col cols="12" sm="6">
                            <v-subheader v-text="'You can add Product Price.'"></v-subheader>
                        </v-col>

                        <div class="flex justify-between px-4 items-center">
                            <div class="text-lg font-semibold">
                                <p class="text-blue-600 ">Product Price</p>
                                <div class="flex flex-row">
                                    <v-col cols="2">
                                        <v-subheader>Heat level:</v-subheader>
                                    </v-col>
                                    <v-select v-model="checkbox" :items="heat_levels" label="select" item-text="name" item-value="id" outlined></v-select>
                                    <v-col cols="2">
                                        <v-subheader>Type:</v-subheader>
                                    </v-col>
                                    <v-text-field label="price" v-model="price" :key="index" outlined multiple></v-text-field>
                                </div>
                            </div>
                            <div class="text-lg font-semibold">
                                <button @click.prevent="addPrice(checkbox, price)" class="focus:outline-none bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-2 rounded-full inline-flex items-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </v-row>
                    <div v-for="item, index in prices" :key="index">
                        <v-row>
                            <p>{{item.name}}</p>
                            <p>{{item.price}}</p>
                        </v-row>
                    </div>
                    <div class="flex justify-center items-center text-center">
                        <button class="my-5 w-full  flex justify-center bg-blue-500  p-4 
                         rounded-lg  font-semibold  focus:outline-none focus:shadow-outline
                          hover:bg-blue-400 ">
                            <span class="text-white">Add Order Detail</span>
                        </button>
                    </div>
                </div>
            </div>
        </v-form>
    </div>
</div>
</template>

<script>
import {
    Product
} from '~/vuexes/product'
export default {
    data: () => ({
        files: [],
        product_types: [],
        heat_levels: [],
        heat: {},
        prices: [],
        checkbox: [],
        form1: {
            name: null,
            img: null,
            type: null,
        },
        form2: {
            product: null,
            heat: null,
            price: null,
        }
    }),
    async created() {
        this.product_types = await Product.getProducttype()
        this.heat_levels = await Product.getHeatlevel()

    },
    methods: {
        async saveproduct() {
            var product = await Product.postProduct(this.form1)

            this.form2.product = product.id

             for (let i in this.prices) {
                 this.form2.heat = this.prices[i].heat
                 this.form2.price = this.prices[i].price
                 var productprice = await Product.postProductPrice(this.form2)
                 console.log(productprice)
             }
             
         },

        async addPrice(id, p) {
            var data = await Product.getHeatlevelByID(id)
            console.log(data)
            this.prices.push({
                heat: id,
                name: data.name,
                price: p
            })

        },

    }
}
</script>

<style>

</style>
