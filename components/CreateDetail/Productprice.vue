<template>
<div>
    <div class="bg-white py-4 px-4 shadow-xl rounded-2xl my-4 mx-4">
        <div class="flex justify-between px-4 items-center">
            <div class="text-lg font-semibold">
                <p class="text-blue-600">Product Price</p>
                <v-row>
                    <v-col cols="4">
                        <v-subheader>Name:</v-subheader>
                    </v-col>
                    <v-col cols="5">
                        <v-text-field outlined label="Filled"></v-text-field>
                    </v-col>
                    <v-col cols="4">
                        <v-subheader>Level:</v-subheader>
                    </v-col>
                    <v-col cols="5">
                        <v-select :items="items" label="select" outlined></v-select>
                    </v-col>
                    <v-col cols="4">
                        <v-subheader>Price:</v-subheader>
                    </v-col>
                    <v-col cols="5">
                        <v-text-field outlined label="Price"></v-text-field>
                    </v-col>
                </v-row>
                <div class="flex justify-center items-center text-center">
                    <button type="submit" class="my-5 w-full  flex justify-center bg-blue-500  p-4  rounded-lg  font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-400 ">
                        <span class="text-white">Add Product Price</span>
                    </button>
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
