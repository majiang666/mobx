import { observable } from 'mobx';

class Test{
    @observable obj = {
        name:"majiang"
    }
}

const store = new Test();
export default store;