import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getProperStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '5px',
            margin: '5px',
            borderBottom: '0.5px solid black',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getProperStyle()}> 
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{' '}
                { title }</p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}



export default TodoItem
