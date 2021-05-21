<template>
  <v-app>
      <div>
        <br>
          <div class="grid grid-cols-3 gap-4 px-5 mt-5  h-3/4 w-full" >
          <div v-for="(menu,i) in menus" :key="i">
            <Cardmenu-Teas-MenuTeas  @callback="testVal" :menu='menu'/>
          </div>
           <!-- <Cardmenu-Teas-Tea2 />
           <Cardmenu-Teas-Tea3 />
           <Cardmenu-Teas-Tea4 />
           <Cardmenu-Teas-Tea5 /> -->
          </div>
      </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return{
      menus:[
        {
           name:'Fresh mike',
           price: 35,
           hr:0.5
        },
        {
           name:'Green mike',
           price: 35,
           hr:0.5
        },
        {
           name:'Apple mike',
           price: 35,
           hr:0.5
        },
        {
           name:'Fresh mike',
           price: 35,
           hr:0.5
        },
        {
           name:'Fresh mike',
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