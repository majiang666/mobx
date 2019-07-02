import React,{ Component } from 'react';
import { observer,inject } from 'mobx-react';

@inject('TopPics')
@observer
class TopPic extends Component{
    render(){
        const datas = this.props.TopPics;
        console.log(datas);
        let { loading,data,error } = datas;
        console.log(error);
        let res;
        if(error){
            res = error;
        }else if(loading){
            res = 'loading...';
        }else{
            res = data[0] && data[0].id
        }
        return(
            <div>
                <h1>{ res }</h1>
                <button onClick={() => datas.loadPic()}>get img</button>
            </div>
        )
    }
}
export default TopPic;