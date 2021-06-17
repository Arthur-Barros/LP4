import React, { Component } from "react"
import axios from "axios"

import PageHeader from "../template/pageHeader"
import TodoForm from "../todo/todoForm"
import TodoList from "../todo/todoList"


const url_node_express = 'http://localhost:3001/api/todos'
const url_backend_python = 'http://127.0.0.1:5000/todos'

export default class Todo extends Component {

    constructor(props){
        super(props)

        this.state = {description: "", list:[]}

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleAsDone = this.handleAsDone.bind(this)
        this.handleMarkAsPending= this.handleMarkAsPending.bind(this)
        this.handleMarkAsRemove= this.handleMarkAsRemove.bind(this)


        this.handleSearch();
        
    }
    

    handleAdd(){
        const description = this.state.description;
        axios.post(url_node_express, {description})
            .then(resp => this.handleSearch());
    }

    
    handleSearch(description = ""){
        const search = description ? `&description__regex=/${description}` : '';
        axios.get(`${url_node_express}?sort=-createdAt${search}`)
            .then(resp => this.setState({
                ...this.state,
                description,
                list: resp.data
            }))
    }

    handleAsDone(todo){
        axios.put(`${url_node_express}/${todo._id}`, {...todo, done: true})
            .then(resp => this.handleSearch());
    }

    handleMarkAsPending(todo){
        axios.put(`${url_node_express}/${todo._id}`, {...todo, done: false})
            .then(resp => this.handleSearch());
    }

    handleMarkAsRemove(todo){
        axios.delete(`${url_node_express}/${todo._id}`)
            .then(resp => this.handleSearch())
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }



    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoForm
                    description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleChange={this.handleChange}
                />
                <TodoList list={this.state.list}
                    handleAsDone={this.handleAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                    handleMarkAsRemove={this.handleMarkAsRemove}
                />
            </div>
            
        )
        
    }
   
}