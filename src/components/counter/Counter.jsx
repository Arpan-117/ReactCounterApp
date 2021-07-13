import React, { Component } from 'react';
import './Counter.css'

class Counter extends Component {

    constructor() {
        super() //must be used in order to use 'this.'
        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this); //to use 'this.' of the constructor, in another method, we bind that method to the class this way
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {
        return (
          <div className="counter">
            <CounterButton by={+1} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
            <CounterButton by={+5} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
            <CounterButton by={+10} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
            <span className="count">{this.state.counter}</span>
            <div> <button className="reset" onClick={this.reset}> Reset </button> </div>
          </div>
        );
      }

      //without using Arrow function
      /* increment(by) {
        //console.log(`increment from child - ${by}`);   to display string with variable value in console
        this.setState({
            counter: this.state.counter + by
        })
    } */

    //This is done with arrow function for simpler understanding of state
    increment(by) {
        this.setState(
            (prevState) => {
                return {counter : prevState.counter + by}
            }
        )
    }

    decrement(by) {
        this.setState(
            (prevState) => {
                return {counter : prevState.counter - by}
            }
        )
    }

    reset() {
        this.setState( {counter : 0})
    }

    /* resets() {
        this.setState(
            (prevState) => {
                return {counter : prevState.counter - prevState.counter}
            }
        )
    } */

}

//use as class Component
class CounterButton extends Component {

    //Define the initial state in the constructor
    //state - counter = 0
    constructor() {
        super() //must be used in order to use 'this.'
        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this); //to use 'this.' of the constructor, in another method, we bind that method to the class this way
        this.decrement = this.decrement.bind(this);
    }

    // Render as Arrow Function
    //render = () => {
        //return(
            //<div className="counterButton">
                //<button onClick={this.increment}> +{this.props.by} </button>
                //<span className="count">{this.state.counter}</span>
            //</div>
        //)
    //}

    render() {
        return(
            <div className="counterButton">
                <button onClick={this.increment}> {this.props.by} </button>
                <button onClick={this.decrement}> - {this.props.by} </button>
                {/*<span className="count">{this.state.counter}</span>*/}
            </div>
        )
    }

    //Update the value of counter
    //increment = () => {
        // console.log('increment');
        //this.setState ({
            //counter : this.state.counter+this.props.by
        //});
    //}

    increment() {
        this.setState({
            counter: this.state.counter + this.props.by
        })

        this.props.incrementMethod(this.props.by);
    }

    decrement() {
        this.setState({
            counter: this.state.counter - this.props.by
        })

        this.props.decrementMethod(this.props.by);
    }

}

//this is as a function Component
/* function Counter() {
    return (
        <div className="counter">
            <button onClick={increment}>+1</button>
            <span className="count">0</span>
        </div>
    )
}
*/

//this is how Global Function
/* function increment() {
    console.log('increment');
}
*/

//not really needed, can be done from Counter class
/* class ResetButton extends Component {

    constructor() {
        super() //must be used in order to use 'this.'
        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this); //to use 'this.' of the constructor, in another method, we bind that method to the class this way
    }

    render() {
        return(
            <div className="resetButton">
                <button onClick={this.increment}> Reset </button>
                {/*<span className="count">{this.state.counter}</span>}
            </div>
        )
    }

    increment() {
        this.setState({
            counter: this.state.counter - this.props.by
        })
        this.props.incrementMethod(-this.props.by);
    }

} */

export default Counter