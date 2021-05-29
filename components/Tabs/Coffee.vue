<template>
      <div>
        <br>
          <!-- <div class="grid grid-cols-3 gap-4 px-5 mt-5  h-3/4 w-5/6" style=" ">
            <div v-for="(menu,i) in menus" :key="i">
              <Cardmenu-MenuCoffee @callback="MenuVal" :menu='menu'/>
            </div>
          </div> -->
      </div>
</template>
<script>
export default {
  data() {
    return {
      menus:[
        {
          id:1,
          name:'Espresso',
          price:25,
          hr:1,
        },
        {
          id:2,
          name:'Americano',
          price:25,
          hr:1
        },
        {
          id:3,
          name:'Late',
          price:25,
          hr:1
        },
        {
          id:4,
          name:'Mocca',
          price:25,
          hr:1
        },
        {
          id:5,
          name:'Flat White',
          price:25,
          hr:1
        },
        {
          id:6,
          name:'Cappuccino',
          price:25,
          hr:1
        },
        {
          id:7,
          name:'Piccolo',
          price:25,
          hr:1
        },
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