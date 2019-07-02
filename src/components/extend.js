import React,{ Component } from 'react';
import { observer,inject } from 'mobx-react';
import { extendObservable } from 'mobx';
class Test extends Component{
    constructor(){
        super();
        extendObservable(this,{
            obj:{
                age:31
            }
        })
    }
    render(){
        console.log(this.props);
        return (
            <div>
                { this.obj.age }
            </div>
        )
    }
}
export default inject('Test')(observer(Test));