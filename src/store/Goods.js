import {makeAutoObservable} from 'mobx'

class GoodsStore {
    basketGoods = []
    constructor(){
        makeAutoObservable(this)
    }
    
    addGood(good){
        console.log(this.basketGoods)
        this.basketGoods.push(good)
    }

}

export default new GoodsStore();


