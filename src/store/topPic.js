import { observable,action,runInAction, flow } from 'mobx';

class TopPic{
    @observable data = [];
    @observable loading = false;
    @observable error = null;

    // 异步方式1
    // loadPic(){
    //     fetch("https://cnodejs.org/api/v1/topics")
    //     .then(response => response.json())
    //     .then(({ data }) => {
    //         this.getImg(data);
    //     })
    // }
    // @action 
    // getImg (data){
    //     this.data = data;
    // }

    //异步方式2
    // loadPic(){
    //     fetch("https://cnodejs.org/api/v1/topics")
    //     .then(res => res.json())
    //     .then(({ data }) => {
    //         runInAction(() => {
    //             this.data = data
    //         })
    //     })
    // }

    //异步方式3
    // loadPic = async () => {
    //     const res = await fetch("https://cnodejs.org/api/v1/topics");
    //     const json = await res.json();
    //     runInAction(() => {
    //         this.data = json.data;
    //     })
    // }

    //异步方式4
    @action
    loadPic = flow(function*(){
        runInAction(() => {
            this.loading = true;
        })
        try{
            const res = yield fetch("https://cnodejs.org/0api/v1/topics");
            const json = yield res.json();
            this.data = json.data;
            this.loading = false;
        }catch(err){
            this.loading = false;
            this.error = err.message
        }
        
    })
}
const store = new TopPic();
export default store;
