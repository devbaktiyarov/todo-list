import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './app-header';
import SearchPanel from './search-panel';
import TodoList from './todo-list';
import ItemStatusFilter from './item-status-filter';

import './app.css';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      todoData: [
        { id: 1, label: 'Create add task functionality ', important: true },
    ]};

    this.deleteItem = (id) => {
      this.setState(({ todoData }) => {
        const delId = todoData.findIndex((el) => el.id === id);

        const newArray = [
          ...todoData.slice(0, delId),
          ...todoData.slice(delId + 1)
        ];
  
        return {
          todoData: newArray
        }; 
      });
    };
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={0} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList todos={this.state.todoData} onDeleted={ this.deleteItem } />
      </div>
    );
  }
}