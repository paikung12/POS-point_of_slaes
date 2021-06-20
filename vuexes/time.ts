import {VuexModule, Module, Mutation, Action} from "vuex-class-modules";
import axios from "@/plugins/axios"
import _ from "lodash"

@Module
class TimeModule extends VuexModule{

    
    public timesession:any = []

    public setTime(time:any){
        this.timesession.push(time)
    } 
}


import store from "~/vuexes"
export const Time = new TimeModule({store, name: "Time"})