<template>
<div>
    <div class="min-w-screen min-h-screen bg-blue-100 flex items-center p-5 lg:p-20 overflow-hidden relative">
        <div class="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
            <div class="w-full md:w-1/2">
                <div class="mb-10 md:mb-20 text-gray-600 font-light">
                    <h1 class="font-black uppercase text-3xl lg:text-5xl text-indigo-700 mb-10">We co-working
                        <br>spaces & Coffee</h1>
                    <p>We're big believers in talking it out.</p>
                    <p>Give us a call and let's find a solution that works for you.</p>
                </div>
                <div class="mb-20 md:mb-0">
                    <button class="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-blue-500 hover:text-blue-600">
                        Admin Point of Sales 
                    </button>
                </div>
            </div>
            <div class="w-full md:w-1/2 text-center">
                <div class="container mx-auto">
                    <div class="max-w-md mx-auto my-10">
                        <div class="text-center">
                            <h1 class="my-3 text-5xl font-semibold text-gray-700 dark:text-gray-200">Sign in</h1>
                            <p class="text-gray-500 dark:text-gray-400 text-xl">Sign in to access your account</p>
                        </div>
                        <div class="m-7">
                            <v-form>
                                <div class="mb-6">
                                    <div class="flex justify-between mb-2">
                                        <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">User Name</label>
                                    </div>
                                    <v-text-field 
                                        label="Filled" 
                                        placeholder="Username"  
                                        v-model="form.username"
                                        :rules="[rules.required]"
                                        outlined>
                                    </v-text-field>
                                </div>
                                <div class="mb-6">
                                    <div class="flex justify-between mb-2">
                                        <label for="password" class="text-sm text-gray-600 dark:text-gray-400">Password</label>
                                    </div>
                                    <v-text-field
                                        type="password" 
                                        label="Filled" 
                                        placeholder="Password" 
                                        v-model="form.password"
                                        :rules="[rules.required]"
                                        outlined>
                                    </v-text-field>
                                </div>
                                <div class="mb-6">
                                    <button type="button" class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none" @click="$router.push('Home')">Sign in</button>
                                </div>
                                <p class="text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a href="#!" class="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800">Sign up</a>.</p>
                            </v-form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-64 md:w-96 h-96 md:h-full bg-blue-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
        <div class="w-96 h-full bg-indigo-200 bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"></div>
    </div>
</div>
</template>

<script>
import { values } from 'lodash'
export default {
    data: () => ({
        show_password: false,
        rules:{
            required: values => !!values || 'Required'
        },
        form:{
            username:"",
            password:"",
            remember_me: false
        },
        user: {
            username: null,
            password: null,
        }
    }),
    created(){
        this.get_logInItem()
    },
    methods: {
        remember_me(){
            let item = JSON.stringify(this.form)
            localStorage.setItem('login_item' ,item)
        },
        get_logInItem(){
            // if (localStorage.getItem('login_item')) {
            //         let item = localStorage.getItem('login_item')
            //         localStorage.removeItem('login_item')
            //         this.form = JSON.parse(item)
            //     }
        },
        async getUserToken() {
            let token = await this.$store.dispatch(' ', this.form)
                if (token) {
                    if (this.form.remember_me) {
                        this.remember__me()
                    }
                    await this.$router.push({
                        name: 'Home'
                    })
                }
        }
    },
}
</script>

<style>

</style>
