import React from 'react';
import ToDoItem from './TodoItem';
import PropTypes from 'prop-types';

class ToDos extends React.Component {

    render(){
        return this.props.todos.map((result) => (
            <ToDoItem key={result.id} todo={result} markComplete={this.props.markComplete}/>
        ));
    }
}

ToDos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default ToDos;
