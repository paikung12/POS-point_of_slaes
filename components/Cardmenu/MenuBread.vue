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
                src="https://www.tasteofhome.com/wp-content/uploads/2018/01/exps192208_SD163575C10_09_4b-2.jpg?w=1200"
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
                <v-btn
                  absolute
                  color="orange"
                  class="white--text"
                  fab
                  large
                  right
                  top
                  @click="callbackMenu()"
                  >
                  <v-icon>mdi-cart</v-icon>
                </v-btn>
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
        name:'bread',
        price:0,
        counter: 1
      }
    }
  },
  methods: {
    async callbackMenu() {
      this.menu.counter = 1
      await Menu.setMenu(this.menu)
    },
  },

}
</script>

<style>

</style>