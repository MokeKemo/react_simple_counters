import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
  state = { 
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
  ]
   };

   constructor(props) {
     super(props);
     console.log('App-Construct');
   }

   componentDidMount() { //this method is perfect for ajax calls to fetch data from server side! :)
                         //for example - we get some data from ajax call, let's say array, than we can use this.setState(array) to update data
      console.log("app mounted");
   }

   handleDelete = (counterId) => {
    //console.log("Delete Event", counterId);
    const counters = this.state.counters.filter( c => c.id !== counterId);
    this.setState({ counters });
};

  handleReset = () => {
        const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
        this.setState({ counters });
};

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    console.log(this.state.counters[index]);
};

  render() { console.log("app rendered");
    return ( 
    <React.Fragment>
      <NavBar totalCounters = {this.state.counters.filter( c => c.value > 0).length} />
      <main className="container">
        <Counters 
                  counters    = { this.state.counters  }
                  onReset     = { this.handleReset     }
                  onDelete    = { this.handleDelete    } 
                  onIncrement = { this.handleIncrement }
                  />
        </main>
        </React.Fragment> );
  }
}
 
export default App;

