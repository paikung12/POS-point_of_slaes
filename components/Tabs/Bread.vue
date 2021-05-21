<template>
  <v-app>
      <div>
        <br>
          <div class="grid grid-cols-3 gap-4 px-5 mt-5  h-3/4 w-full">
            <div v-for="(menu,i) in menus" :key="i">
              <Cardmenu-Breads-MenuBread  @callback="MenuVla" :menu='menu'/>
            </div>
           
           <!-- <Cardmenu-Breads-Bread2 />
           <Cardmenu-Breads-Bread3 />
           <Cardmenu-Breads-Bread4 />
           <Cardmenu-Breads-Bread5 /> -->
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
          name:'Breads',
          price:35,
          hr: 0.5
          
        },
        {
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