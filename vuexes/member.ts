import {VuexModule, Module, Mutation, Action} from "vuex-class-modules";
import _ from "lodash"
import {Core} from './core'
@Module
class MemberModule extends VuexModule{
   //state 
   public async getMember(){
       return await Core.getHttp('/backend/member/')
   }
   public async getPoint(){
       return await Core.getHttp('/backend/point/')
   }
   public async getPromotion(){
       return await Core.getHttp('/backend/promotion/')
   }
   public async postMember(params :any){
       var formData = new FormData();
       formData.append("name" , params.name)
       formData.append("phone" , params.phone)
       return await Core.postHttp('/backend/member/', formData)
   }
}

import store from "~/vuexes"
export const Member = new MemberModule({store, name: "Member"})