<template>
  <v-app>
      <div>
        <br>
          <!-- <div class="grid grid-cols-3 gap-4 px-5 mt-5  h-3/4 w-full">
            <div v-for="(menu,i) in menus" :key="i">
              <Cardmenu-MenuSmoothie @callback="MenuVla" :menu='menu' />
            </div>
          </div> -->
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
          id:1,
          name:"Aple Smoothie",
          price:35,
          hr:0.5,
        },
        {
          id:2,
          name:"Aple Smoothie",
          price:35,
          hr:0.5
        },
        {
          id:3,
          name:"Aple Smoothie",
          price:35,
          hr:0.5
        },
        {
          id:4,
          name:"Aple Smoothie",
          price:35,
          hr:0.5
        },
        {
          id:5,
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