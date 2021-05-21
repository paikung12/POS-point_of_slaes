<template>
 
      <div>
        <br>
          <div class="grid grid-cols-3 gap-4 px-5 mt-5  h-3/4 w-full" style=" ">
          <div v-for="(menu,i) in menus" :key="i">
            <Cardmenu-Coffee-MenuCoffee @callback="MenuVal" :menu='menu'/>
          </div>
           <!-- <Cardmenu-Coffee-CardCappuccino />
           <Cardmenu-Coffee-CardAmericano />
           <Cardmenu-Coffee-CardDoppio />
           <Cardmenu-Coffee-CardFlatWhite />
           <Cardmenu-Coffee-CardLatte />
           <Cardmenu-Coffee-CardMocca /> -->
          </div>
      </div>
 
</template>

<script>
export default {
  data() {
    return {
      menus:[
        {
          name:'Espresso',
          price:40,
          hr:1,
        },
        {
          name:'Americano',
          price:45,
          hr:1
        },
        {
          name:'Late',
          price:30,
          hr:1
        },
        {
          name:'Mocca',
          price:35,
          hr:1
        }
      ]
    }
  },
  methods: {
    MenuVal(val){
      alert(JSON.stringify(val))
    }
  },
}
</script>

<style>

</style>