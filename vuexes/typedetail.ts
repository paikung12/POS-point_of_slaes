import {VuexModule, Module, Mutation, Action} from "vuex-class-modules";
import _ from "lodash"
import {Core} from './core'
@Module
class TypedetialModule extends VuexModule{
   //state 
   public async getHeatlevel(){
       return await Core.getHttp('/backend/heatlevel/')
   }
   public async getSweetlevel(){
        return await Core.getHttp('/backend/sweetlevel/')
    }
    public async getProducttype(){
        return await Core.getHttp('/backend/producttype/')
    }
    public async getOrderdetail(type:number){
        return await Core.getHttp('/backend/orderdetail/')
    }
}

import store from "~/vuexes"
export const Typedetial = new TypedetialModule({store, name: " Typedetial"})