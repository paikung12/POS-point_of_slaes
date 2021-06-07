import {VuexModule, Module, Mutation, Action} from "vuex-class-modules";
import _ from "lodash"
import {Core} from './core'
@Module
class SessionModule extends VuexModule{
   //state 
   public async getSession(){
       return await Core.getHttp('/backend/session/')
   }
}

import store from "~/vuexes"
export const Session = new SessionModule({store, name: "Session"})