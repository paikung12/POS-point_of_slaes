<template>
<v-container fluid>
    <v-form>
        <v-row>
            <v-col cols="4">
                <v-subheader>Name or Table: </v-subheader>
            </v-col>
            <v-col cols="8">
                <v-text-field label=" "></v-text-field>
            </v-col>
        </v-row>
        <!-- <---Time Start --->
        <v-row>
            <v-col cols="4">
                <v-subheader>Time Start: </v-subheader>
            </v-col>
            <v-col cols="8" sm="8">
                <div class="relative z-0 w-full">
                    <v-text-field label=" " onclick="this.setAttribute('type', 'time');">
                    </v-text-field>
                </div>
            </v-col>
        </v-row>
        <!-- <---Time End --->
        <v-row>
            <v-col cols="4">
                <v-subheader>Time End: </v-subheader>
            </v-col>
            <v-col cols="8" sm="8">
                <div class="relative z-0 w-full">
                    <v-text-field label=" " onclick="this.setAttribute('type', 'time');">
                    </v-text-field>
                </div>
            </v-col>
            <button type="submit" class="my-5 w-full  flex justify-center bg-blue-500  p-4  rounded-full  font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-400 ">
                <span class="text-white">Add Time</span>
            </button>
        </v-row>
    </v-form>
</v-container>
</template>

<script>
export default {
    data() {
        return {

        }
    },
}
</script>

<style>

</style>
