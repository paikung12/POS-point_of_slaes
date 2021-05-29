<template>
  <div>
       <v-hover v-slot="{ hover }">
            <v-card
              class="mx-auto"
              color="grey lighten-4"
              width="450"
            >
              <v-img
                :aspect-ratio="16/9"
                src="https://content.shopback.com/th/wp-content/uploads/2019/09/04135819/Pic-05.jpg"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text pt-8"
                    style="height: 100%;"
                  >
                    $ {{menu.price}}. Bath
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text
                class="pt-6"
                style="position: relative;"
              >
                <v-dialog
                    v-model="dialog"
                    scrollable
                    max-width="480px"
                  >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      absolute
                      color="orange"
                      class="white--text"
                      fab
                      large
                      right
                      top
                      v-bind="attrs"
                      v-on="on"
                    >
                    <v-icon>mdi-cart</v-icon>
                    </v-btn>
                  </template>
                    <v-card
                      shaped
                    >
                      <v-card-title>Select Topping</v-card-title>
                      <v-divider></v-divider>
                      <v-card-text style="height: 300px;">
                        <p class="text-l pt-2">Select Cold & Churn</p>
                          <v-row>
                            <v-checkbox
                            class="pl-5"
                              v-model="selected"
                              label="Cold (35.B)"
                              value="Cold"
                            >
                            </v-checkbox>
                            <v-checkbox
                              class="pl-5"
                              v-model="selected"
                              label="Churn (40.B)"
                              value="Churn"
                            >
                            </v-checkbox>
                          </v-row>
                        <p class="text-l pt-2">Choose Sweetness</p>
                          <v-row>
                              <v-checkbox
                              class="pl-5"
                                v-model="selected"
                                label="Little"
                                value="Little"
                              >
                              </v-checkbox>
                              <v-checkbox
                                class="pl-5"
                                v-model="selected"
                                label="Normal"
                                value="Normal"
                              >
                              </v-checkbox>
                              <v-checkbox
                                class="pl-5"
                                v-model="selected"
                                label="Very"
                                value="Very"
                              >
                              </v-checkbox>
                            </v-row>
                        <p class="text-l pt-2">Select Kaimook</p>
                          <v-row>
                            <v-checkbox
                                class="pl-5"
                                v-model="selected"
                                label="Kaimook (+5.B)"
                                value="Kaimook"
                              >
                              </v-checkbox>
                              <v-checkbox
                                class="pl-5"
                                v-model="selected"
                                label="Buk Brown Sugar (+5.B)"
                                value="BukBrownSugar"
                              >
                              </v-checkbox>
                              <v-checkbox
                                class="pl-5"
                                v-model="selected"
                                label="Fruit jelly (+5.B)"
                                value="Fruitjelly"
                              >
                              </v-checkbox>
                          </v-row>
                          <p class="text-l pt-2">Select Pudding</p>
                          <v-row>
                            <v-checkbox
                                class="pl-5"
                                v-model="selected"
                                label="Pudding chocolate (+5.B)"
                                value="Puddingchocolate"
                              >
                              </v-checkbox>
                              <v-checkbox
                                class="pl-5"
                                v-model="selected"
                                label="Pudding egg (+5.B)"
                                value="Puddingegg"
                              >
                              </v-checkbox>
                              <v-checkbox
                                class="pl-5"
                                v-model="selected"
                                label="Pudding milk (+5.B)"
                                value="Puddingmilk"
                              >
                              </v-checkbox>
                          </v-row>
                      </v-card-text>
                      <v-divider></v-divider>
                      <v-card-actions>
                        <div class="flex justify-end">
                          <v-btn color="green darken-1" text @click="callbackMenu()">
                            Submit
                          </v-btn>
                          <v-btn
                            color="blue darken-1 "
                            text
                            @click="dialog = false"
                          >
                            Close
                          </v-btn>
                        </div>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                <h3 class="display-1 font-weight-light orange--text mb-2">
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
        name: 'Tea',
        price: 0.5,
        counter:1
      }
    }
  },
  watch: {
  },
data () {
      return {
         dialog: false,
         selected: [''],
      }
    },
    methods: {
        async callbackMenu(){
          this.menu.counter =1
        await Menu.setMenu(this.menu)
        this.dialog=false;
      }
    },
}
</script>

<style>

</style>