import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    render() {      console.log("counters rendered");

        const {onReset, onDelete, onIncrement, counters} = this.props;

        return (
        <div>
            <button 
            onClick={ onReset }
            className="btn btn-primary btn-sm m-2">Reset</button>
            { counters.map( counter => 
                <Counter 
                         onDelete    = { onDelete    } 
                         onIncrement = { onIncrement }
                         key         = { counter.id  } 
                         counter     = { counter     }  
                         >
                    <h4>Counter #{counter.id}</h4>                   
                </Counter>
                    ) }
        </div>);
    } 
}
 
export default Counters;