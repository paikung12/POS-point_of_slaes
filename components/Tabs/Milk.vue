<template>
      <div>
        <!-- <br>
          <div class="grid grid-cols-3 gap-4 px-5 mt-5  h-3/4 w-full" style=" ">
            <div v-for="(menu,i) in menus" :key="i">
                <Cardmenu-Menumilk @callback="MenuVal" :menu='menu'/>
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
          name:'Unicorn milk',
          price:35,
          hr:0.5,
        },
        {
          id:2,
          name:'Pink milk',
          price:25,
          hr:1
        },
        {
          id:3,
          name:'Green milk',
          price:25,
          hr:1
        },
        {
          id:4,
          name:'Choco milk',
          price:25,
          hr:1
        },
        {
          id:5,
          name:'Banana milk',
          price:25,
          hr:1
        },
        {
          id:6,
          name:'Milk',
          price:25,
          hr:1
        },
        {
          id:7,
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