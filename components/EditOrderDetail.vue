<template>
<div>
    <v-btn @click="dialog = true" color="blue" outlined small class="mr-2" fab>
        <v-icon>mdi-pencil</v-icon>
    </v-btn>
    <v-dialog v-if="dialog" v-model="dialog" rounded width="500px" persistent>
        <div class="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
            <v-toolbar color="transparent" flat>
                <h2 class="mt-5 text-3xl font-bold text-blue-400">
                    Edit Order Detail
                </h2>
                <v-spacer></v-spacer>
                <v-btn small outlined @click="dialog = false" fab color="error">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-toolbar>
<v-container fluid>
                <form @submit.prevent="store()">
                    <p class="text-gray-800 font-medium text-blue-500">Order Detail</p>
                    <div class="">
                        <label class="block text-sm text-gray-00">Name</label>
                        <v-text-field placeholder="filled" v-model="editForm.name" outlined dense>{{orderdetail.name}}</v-text-field>
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
                        <v-text-field label="Price" placeholder="filled" v-model="editForm.price" item-text="name" item-value="id" outlined dense></v-text-field>
                    </div>
                    <div class="flex justify-center items-center text-center">
                        <button type="submit" class="my-5 w-full  flex justify-center bg-blue-500  p-4  rounded-lg  font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-400 ">
                            <span class="text-white">Submit</span>
                        </button>
                    </div>
                </form>
            </v-container>

        </div>
    </v-dialog>

</div>
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
            dialog: false,
            files: [],
            orderdetail: [],
            editorderdetail: [],
            producttypes: [],
            checkbox: [],
            editForm: {
                name: null,
                type: [],
                price: null,
            }
        }

    },
    async created() {
        await this.run();
    },
    methods: {
        async run() {
            this.editForm = await Product.getOrderdetailByID(this.id)
            this.editForm.type = _.map(this.editForm.type, (r) => {
                return r.id
            })
            this.product_types = await Product.getProducttype()
        },
        async store() {
            var data = await Product.putOrderdetail(this.editForm, this.id)
         
            await this.run();
            this.dialog = false;
            this.$emit('updated')
        }
    }
}
</script>

<style>

</style>