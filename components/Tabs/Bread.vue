<template>
  <v-app>
      <div>
        <br>
          <!-- <div class="grid grid-cols-3 gap-4 px-5 mt-5  h-3/4 w-full">
            <div v-for="(menu,i) in menus" :key="i">
              <Cardmenu-MenuBread  @callback="MenuVla" :menu='menu'/>
            </div>
          </div> -->
      </div>
  </v-app>
</template>

<script>
export default {
  data(){
    return{
      menus:[
        {
          id:1,
          name:'Breads',
          price:35,
          hr: 0.5
          
        },
        {
          id:2,
          name:'Cookie',
          price:45,
          hr: 0.5
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