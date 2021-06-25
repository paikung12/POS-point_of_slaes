import {VuexModule, Module, Mutation, Action} from "vuex-class-modules";
import axios from "@/plugins/axios"
import {Core} from './core'
import _ from "lodash"

@Module
class LoginModule extends VuexModule{

    public async logIn(params:any){
        return await Core.postHttp('/rest-auth/login/', params)
    }

}


import store from "~/vuexes"
export const Login = new LoginModule({store, name: "Login"})