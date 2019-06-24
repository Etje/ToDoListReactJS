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
                { title }
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button></p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

const btnStyle = {
    background: '#FF0000',
    color: '#fff',
    border: 'none',
    padding: '0px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
    height: '25px',
    paddingBottom: '3px'
}



export default TodoItem
