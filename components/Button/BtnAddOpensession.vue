<template>
<div>
    <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
        <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
            <!-- svg  -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        </div>
        <div class="mt-8">
            <p class="text-xl font-semibold my-2">Open Session</p>
            <div class="flex space-x-2 text-gray-400 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p>Open Session</p>
            </div>
            <div class="flex space-x-2 text-gray-400  text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p>add order & time space</p>
            </div>
            <div class="flex space-x-2 text-gray-400  text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p>close Session</p>
            </div>
            <div class="border-t-2"></div>
            <div class="flex justify-between">
                <div class="my-2">
                    <v-dialog v-model="dialog" rounded width="500px">
                        <template v-slot:activator="{ on, attrs }">
                            <button class=" px-4 py-2  pl-1" v-bind="attrs" v-on="on">
                                <span class="text-xs font-semibold  text-blue-600">Open Session</span>
                                <v-icon class="pl-20 ">mdi-arrow-right </v-icon>
                            </button>
                        </template>
                        <div class="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
                            <div class="text-center">
                                <h2 class="mt-5 text-3xl font-bold text-gray-900">
                                    Open Session
                                </h2>
                                <p class="mt-2 text-sm text-gray-400">The Open you Session text.</p>
                            </div>
                            <v-form @submit="opensesion()">
                                <div class="grid grid-cols-1 space-y-2">
                                    <label class="text-sm font-bold text-blue-400 tracking-wide">Phone number</label>
                                    <v-text-field placeholder="08x-xxx-xxxx" outlined v-model="phone"></v-text-field>
                                </div>
                                <div class="divide-y divide-fuchsia-300">
                                    <div>
                                        <button class="my-5 w-full  flex justify-center bg-blue-500  p-4  rounded-lg  font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-400 ">
                                            <span class="text-white">Open Session</span>
                                        </button>
                                    </div>
                                </div>
                            </v-form>
                        </div>
                    </v-dialog>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import {
    Member
} from '@/vuexes/member'
import {
    Session
} from '@/vuexes/session'
export default {

    data: () => {
        return {
            phone: null,
            session_form: {
                member: null,
                status: null
            },
            memberfilter: [],
            dialog: false,
        }
    },
    async created() {

    },
    methods: {
        async opensesion() {
            if (this.phone != null) {
                var data = await Member.getMemberfilter(this.phone)
                this.session_form.member = data[0].id
                this.session_form.status = 1
                var session = await Session.postSession(this.session_form)
                console.log(session)
            } else {
                var data = await Member.getMemberByID(1)
                console.log(data)
                this.session_form.member = data.id
                this.session_form.status = 1
                var session = await Session.postSession(this.session_form)
                console.log(session)
            }

        }

    }
}
</script>
