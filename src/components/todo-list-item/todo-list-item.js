import React, { Component }from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

  render() {

    const { label, done, important , onToggleImportant, onToggleDone }  = this.props;
 

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
          onClick={ onToggleDone }>
          {label}
        </span>
        <span>
          <button type="button"
                  className="btn btn-outline-success btn-sm " onClick={ onToggleImportant}>
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
