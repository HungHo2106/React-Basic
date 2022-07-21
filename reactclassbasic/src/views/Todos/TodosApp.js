import './ListTodo.scss'
import React from 'react';
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';

class TodosApp extends React.Component {
    state = {
        listTodos: [
            {id:'todo1', title:'Doing homework'},
            {id:'todo2', title:'Making videos'},
            {id:'todo3', title:'Fixing bugs'},
        ],
        editTodo : {}
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo],
        })

        toast.success("Wow so easy!")
    }

    handleDeleteTodo = (todo) => {
        let currentTodo = this.state.listTodos
        currentTodo = currentTodo.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: currentTodo,
        })
        toast.success('Delete Success!')
    }


    handleEditTodo = (todo) => {
        let {editTodo, listTodos}= this.state;
        let isObjEmpty = Object.keys(editTodo).length === 0;
        if(isObjEmpty === false && editTodo.id === todo.id) {
            
            let listTodosCopy = [...listTodos];
            let objIndex = listTodosCopy.findIndex((item) => item.id === todo.id);

            listTodosCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodos : listTodosCopy,
                editTodo : ''
            })
            toast.success('Update Success !!')
            return;
        }
        
        this.setState({
                editTodo: todo,
        })

    }

    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = {...this.state.editTodo};
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy,
        })

    }

    render() {
        let { listTodos, editTodo } = this.state;
        let isObjEmpty = Object.keys(editTodo).length === 0; //Value:true => Click edit btn => Value:false

        return(
            <>
                <p>
                Simple Todos App with React.js
                </p>
                <div className='list-todo-container'>
                    <AddTodo addNewTodo = {this.addNewTodo} />
                    <div className='list-todo-content'>
                        {listTodos && listTodos.length > 0 && 
                            listTodos.map((item, index) => {
                                return(
                                    <div className='todo-child' key={item.id}>
                                    {isObjEmpty === true ? <span> {index + 1} - {item.title} </span>
                                    :
                                    <>
                                    {editTodo.id === item.id ? 
                                        <span>
                                            {index +1} - <input value = {editTodo.title} 
                                            onChange = {(event)=> this.handleOnChangeEditTodo(event)}/>
                                        </span>
                                        :
                                        <span>
                                            {index + 1} - {item.title}
                                        </span>
                                    }
                                    </>
                                }
                                    <button className='edit'
                                    onClick={()=>this.handleEditTodo(item)}>
                                        {isObjEmpty === false && editTodo.id === item.id ? "Save" : "Edit" }
                                    </button>
                                    <button className='delete' 
                                    onClick={() => this.handleDeleteTodo(item)}>Delete</button>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </>
        )
    }
}

export default TodosApp;