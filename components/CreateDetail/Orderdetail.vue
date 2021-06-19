<template>
<div>
    <div class="bg-white py-4 px-4 shadow-xl rounded-2xl my-4 mx-4">
        <v-form @submit.prevent="addTopping()">
            <div class="flex justify-between px-4 items-center">
                <div class="text-lg font-semibold">
                    <p class="text-blue-600">Order Detail</p>
                        <v-row align="center">
                            <v-col cols="12" sm="6">
                                <v-subheader v-text="'Order Detail Name'"></v-subheader>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field  label="filled" v-model="form.name" outlined  dense multiple hint="Pick your favorite states" ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-subheader v-text="'Order Detail Type'" ></v-subheader>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <div v-for="type,index in product_types" :key="index"> 
                                    <v-checkbox class="pl-5" v-model="form.type" :label="type.name"
                                 :value="type.id">
                                    </v-checkbox> 
                                </div>
                                                         
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-subheader v-text="'Order Detail Price'"></v-subheader>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field  label="filled"  v-model="form.price" outlined  dense multiple hint="Pick your favorite states" ></v-text-field>
                            </v-col>
                        </v-row>
                    <div class="flex justify-center items-center text-center">
                        <button type="submit" class="my-5 w-full  flex justify-center bg-blue-500  p-4  rounded-lg  font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-400 ">
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
import {Product} from '~/vuexes/product'
export default {
    data: () => ({
        product_types: [],
        checkbox:[],
        form: {
            name: null,
            price: null,
            type:[]
        }
    }),
    async created(){
        this.product_types = await Product.getProducttype()
    },
    methods: {
        async addTopping(){
            var data = await Product.postOrderdetail(this.form)
            console.log(data)
        }
    },
}
</script>

<style>

</style>
