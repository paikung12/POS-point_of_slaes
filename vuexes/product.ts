 
import {VuexModule, Module, Mutation, Action} from "vuex-class-modules";
import _ from "lodash"
import {Core} from './core'
@Module
class ProductModule extends VuexModule{
    //state 
    
    public async getProduct(){
        return await Core.getHttp('/backend/product/')
    }
    public async getProductByID(pk:number){
        return await Core.getHttp(`/backend/product/${pk}/`)
    }
    public async getOrderdetailByID(pk:number){
        return await Core.getHttp(`/backend/vieworderdetail/${pk}/`)
    }
    public async getProductview(){
        return await Core.getHttp('/backend/viewproduct/')
    }
    public async getProductpricess(product:number){
        return await Core.getHttp(`/backend/productprice/?product=${product}`)
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

    public async getHeatlevelByID(pk:number){
        return await Core.getHttp(`/backend/heatlevel/${pk}/`)
    }

    public async getProductpriceiew() {
        return await Core.getHttp('/backend/productpriceview/')
    }
    public async saveOrder(form: any){ 
        console.log(form);
    //    return await Core.postHttp('/backend/order' ,form)
    }

    public async postProducttype(params :any){

       return await Core.postHttp('/backend/producttype/', params)
    }

    public async postProduct(params :any){
        var formData = new FormData();
        formData.append("name" , params.name)
        formData.append("img" , params.img)
        formData.append("type" , params.type)
        return await Core.postHttp('/backend/product/', params)
    }

    public async postProductPrice(params :any){
        return await Core.postHttp('/backend/productprice/', params)
    }

    public async postOrderdetail(params :any){
        return await Core.postHttp('/backend/orderdetail/', params)
    }

    public async getOrder(){
        return await Core.getHttp('/backend/order/')
    }
    public async getOrderByDate(day:number, month:number, year:number){
        return await Core.getHttp(`/backend/order/?d=${day}&m=${month}&y=${year}`)
    }
    public async getOrderViewByDate(day:number, month:number, year:number){
        return await Core.getHttp(`/backend/vieworder/?d=${day}&m=${month}&y=${year}`)
    }

    public async getViewOrder(){
        return await Core.getHttp('/backend/vieworder/')
    }

    public async deleteProductById(pk:number){
        return await Core.deleteHttp(`/backend/product/${pk}/`)
    }
    public async deleteOrderdetailById(pk:number){
        return await Core.deleteHttp(`/backend/orderdetail/${pk}/`)
    }
    public async putProduct(params:any,pk:number){
        return await Core.putHttp(`/backend/product/${pk}/` ,params)
    }
    public async putProductprice(params:any,pk:number){
        return await Core.putHttp(`/backend/productprice/${pk}/` ,params)
    }
    public async getProducttypesByID(pk:number){
        return await Core.getHttp(`/backend/producttype/${pk}/`)
    }
    public async getProductpriceByID(pk:number){
        return await Core.getHttp(`/backend/producttype/${pk}/`)
    }
    public async putOrderdetail(params:any, pk:number){
        return await Core.putHttp(`/backend/orderdetail/${pk}/` ,params)
    }

    
 



}

import store from "~/vuexes"
export const Product = new ProductModule({store, name: "Product"})