import {VuexModule, Module, Mutation, Action} from "vuex-class-modules";
import _ from "lodash"
import {Core} from './core'
@Module
class MemberModule extends VuexModule{
   //state 
   public async getMember(){
       return await Core.getHttp('/backend/member/')
   }
   public async postMember(params :any){
       return await Core.postHttp('/backend/member/', params)
   }
   public async getMemberfilter(phone:number){
      return await Core.getHttp(`/backend/member/?phone=${phone}`)
      }
}

import store from "~/vuexes"
export const Member = new MemberModule({store, name: "Member"})