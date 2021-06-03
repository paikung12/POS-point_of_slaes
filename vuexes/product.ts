 
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
}

import store from "~/vuexes"
export const Product = new ProductModule({store, name: "Product"})