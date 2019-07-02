import React from 'react';
import { inject,observer } from 'mobx-react';
import { extendObservable, action } from 'mobx';
import Child from './count'
@inject('CountClass','Count')
@observer
class CountClass extends React.Component{
    constructor() {
        super();
        // this.newTitle = 11;
        // this.handleFun = () =>{
        //     console.log(this);
        //     return this.newTitle++;
        // }
        extendObservable(this,{
            newTitle:11,
            handleFun:action(() => {
                return this.newTitle++;
            })
        })
    }
    
    render(){
        console.log(this.props);
        return(
            <div>
                <h1>{ this.props.CountClass.val }</h1>
                <h2>{ this.props.Count.count }</h2>
                <button onClick={this.props.CountClass.remove}>-</button>
                <h1>{this.newTitle}</h1>
                <button onClick={this.handleFun}>00000</button>
                <Child />
            </div>
        )
    }
}
export default CountClass;