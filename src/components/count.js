import React from 'react';
import { inject, observer } from 'mobx-react';
const Children = (props) => {
    console.log(props.Count.getCount);
    console.log("=======================");
    return(
        <div>
            <h1>count: {props.Count.count}</h1>
            <h2>{ props.Count.getCount }</h2>
            <button onClick={props.Count.add}>+</button>
        </div>
    )
}
export default inject("Count")(observer(Children));