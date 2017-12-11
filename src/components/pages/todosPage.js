import React, { Component } from 'react';

let url = 'http://jsonplaceholder.typicode.com';        
let urlTodos = url + '/todos/';

class TodosPage extends Component {

    constructor() {
        super();

        this.state = {
            todos: []
        };
    }

    componentDidMount() {
        
        function handleErrors(results) {
            if (!results.ok) {
                throw Error(results.statusText);
            }
            return results;
        }        

        fetch(urlTodos)
        .then(handleErrors)
        .then(results => {
            return results.json();
        }).then(data => {  
            let todos = data.map((val) => {   
                return (
                    <li key={val.id}>{val.id}. {val.title}</li>
                )
            });
            this.setState({todos: todos});
        }).catch(error => alert(error) );
    }



    
    render() {

        console.log(urlTodos);
        return(
            <div className="todos-list">
                <h4>This content I also get from API. It os the list of Todos:</h4>
                <ul>
                    {this.state.todos}
                </ul>
            </div>
        );
    }
}

export default TodosPage;