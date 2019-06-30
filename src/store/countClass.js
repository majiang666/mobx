import { observable,action } from 'mobx';
class CountClass{
    @observable val = 0;
    @action remove = () => {
        this.val --;
    }
}
const store = new CountClass();
export default store;