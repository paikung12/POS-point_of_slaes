<template>
<div>
    <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
        <table class="min-w-full">
            <thead>
                <tr>
                    <th class="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">No</th>
                    <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Order</th>
                    <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Time</th>
                    <th class="py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Prices</th>
                    <th class="px-6 py-3 border-b-2 border-gray-300 text-blue-500">Manage</th>
                </tr>
            </thead>
            <tbody class="bg-white">
                <tr>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                        <div class="flex items-center">
                            <div>
                                <div class="text-sm leading-5 text-gray-800">#1</div>
                            </div>
                        </div>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                        <div class="text-sm leading-5 text-gray-900">Damilare Anjorin</div>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                        <div class="text-sm leading-5 text-gray-900">30/4/2022</div>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                        <div class="text-sm leading-5 text-gray-900">45 </div>
                    </td>
                    <td class="flex justify-center px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                        <v-dialog v-model="dialog1" rounded width="500px">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn v-bind="attrs" v-on="on" class="ma-1 " icon color="blue">
                                    <v-icon>mdi-eye</v-icon>
                                </v-btn>
                            </template>
                            <div class="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
                                <div class="text-center">
                                    <h2 class="mt-5 text-3xl font-bold text-gray-900">
                                        Bill Detail
                                    </h2>
                                    <p class="mt-2 text-sm text-gray-400">The bill you billed text.</p>
                                </div>
                                <v-container fluid>
                                    <v-form>
                                        <div class="grid grid-cols-1 space-y-2">
                                            <div class="flex items-center justify-center w-full">
                                                <label class="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                                                    <div class="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                                                        <div class="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                                                         
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </v-form>
                                </v-container>
                            </div>
                        </v-dialog>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
