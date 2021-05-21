<template>
  <v-app>
      <div>
        <br>
          <div class="grid grid-cols-3 gap-4 px-5 mt-5  h-3/4 w-full">
            <div v-for="(menu,i) in menus" :key="i">
              <Cardmenu-Smoothies-MenuSmoothie @callback="MenuVla" :menu='menu' />
            </div>
           <!-- <Cardmenu-Smoothies-Smoothie2 />
           <Cardmenu-Smoothies-Smoothie3 />
           <Cardmenu-Smoothies-Smoothie4 />
           <Cardmenu-Smoothies-Smoothie5 /> -->
          </div>
      </div>
  </v-app>
</template>

<script>
import { method } from 'lodash'
export default {
  data(){
    return{
      menus:[
        {
          name:"Aple Smoothie",
          price:35,
          hr:0.5,
        },
        {
          name:"Aple Smoothie",
          price:35,
          hr:0.5
        },
        {
          name:"Aple Smoothie",
          price:35,
          hr:0.5
        },
        {
          name:"Aple Smoothie",
          price:35,
          hr:0.5
        },
        {
          name:"Aple Smoothie",
          price:35,
          hr:0.5
        }
      ]
    }
  },
  methods:{
    MenuVla(val){
      alert(JSON.stringify(val))
    }
  },
}
</script>

<style>

</style>