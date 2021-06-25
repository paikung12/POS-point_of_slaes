import {VuexModule, Module, Mutation, Action} from "vuex-class-modules";
import _ from "lodash"
import {Core} from './core'
@Module
class LoginModule extends VuexModule{

   //state 
   
   
}

import store from "~/vuexes"
export const Login = new LoginModule({store, name: "Login"})