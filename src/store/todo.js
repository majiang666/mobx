import { observable,computed } from 'mobx';

class Todo{
    // @observable val;
    @observable datas;
    constructor(){
        this.datas = [];
        // this.val = ""
    }
    @computed get total(){
        return this.datas.length;
    }
}

const todo = new Todo();
export default todo;
