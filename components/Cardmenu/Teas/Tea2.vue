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
                src="https://content.shopback.com/th/wp-content/uploads/2019/09/04135950/Pic-07.jpg"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text pt-8"
                    style="height: 100%;"
                  >
                    $ 35. Bath
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
                    max-width="300px"
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
                    <v-card>
                      <v-card-title>Select Country</v-card-title>
                      <v-divider></v-divider>
                      <v-card-text style="height: 300px;">
                        <v-radio-group
                          v-model="dialogmDoppio"
                          column
                        >
                          <v-radio
                            label="Burundi"
                            value="burundi"
                          ></v-radio>
                        </v-radio-group>
                      </v-card-text>
                      <v-divider></v-divider>
                      <v-card-actions>
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="dialog = false"
                        >
                          Close
                        </v-btn>
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="dialog = false"
                        >
                          Save
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                <h3 class="display-1 font-weight-light orange--text mb-2">
                  Brown Sugar 
                </h3>
              </v-card-text>
            </v-card>
          </v-hover>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>