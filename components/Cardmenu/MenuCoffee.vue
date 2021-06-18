<template>
<div>
    <v-hover v-slot="{ hover }">
        <v-card class="mx-auto" color="grey lighten-4" width="450 ">
            <v-img :aspect-ratio="16/9" src="https://site.listsothebysrealty.in.th/wp-content/uploads/2020/02/01-Espresso-1.jpg">
                <v-expand-transition>
                    <div v-if="hover" class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text pt-10 pl-8 " style="height: 100%;">
                        $ 25 & 30 .Bath
                    </div>
                </v-expand-transition>
            </v-img>
            <v-card-text class="pt-6" style="position: relative;">
                <v-form>
                    <!-- <---Dialog --->
                    <v-dialog v-model="dialog" scrollable max-width="600">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn absolute color="orange" class="white--text" fab large right top v-bind="attrs" v-on="on">
                                <v-icon>mdi-cart</v-icon>
                            </v-btn>
                        </template>
                        <!-- <---Card Dialog --->
                        <v-card rounded="xl" height="600">
                            <v-card-title>
                                <div class="flex justify-start">
                                    <p class="text-sm text-gray-800 mt-1">
                                        <span class="font-semibold text-2xl">Select Topping</span>
                                    </p>
                                </div>
                                <div class="flex justify-end">
                                    <p class="text-sm text-gray-500 mt-1">
                                        <span class="font-semibold text-2xl">Total</span>
                                        <span class="font-bold text-2xl text-yellow-400">$ 45</span>
                                    </p>
                                </div>
                            </v-card-title>
                            <v-divider></v-divider>
                            <v-card-text style="height: 300px;">
                                <p  v-if="heat.length > 0" class="text-l pt-2">Select Hot & Cold</p>
                                <v-row>
                                    <div v-for="(data,i) in heat" :key="i">
                                        <v-checkbox class="pl-5" v-model="form.heat" :label="data.heat_named" :value="data">
                                        </v-checkbox>
                                        <pre>{{price.checkbox}}</pre>
                                    </div>
                                </v-row>
                                <p class="text-l pt-2">Choose Sweetness</p>
                                <v-row>
                                    <div v-for="(sweet,i) in sweetlevel " :key="i">
                                        <v-checkbox class="pl-5" v-model="form.sweet" :label="sweet.name" :value="sweet">
                                        </v-checkbox>
                                        <pre>{{sweet.checkbox}}</pre>
                                    </div>
                                </v-row>
                                <p class="text-l pt-2">Whipcream Milk foam & Honey </p>
                                <v-row>
                                    <div v-for="(detail,i) in orderdetail" :key="i">
                                        <v-checkbox class="pl-5" v-model="form.detail" :label="detail.name" :value="detail">
                                        </v-checkbox>
                                        <pre>{{detail.checkbox}}</pre>
                                    </div>
                                </v-row>                                
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions>
                                <v-col cols="4">
                                    <v-text-field label="Voucher" value=" " prefix="$" outlined dense v-model="form.number"></v-text-field>
                                </v-col>

                             
                                <div class="flex justify-end">
                                    <v-btn color="green darken-1" text @click="callbackMenu()">
                                        Submit
                                    </v-btn>
                                    <v-btn color="blue darken-1 " text @click="dialog = false">
                                        Close
                                    </v-btn>
                                </div>
                            </v-card-actions>
                        </v-card>
                        <!-- <---Card Dialog  End--->
                    </v-dialog>
                    <!-- <---Dialog End --->
                </v-form>
                <h3 class="display-1 font-weight-light orange--text mb-2 ">
                    {{menu.name}}
                </h3>
            </v-card-text>
        </v-card>
    </v-hover>
</div>
</template>

<script lang="ts">
import { Menu } from '~/vuexes/menu'
import { Product } from '~/vuexes/product'
export default {
    props: {
        menu: {
            default: {
                name: 'coffee',
                prices: 0,
                counter: 1,
                type: [],
                data:{},
                price:0
            }
        },
        detail: {
            default: {
                named: 'hot,cold',
                prices: 0,
                product: [],
                heat: [],
            }
        }
    },
    data() {
        return {
            form: {
                number: null,
                heat: null,
                sweet: null,
                detail: null,
            },
            dialog: false,
            sweetlevel: [],
            price: [],
            heat: [],
            heatlevel:[],
            checkbox: [],
            orderdetail: [],
            productdetail: [],
        }
    },
    async created() {
        this.heat = await Product.getProductpricess(this.menu.type, this.detail.product)
        this.orderdetail = await Product.getOrderdetail(this.menu.type)
        this.heatlevel = await Product.getHeatlevel()
        this.sweetlevel = await Product.getSweetlevel()
    },
    methods: {
        async callbackMenu() {
            this.menu.counter = 1
            this.menu.data = this.form
            this.menu.price = this.form.heat.price +this.form.detail.price
            await Menu.setMenu(this.menu, this.detail)
            this.dialog = false;
            var data = await Product.saveOrder(this.form)
        },
    },
}
</script>