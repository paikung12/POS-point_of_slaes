<template>
  <v-app>
      <div>
        <br>
          <!-- <div class="grid grid-cols-3 gap-4 px-5 mt-5  h-3/4 w-full" >
            <div v-for="(menu,i) in menus" :key="i">
              <Cardmenu-MenuTeas  @callback="testVal" :menu='menu'/>
            </div>
          </div> -->
      </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return{
      menus:[
        {
           id:1,
           name:'Milk tea',
           price: 35,
           hr:0.5
        },
        {
           id:2,
           name:'Green tea',
           price: 35,
           hr:0.5
        },
        {
           id:3,
           name:'Cocoa tea',
           price: 35,
           hr:0.5
        },
        {
           id:4,
           name:'Mint milk tea',
           price: 35,
           hr:0.5
        },
        {
           id:5,
           name:'Banana milk tea',
           price: 35,
           hr:0.5
        }
      ]
    }
  },
  methods: {
    testVal(val){
      alert(JSON.stringify(val))
    }
  }  
}
</script>

<style>

</style>