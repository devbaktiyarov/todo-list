import React, { Component }from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

  constructor() {
    super();

    this.state = {
      done: false,
      important: false
    };

    this.onLabelClick = () => {
      this.setState(({ done }) => {
        return {
        done: !done
        };
      });
    };

    this.onImportantClick = () => {
      this.setState(({ important }) => {
        return {
          important: !important
        };
      });
    };
  }

  render() {

    const { label }  = this.props;
    const { done, important } = this.state;

    let classNames = "todo-list-item";

    if(done) {
      classNames += " done";
    }

    if(important) {
      classNames += " important";
    }

    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={ this.onLabelClick }>
          {label}
        </span>
        <span>
          <button type="button"
                  className="btn btn-outline-success btn-sm " onClick={ this.onImportantClick }>
            <i className="fa fa-exclamation" />
          </button>
  
          <button type="button"
                  className="btn btn-outline-danger btn-sm ">
            <i className="fa fa-trash-o" onClick={ this.props.onDeleted } />
        </button>
        </span>
      </span>
    );
  };
}
