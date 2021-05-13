<template>
  <div >
<svg height="100%" width="100%" id="svg" viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150 -mt-72"><defs><linearGradient id="gradient"><stop offset="5%" stop-color="#00d08488"></stop><stop offset="95%" stop-color="#0693e388"></stop></linearGradient></defs><path d="M 0,500 C 0,500 0,166 0,166 C 93.07177033492823,130.41148325358853 186.14354066985646,94.82296650717704 272,108 C 357.85645933014354,121.17703349282296 436.4976076555024,183.11961722488033 544,213 C 651.5023923444976,242.88038277511967 787.8660287081341,240.69856459330148 900,227 C 1012.1339712918659,213.30143540669852 1100.0382775119615,188.08612440191388 1186,176 C 1271.9617224880385,163.91387559808612 1355.9808612440193,164.95693779904306 1440,166 C 1440,166 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 250)"></path><defs><linearGradient id="gradient"><stop offset="5%" stop-color="#00d084ff"></stop><stop offset="95%" stop-color="#0693e3ff"></stop></linearGradient></defs><path d="M 0,500 C 0,500 0,333 0,333 C 126.00956937799043,340.09090909090907 252.01913875598086,347.18181818181813 333,350 C 413.98086124401914,352.81818181818187 449.93301435406704,351.3636363636364 543,352 C 636.066985645933,352.6363636363636 786.2488038277512,355.3636363636363 884,346 C 981.7511961722488,336.6363636363637 1027.0717703349283,315.1818181818182 1111,311 C 1194.9282296650717,306.8181818181818 1317.4641148325359,319.9090909090909 1440,333 C 1440,333 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 250)"></path></svg>
    <v-tabs
        class="-mt-96"
        dark
        centered
        background-color="transparent"
      >
          <v-tab> Today </v-tab>
          <v-tab> Month</v-tab>
          <v-tab> Years</v-tab>
          <v-tab-item>
              <Cardsumoforder-SumofToday />
          </v-tab-item>
           <v-tab-item>
              <Cardsumoforder-SumofMonth />
          </v-tab-item>
           <v-tab-item>
              <Cardsumoforder-SumofYears />
          </v-tab-item>

      </v-tabs>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>