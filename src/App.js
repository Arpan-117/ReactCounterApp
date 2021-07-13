import React, { Component } from 'react';
import Counter from './components/counter/Counter'
import FourthComponent, { FifthComponent } from './components/learning-examples/NewComponents'
import SixthComponent from './components/learning-examples/AnotherComponent'
import SeventhComponent from './components/learning-examples/AnotherComponent2'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}
}

class LearningComponents extends Component {
  render() {
  return (
    <div className="Learning Components">
      My First React App
      <FirstComponent> </FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      <FourthComponent></FourthComponent>
      <FifthComponent></FifthComponent>
      <SixthComponent></SixthComponent>
      <SeventhComponent></SeventhComponent>
    </div>
  );
}
}

//class Component
class FirstComponent extends Component {
  render() {
    return (
    <div className="First Component">
      This is the 1st custom made class Component
      </div>
    );
  }
}

//Class Component
class SecondComponent extends Component {
  render() {
    return (
      <div className="Second Component">
        This is a custom made class Component
        </div>
    );
  }
}

//Function Component
function ThirdComponent() {
  return(
    <div className="Third Component">
      This is a custom made function Component
      </div>
  );
}
export default App;
