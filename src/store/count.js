import { observable, action,autorun, toJS, isObservableObject,computed } from 'mobx';
class Count {
    @observable count = 99;
    @observable test;
    @action add = () => {
        this.count ++;
    } 
    constructor(){
        this.test = ['aaaa',"mj"]
    }
    @computed get getCount(){
        return this.test.length;
    }
}
const store = new Count();
export default store;

autorun(() => {
    console.log(store.test);
    console.log(toJS(store.test));
    console.log(isObservableObject(store.test));
})