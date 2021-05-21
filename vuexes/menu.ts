import {VuexModule, Module, Mutation, Action} from "vuex-class-modules";
import axios from "@/plugins/axios"
import _ from "lodash"

@Module
class MenuModule extends VuexModule{

    public chooseMenus:any = []

    public setMenu(menu:any){
        this.chooseMenus.push(menu)
    }
    //state
 
}
import store from "~/vuexes"
export const Menu = new MenuModule({store, name: "Menu"})