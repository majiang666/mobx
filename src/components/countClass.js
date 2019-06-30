import React from 'react';
import { inject,observer } from 'mobx-react';

@inject('CountClass','Count')
@observer
class CountClass extends React.Component{
    render(){
        return(
            <div>
                <h1>{ this.props.CountClass.val }</h1>
                <h2>{ this.props.Count.count }</h2>
                <button onClick={this.props.CountClass.remove}>-</button>
            </div>
        )
    }
}
export default CountClass;