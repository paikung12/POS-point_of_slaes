<template>
<div>
    <v-hover v-slot="{ hover }">
        <v-card class="mx-auto" color="grey lighten-4" width="450">
            <v-img :aspect-ratio="16/9" src="https://site.listsothebysrealty.in.th/wp-content/uploads/2020/02/01-Espresso-1.jpg">
                <v-expand-transition>
                    <div v-if="hover" class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text pt-10 pl-8 " style="height: 100%;">
                       $ {{menu.price}}. Bath
                    </div>
                </v-expand-transition>
            </v-img>
            <v-card-text class="pt-6" style="position: relative;">
                <!-- <---Dialog --->
                <v-dialog v-model="dialog" scrollable max-width="480px">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn absolute color="orange" class="white--text" fab large right top v-bind="attrs" v-on="on">
                            <v-icon>mdi-cart</v-icon>
                        </v-btn>
                    </template>
                    <!-- <---Card Dialog --->
                    <v-card shaped>
                        <v-card-title>Select Topping </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text style="height: 300px;">
                            <p class="text-l pt-2">Select Hot & Cold</p>
                            <v-row>
                                <v-checkbox class="pl-5" v-model="selected" label="Hot (25.B)" value="Hot">
                                </v-checkbox>
                                <v-checkbox class="pl-5" v-model="selected" label="Cold (35.B)" value="Cold">
                                </v-checkbox>
                            </v-row>
                            <p class="text-l pt-2">Choose Sweetness</p>
                            <v-row>
                                <v-checkbox class="pl-5" v-model="selected" label="Little" value="Little">
                                </v-checkbox>
                                <v-checkbox class="pl-5" v-model="selected" label="Normal" value="Normal">
                                </v-checkbox>
                                <v-checkbox class="pl-5" v-model="selected" label="Very" value="Very">
                                </v-checkbox>
                            </v-row>
                            <p class="text-l pt-2">Select Coffee Shot</p>
                            <v-row>
                                <v-checkbox class="pl-5" v-model="selected" label="1 Shot(+5.B)" value="1Shot">
                                </v-checkbox>
                                <v-checkbox class="pl-5" v-model="selected" label="2 Shot(+5.B)" value="2Shot">
                                </v-checkbox>
                                <v-checkbox class="pl-5" v-model="selected" label="3 Shot(+5.B)" value="3Shot">
                                </v-checkbox>
                            </v-row>
                            <p class="text-l pt-2">Whipcream & Steam</p>
                            <v-row>
                                <v-checkbox class="pl-5" v-model="selected" label="Whipcream (+5.B)" value="Whipcream"></v-checkbox>
                                <v-checkbox class="pl-5" v-model="selected" label="Milk foam (+5.B)" value="Milkfoam"></v-checkbox>
                            </v-row>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions>
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

                <h3 class="display-1 font-weight-light orange--text mb-2 ">
                    {{menu.name}}
                </h3>
            </v-card-text>
        </v-card>
    </v-hover>
</div>
</template>

<script lang="ts">
import {Menu} from '@/vuexes/menu'
export default {
  props:{ 
    menu:{
      default:{
        name:'coffee',
        price:0
      }
    }
  },
  watch: {
  },
    data() {
        return {
            dialog: false,
            selected: ['Hot'],
        }
    },
    methods: {
        async callbackMenu(){
        await Menu.setMenu(this.menu)
        this.dialog=false;
      }
    },
}
</script>

<style>

</style>
