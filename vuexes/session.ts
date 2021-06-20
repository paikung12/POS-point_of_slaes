import {VuexModule, Module, Mutation, Action} from "vuex-class-modules";
import _ from "lodash"
import {Core} from './core'
@Module
class SessionModule extends VuexModule{
   //state 
   public async getSession(){
       return await Core.getHttp('/backend/session/')
   }
   public async getSessionById(pk:any){
       return await Core.getHttp(`/backend/session/${pk}/`)
    }
   public async postSession(params:any){
       return await Core.postHttp('/backend/session/', params)
   }
   public async getViewsession(status:number){
       return await Core.getHttp(`/backend/viewsession/?status=${status}`)
   }
   public async updateSession(pk:number, params:any){
    return await Core.putHttp(`/backend/session/${pk}/`, params)
}
   

}
import store from "~/vuexes"
export const Session = new SessionModule({store, name: "Session"})