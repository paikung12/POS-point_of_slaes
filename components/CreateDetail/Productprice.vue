<template>
<div>
    <div class="bg-white py-4 px-4 shadow-xl rounded-2xl my-4 mx-4">
        <v-form @submit.prevent="saveproduct()" ref="form1">
            <div class="flex justify-between px-4 items-center">
                <div class="text-lg font-semibold">
                    <p class="text-blue-600 ">Product </p>
                    <div class="flex flex-row">
                        <input type="file" @change="previewFiles" accept="img/*" multiple>
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
                    <!-- <button class="focus:outline-none bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-2 rounded-full inline-flex items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button> -->
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
                                    <v-text-field label="price" v-model="price" outlined multiple></v-text-field>
                                    <v-col cols="2">
                                        <v-subheader>Time:</v-subheader>
                                    </v-col>
                                    <v-text-field label="Time" v-model="time" outlined multiple></v-text-field>
                                </div>
                            </div>
                            <div class="text-lg font-semibold">
                                <button @click.prevent="addPrice(checkbox, price, time)" class="focus:outline-none bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-2 rounded-full inline-flex items-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </v-row>
                    <div class="grid grid-cols-3 lg:grid-cols-3 gap-5 w-full ">
                        <div v-for="(item, i) in prices" :key="i">
                            <span class="text-blue-400 ml-8">{{item.name}} : {{item.price}} B. : {{item.time}} Hr.</span> 
                        </div>
                    </div>
                    <br>
                    <div class="mt-12">
                        <div class="flex justify-center items-center text-center ">
                            <button class="my-5 w-full  flex justify-center bg-blue-500  p-4 
                         rounded-lg  font-semibold  focus:outline-none focus:shadow-outline
                          hover:bg-blue-400 ">
                                <span class="text-white">Add Product</span>
                            </button>
                        </div>
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
        selesctedFile: null,
        product_types: [],
        heat_levels: [],
        heat: {},
        price: null,
        time: null,
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
            time: null,
        }
    }),
    async created() {
        this.product_types = await Product.getProducttype()
        this.heat_levels = await Product.getHeatlevel()

    },
    methods: {
        previewFiles(event) {
            this.form1.img = event.target.files[0]
            console.log(this.form1.img)
        },

        async saveproduct() {
            var formData = new FormData();
            formData.append("name", this.form1.name)
            formData.append("img", this.form1.img)
            formData.append("type", this.form1.type)
            var product = await Product.postProduct(formData)
            console.log(product)
            this.form2.product = product.id

            for (let i in this.prices) {
                this.form2.heat = this.prices[i].heat
                this.form2.price = this.prices[i].price
                this.form2.time = this.prices[i].time
                var productprice = await Product.postProductPrice(this.form2)
            }
            this.$refs.form1.reset()

        },
        async addPrice(id, p, t) {
            var data = await Product.getHeatlevelByID(id)
            this.prices.push({
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
