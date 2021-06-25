<template>
<div>
    <v-hover v-slot="{ hover }">
        <v-card class="mx-auto" color="grey lighten-4" width="450">
            <v-img :aspect-ratio="16/9" src="https://live-production.wcms.abc-cdn.net.au/be9de5950c0881a8e5d32575b7dabf6f?impolicy=wcms_crop_resize&cropH=2813&cropW=5000&xPos=0&yPos=231&width=862&height=485">
                <v-expand-transition>
                    <div v-if="hover" class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text pt-10 pl-8 " style="height: 100%;">
                        $ 109 & 20 .Bath
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
                            </v-card-title>
                            <v-divider></v-divider>
                            <v-card-text style="height: 300px;">
                                <p v-if="heat.length > 0" class="text-l pt-2">Select All Day & 1 Hr.</p>
                                <v-row>
                                    <div v-for="(data,i) in heat" :key="i">
                                        <v-checkbox   class="pl-5" v-model="form.heat" :label="data.heat_named" :value="data">
                                        </v-checkbox>
                                        <pre>{{price.checkbox}}</pre>
                                    </div>
                                </v-row>
                                <p class="text-l pt-2">Please check</p>
                                <v-row>
                                    <div v-for="(sweet,i) in sweetlevel " :key="i">
                                        <v-checkbox  v-if="sweet.id == 5" class="pl-5" v-model="form.sweet" :label="sweet.name" :value="sweet">
                                        </v-checkbox>
                                    </div>
                                </v-row>
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions>
                                <v-col cols="4">
                                    <v-text-field label="Voucher" value=" "  prefix="$" outlined dense v-model="form.number"></v-text-field>
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
import {
    Menu
} from '~/vuexes/menu'
import {
    Product
} from '~/vuexes/product'
import _ from 'lodash'
export default {
    props: {
        menu: {
            default: {
                name: 'Time',
                prices: 0,
                counter: null,
                type: [],
                data: {},
                price: 0,
                detailId: []
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
                number: 0,
                heat: null,
                sweet:[],
                detail: [],
            },
            dialog: false,
            sweetlevel: [],
            price: [],
            heat: [],
            heatlevel: [],
            checkbox: [],
            orderdetail: [],
            productdetail: [],
        }

    },
    async created() {
        this.heat = await Product.getProductpricess(this.menu.id, this.detail.product)
        this.orderdetail = await Product.getOrderdetail(this.menu.type)
        this.heatlevel = await Product.getHeatlevel()
        this.sweetlevel = await Product.getSweetlevel()
        this.form.sweet = _.filter(this.sweetlevel,{id:5})  
    },
    methods: {
        async callbackMenu() {
            let detailPrice = await this.getDetailPrice();
            this.menu.counter = 1
            this.menu.data = this.form
            this.menu.price = this.form.heat.price 
            this.menu.detailId = _.map(this.form.detail, 'id');
            console.log(this.menu)
            await Menu.setMenu(this.menu)

            this.dialog = false;
            var data = await Product.saveOrder(this.form)
        },
        async getDetailPrice() {
            return _.sumBy(this.form.detail, function (o: any) {
                return o.price;
            });
        }

    },
}
</script>
