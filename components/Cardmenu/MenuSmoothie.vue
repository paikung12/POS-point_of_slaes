<template>
<div>
    <v-hover v-slot="{ hover }">
        <v-card class="mx-auto" color="grey lighten-4" width="450">
            <v-img :aspect-ratio="16/9" src="https://www.krcfujisupply.biz/image/catalog/content/20.1.jpg">
                <v-expand-transition>
                    <div v-if="hover" class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text pt-8" style="height: 100%;">
                        $ 30. Bath
                    </div>
                </v-expand-transition>
            </v-img>
            <v-card-text class="pt-6" style="position: relative;">
                <v-btn absolute color="orange" class="white--text" fab large right top @click="callbackMenu()">
                    <v-icon>mdi-cart</v-icon>
                </v-btn>
                <div v-for="(data,i) in heat" :key="i">
                                        <v-checkbox  class="pl-5" v-model="form.heat" :label="data.heat_named" :value="data">
                                        </v-checkbox>
                                        <pre>{{price.checkbox}}</pre>
                                    </div>
                <h3 class="display-1 font-weight-light orange--text mb-2">
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
} from "~/vuexes/menu"
import { Product } from '~/vuexes/product'
export default {
    props: {
        menu: {
            default: {
                name: 'Time',
                prices: 0,
                counter: 1,
                type: [],
                data: {},
                price: 0,
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
                sweet: [],
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
    },
    methods: {
        async callbackMenu() {
            let detailPrice = await this.getDetailPrice();
            this.menu.counter = 1
            this.menu.data = this.form
            this.menu.price = this.form.heat.price + detailPrice
            this.menu.detailId = _.map(this.form.detail, 'id');
            console.log(this.menu)
            await Menu.setTime(this.menu)

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

<style>

</style>
