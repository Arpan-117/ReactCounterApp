import React, { Component } from 'react';

//default export
export default class FourthComponent extends Component {
    render() {
        return (
            <div className="Fourth Component">
                This fourth Component is in a separate JSX file named NewComponents.jsx and is a default export class
            </div>
        );
    }
}

//not a default export
export class FifthComponent extends Component {
    render() {
        return (
            <div className="Fifth Component">
                This fifth Component is in NewComponents.jsx and is not a default export class
            </div>
        );
    }
}