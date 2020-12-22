import React, { Component } from 'react';

class Counter extends Component {
    
    componentDidUpdate(prevProps, prevState) {
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
        if(prevProps.counter.value !== this.props.counter.value) {
            //if previous state compared to a new state is different, we can make data update - for example ajax call to fetch new data
        }
    }

    componentWillUnmount() {
        console.log("Counter - Unmount");
    }

    // state = {
    //     value: this.props.counter.value,  //local state property removed for achieving a SINGLE SOURCE OF TRUTH
    //     id: this.props.counter.id            SSOT is at counters.jsx (parent) file.
    // };

    //  constructor() {
    //      super();
    //      this.handleIncrement = this.handleIncrement.bind(this);
    //  }; data binding method - as an example for solving event handling

    // handleIncrement = e => { //this was updating 'state' instance, since we no longer have that, parent need to raise event and this
    //     console.log(e);      //will be done same as onDelete method - raising event from props and handling from parent - counterS.jsx
    //     //this.state.count += 1;
    //     this.setState({ value: this.state.value + 1  })
    //     // console.log(this.state.count);

    // };

    // doHandleIncrement = () => {          //this method is not desirable! it is better to use inline function, couse this is messy
    //     this.handleIncrement({ id: 1 }); 
    // }

    formatCount() {
        //console.log(this.state.value);
        return this.props.counter.value;
    }

    // formatId(){
    //     console.log(this.state.id); //needed not!
    //     return this.state.id;
    // }

    // renderTags() {
    //     if(this.state.tags.length === 0) return <p>There are no tags</p>; //example no more needed - state unused
    //     return this.state.tags.map( el => <li key={el}>{el}</li>);
    // }

    render() { console.log("counter rendered");
        
        let help = this.props.counter.value + 1;
        let colorElement = this.props.counter.value === 0 ? "badge badge-warning m-2" : "badge badge-primary m-2";
        return ( 
                
               <div>
                    {this.props.children}   
                    <span className={ colorElement }>{ this.formatCount() }</span>
                    <button onClick={ () => this.props.onIncrement( this.props.counter ) } className="btn btn-primary btn-sm m-10">Increment</button>
                    <button onClick={ () => this.props.onDelete( this.props.counter.id ) } className="btn btn-danger btn-sm m-2">Delete</button>
                </div>
            
            );
    }
    
}

export default Counter;