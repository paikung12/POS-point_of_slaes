import {VuexModule, Module, Mutation, Action} from "vuex-class-modules";
import axios from "@/plugins/axios"
import _ from "lodash"

@Module
class MenuModule extends VuexModule{

    
    public chooseMenus:any = []

    public setMenu(menu:any){
        this.chooseMenus.push(menu)
    }
    public async clearMenu(){
        while(this.chooseMenus.length > 0) {
            this.chooseMenus.pop();
        }
    }
    public async Counterincrement(id:number){
        let index = _.findIndex(this.chooseMenus,{id:id})
        let currentMenu = this.chooseMenus[index]
        currentMenu.counter+=1
        this.chooseMenus.splice(index, 1, currentMenu);
    }
    public async Counterdecrement(id:number){
        let index = _.findIndex(this.chooseMenus,{id:id})
        let currentMenu =this.chooseMenus[index]
        currentMenu.counter-=1
        this.chooseMenus.splice(index, 1, currentMenu);
    }
    //state

    

    
 
}


import store from "~/vuexes"
export const Menu = new MenuModule({store, name: "Menu"})