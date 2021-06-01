<template>
  <div class="font-sans bg-grey-lighter flex flex-col min-h-screen w-full">
    <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150 -mt-20"><defs><linearGradient id="gradient"><stop offset="5%" stop-color="#0693e388"></stop><stop offset="95%" stop-color="#8ed1fc88"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,133 0,133 C 39.12031774564487,159.3539612466626 78.24063549128974,185.70792249332524 128,179 C 177.75936450871026,172.29207750667476 238.1577757804859,132.5222712733617 289,131 C 339.8422242195141,129.4777287266383 381.12826138676684,166.20299241322795 434,175 C 486.87173861323316,183.79700758677205 551.3291786724471,164.6657590737265 599,151 C 646.6708213275529,137.3342409262735 677.555023923445,129.13397129186603 726,118 C 774.444976076555,106.86602870813398 840.450725633773,92.7983557588094 882,101 C 923.549274366227,109.2016442411906 940.6420735414629,139.67260567289645 985,150 C 1029.3579264585371,160.32739432710355 1100.9809802003754,150.51122154960478 1151,152 C 1201.0190197996246,153.48877845039522 1229.4340056570356,166.28250812868436 1274,165 C 1318.5659943429644,163.71749187131564 1379.2829971714823,148.35874593565782 1440,133 C 1440,133 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 200)"></path><defs><linearGradient id="gradient"><stop offset="5%" stop-color="#0693e3ff"></stop><stop offset="95%" stop-color="#8ed1fcff"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,266 0,266 C 63.62330487192365,285.1832985275846 127.2466097438473,304.3665970551693 165,310 C 202.7533902561527,315.6334029448307 214.63686589653446,307.71691030690744 263,294 C 311.36313410346554,280.28308969309256 396.2059266700151,260.7657617172011 445,264 C 493.7940733299849,267.2342382827989 506.5394274234052,293.2200428242882 553,303 C 599.4605725765948,312.7799571757118 679.6363636363637,306.35406698564594 731,294 C 782.3636363636363,281.64593301435406 804.9151180311403,263.363689233128 842,264 C 879.0848819688597,264.636310766872 930.7031642390759,284.19117608184195 984,287 C 1037.296835760924,289.80882391815805 1092.2722250125564,275.8716064395041 1144,259 C 1195.7277749874436,242.1283935604959 1244.2079357106982,222.3223981601417 1293,223 C 1341.7920642893018,223.6776018398583 1390.896032144651,244.83880091992916 1440,266 C 1440,266 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 200)"></path></svg>    
     <div class="flex-grow container mx-auto sm:px-4 pt-6 pb-8 -mt-96">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full mb-6 lg:mb-0 lg:w-2/5 px-4 flex flex-col pt-8">
          <div class="shadow-lg rounded-2xl bg-white ">
            <div class="border-b">
              <div class="flex justify-between px-6 -mb-px">
                <h3 class="text-blue-dark py-4 font-normal text-lg ">Registor Members</h3>
              </div>
            </div>
            <div class="text-center px-6 py-4">
              <div class="py-8">
                <div class="mb-4">
                  <v-form >
                    <v-row>
                      <v-col cols="3">
                        <v-subheader>Name: </v-subheader>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          outlined
                          label="name"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="3">
                        <v-subheader>Phone: </v-subheader>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          outlined
                          label="phone"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <button class="text-center w-full bg-blue-900 rounded-md text-white py-3 font-medium">Submit</button>
                  </v-form>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div class="w-full lg:w-3/5 px-4 pt-8">
        <div class="shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full">
          <div class="border-b">
            <div class="flex justify-between px-6 -mb-px">
              <h3 class="text-blue-dark py-4 font-normal text-lg">#Table Members</h3>
            </div>
          </div>
          <div>
            <div class="text-center px-6 py-4">
              <div class="py-8">
                <div class="mb-4">
                  <ul>
                    <li class="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                      <div class="flex items-center justify-start text-sm">
                        <span class="mx-4">
                          01
                        </span>
                        <span>
                        Create wireframe
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>