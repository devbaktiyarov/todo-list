import React, { Component } from 'react';

import './add-item.css'

export default class AddItem extends Component {
    render() {
        return(
            <div className="add-item"> 
                <button type="button" className="btn btn-outline-primary" 
                onClick={() => this.props.onItemAdded('Todo')}>Add item</button>
            </div>
        );
    }
}