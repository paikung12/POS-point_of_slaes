 
import {VuexModule, Module, Mutation, Action} from "vuex-class-modules";
import _ from "lodash"
import {Core} from './core'
@Module
class ProductModule extends VuexModule{
    //state 
    
    public async getProduct(){
        return await Core.getHttp('/backend/product/')
    }
    public async getProducttype(){
        return await Core.getHttp('/backend/producttype/')
    }
    public async getProductprices(){
        return await Core.getHttp('/backend/productprice/')
    }
    public async getOrderdetail(type:number){
        return await Core.getHttp(`/backend/orderdetail/?type=${type}`)
    }
    public async getSweetlevel(){
        return await Core.getHttp('/backend/sweetlevel/')
    }
    public async getHeatlevel(){
        return await Core.getHttp('/backend/heatlevel/')
    }
    public async getProductpriceiew() {
        return await Core.getHttp('/backend/productpriceview/')
    }
}

import store from "~/vuexes"
export const Product = new ProductModule({store, name: "Product"})