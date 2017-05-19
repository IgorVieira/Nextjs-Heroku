
import React, { Component } from 'react'
import TodoList from '../components/TodoList'

export default class extends  Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    this.state = {
      items: [],
       text: ''
    };
  }

  render() {
    return (
      <div>
        <div id="app">
          <h3 class>To do List with Next.js!</h3>
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} value={this.state.text} />
            <button className="btn">{'Add #' + (this.state.items.length + 1)}</button>
        </form>
        </div>




        <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Raleway');
        #app {
          font-family: 'Raleway', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #2c3e50;
          margin-top: 60px;
        }
        .btn{
          color:#ccc;
          background:#000;
          border-radius:2px;
          width: 4rem;
          height: 2em;
          padding:1.3em, 1.3rem, 1.3em;
          cursor:pointer;
        }

    `}</style>




      </div>
    );
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }



}

