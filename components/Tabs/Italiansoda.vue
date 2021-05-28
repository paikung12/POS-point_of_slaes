<template>
  <v-app>
      <div>
        <br>
          <div class="grid grid-cols-3 gap-4 px-5 mt-5  h-3/4 w-full">
            <div v-for="(menu ,i) in menus" :key="i">
              <Cardmenu-Italiansodas-MenuItaliansoda  @callback="MenuVal" :menu='menu'/>
            </div>
          </div>
      </div>
  </v-app>
</template>

<script>
export default {
  data(){
    return{
      menus:[
        {
          name:'Strawberry Iceland',
          price: 35,
          hr: 0.5,
        },
        {
          name:'Aple Iceland',
          price: 35,
          hr: 0.5,
        },
        {
          name:'Strawberry Iceland',
          price: 35,
          hr: 0.5
        },
        {
          name:'Strawberry Iceland',
          price: 35,
          hr: 0.5,
        },
        {
          name:'Strawberry Iceland',
          price: 35,
          hr: 0.5,
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