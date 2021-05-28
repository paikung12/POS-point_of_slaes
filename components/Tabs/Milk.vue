<template>
 
      <div>
        <br>
          <div class="grid grid-cols-3 gap-4 px-5 mt-5  h-3/4 w-full" style=" ">
            <div v-for="(menu,i) in menus" :key="i">
                <Cardmenu-Milk-Menumilk @callback="MenuVal" :menu='menu'/>
            </div>
          </div>
      </div>
 
</template>

<script>
export default {
  data() {
    return {
      menus:[
        {
          name:'Unicorn milk',
          price:35,
          hr:0.5,
        },
        {
          name:'Pink milk',
          price:25,
          hr:1
        },
        {
          name:'Green milk',
          price:25,
          hr:1
        },
        {
          name:'Choco milk',
          price:25,
          hr:1
        },
        {
          name:'Banana milk',
          price:25,
          hr:1
        },
        {
          name:'Milk',
          price:25,
          hr:1
        },
        {
          name:'mint milk',
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