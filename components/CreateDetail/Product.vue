<template>
<div>
    <div class="bg-white py-4 px-4 shadow-xl rounded-2xl my-4 mx-4">
        <div class="flex justify-between px-4 items-center">
            <div class="text-lg font-semibold">
                <p class="text-blue-600 ">Product </p>
                <div class="flex flex-row">
                    <v-file-input v-model="files" color="deep-purple accent-4" counter label="File input" multiple placeholder="Select your files" prepend-icon="mdi-paperclip" outlined :show-size="1000">
                        <template v-slot:selection="{ index, text }">
                            <v-chip v-if="index < 2" color="deep-purple accent-4" dark label small>
                                {{ text }}
                            </v-chip>

                            <span v-else-if="index === 2" class="text-overline grey--text text--darken-3 mx-2">
                                +{{ files.length - 2 }} File(s)
                            </span>
                        </template>
                    </v-file-input>
                    <v-col cols="2">
                        <v-subheader>Name:</v-subheader>
                    </v-col>
                    <v-text-field outlined label="Filled"></v-text-field>
                    <v-col cols="2">
                        <v-subheader>Type:</v-subheader>
                    </v-col>
                    <v-select :items="items" label="select" outlined></v-select>
                </div>
                <span class="text-gray-400 text-base text-blue-400">You can add Product Type.</span>
            </div>
            <div class="text-lg font-semibold">
                <button class="focus:outline-none bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-2 rounded-full inline-flex items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data: () => ({
        files: [],
    }),
}
</script>

<style>

</style>
