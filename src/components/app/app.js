import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import AddItem from '../add-item/add-item';

import './app.css';


export default class App extends Component {
    
    genId = 0;

    state = {
      todoData: []
    }

    deleteItem = (id) => {
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
 
    createTodoItem(label) {
      return {
        id: this.genId++,
        label,
        important: false,
        done: false
      }
    } 

    addItem = (s) => {
      const newItem = this.createTodoItem(s);

      this.setState(({ todoData }) => {
        const newArr = [
          ...todoData,
          newItem
        ];
        return {
          todoData: newArr
        }
      });
    };


    toggleProperty(arr, id, propName) {
      const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};
        const newArray = [
          ...arr.slice(0, idx), newItem,
          ...arr.slice(idx + 1)
        ];
        return newArray

    }

    onToggleImportant = (id) => {
      this.setState(({ todoData }) => {
        return {
          todoData: this.toggleProperty(todoData, id, 'important')
        };
    });   
    }

    onToggleDone = (id) => {
      this.setState(({ todoData }) => {
          return {
            todoData: this.toggleProperty(todoData, id, 'done')
          };
      });    
    }
  

  render() {
    const doneCount = this.state.todoData.filter((el) =>  el.done).length;
    const todoCount = this.state.todoData.length - doneCount;
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList todos={this.state.todoData} 
          onDeleted={ this.deleteItem } 
          onToggleImportant = {this.onToggleImportant} 
          onToggleDone = {this.onToggleDone}/>
        <AddItem onItemAdded = {this.addItem} />
      </div>
    );
  }
};