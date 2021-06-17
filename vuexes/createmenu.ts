import {VuexModule, Module, Mutation, Action} from "vuex-class-modules";
import _ from "lodash"
import {Core} from './core'
@Module
class CreatemenuModule extends VuexModule{
   //state 
    public async getProducttype(){
        return await Core.getHttp('/backend/producttype/')
    }
    public async getOrderdetail(type:number){
        return await Core.getHttp('/backend/orderdetail/')
    }
    public async postProducttype(params:any){
        var formData = new FormData();
        formData.append("name" , params.name)
        return await Core.postHttp('/backend/producttype/', formData )
    }
    public async postProduct(params:any){
        var formData = new FormData();
        formData.append("name" , params.name)
        return await Core.postHttp('/backend/product/ ', formData)
    }
    public async postProductprice(params:any){
        var formData = new FormData();
        formData.append("name" , params.name)
        formData.append("price" , params.price)
        return await Core.postHttp('/backend/productprice/ ', formData)
    }
    public async postOrderdetail(params:any){
        var formData = new FormData();
        formData.append("name" , params.name)
        formData.append("price" , params.price)
        return await Core.postHttp('/backend/orderdetail/ ', formData)
    }
}

import store from "~/vuexes"
export const Createmenu = new CreatemenuModule({store, name: " Createmenu"})