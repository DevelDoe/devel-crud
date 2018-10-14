<template lang="html">
    <div id="todo" class="admin">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <h2 class="display-6">Todo</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <section class="todoapp">
                        <header class="header">
                            <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?" v-model="newTodo" @keyup.enter="addTodo">
                        </header>
                        <section class="main" v-show="todos.length" v-cloak>
                            <input class="toggle-all" type="checkbox" v-model="allDone">
                            <ul class="todo-list">
                                <li v-for="(todo, index) in filteredTodos" class="todo" :key=" 'todo' + index" :class="{ completed: todo.completed, editing: todo == editedTodo }" >
                                    <div class="view">
                                        <input class="toggle" type="checkbox" v-model="todo.completed">
                                        <label @dblclick="editTodo(todo)"> {{ todo.title }} </label>
                                        <i class="fa fa-times" aria-hidden="true" @click="removeTodo(todo._id)"></i>
                                    </div>
                                    <input class="edit" type="text" v-model="todo.title" v-todo-focus="todo == editedTodo" @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)" @keyup.esc="cancelEdit(todo)">
                                </li>
                            </ul>
                        </section>
                        <footer class="footer" v-show="todos.length" v-cloak>
                            <span class="todo-count"> <strong>{{ remaining }}</strong> {{ remaining | pluralize }} left</span>
                            <ul class="filters">
                                <li :class="{ selected: visibility == 'all' }" @click="visibility = 'all'">All</li>
                                <li :class="{ selected: visibility == 'active' }" @click="visibility = 'active'">Active</li>
                                <li :class="{ selected: visibility == 'completed' }" @click="visibility = 'completed'">Completed</li>
                            </ul>
                            <button class="clear-completed" @click="removeCompleted()" v-show="todos.length > remaining" v-cloak>Clear completed</button>
                        </footer>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

var filters = {
    all: function( todos ) {
        return todos
    },
    active: function( todos ) {
        return todos.filter( todo => {
            return !todo.completed
        })
    },
    completed: function ( todos ) {
        return todos.filter( todo => {
            return todo.completed
        })
    }
}

import { mapGetters } from 'vuex'

export default {
    name: 'todo',
    data() {
        return {
            newTodo: '',
            editedTodo: null,
            visibility: 'active'
        }
    },
    computed: {
        filteredTodos: function() {
            return filters[this.visibility]( this.todos )
        },
        remaining: function() {
            return filters.active( this.todos ).length
        },
        allDone: {
            get: function() {
                return this.remaining === 0
            },
            set: function( value ) {
                this.todos.forEach( todo => {
                    todo.completed = value
                })
            }
        },
        ...mapGetters([ 'todos' ])
    },
    filters: {
        pluralize: function( n ) {
            return n === 1 ? 'item' : 'items'
        }
    },
    methods: {
        addTodo: function() {
            const value = this.newTodo && this.newTodo.trim()
            if( !value ) return
            const todo = {
                title: value,
                completed: false
            }
            this.$api.save( 'todo', todo )
            this.newTodo = ''
        },
        removeTodo: function( id ) {
            this.$api.del( 'todo', id )
        },
        editTodo: function( todo ) {
            this.beforeEditCache = todo.title
            this.editedTodo = todo
        },
        doneEdit: function( todo ) {
            if( !this.editedTodo ) return
            this.editedTodo = null
            todo.title = todo.title.trim()
            if( !todo.title ) this.removeTodo( todo._id )
            else {
                this.$api.update( 'todo', todo )
            }
        },
        cancelEdit: function() {
            this.editedTodo = null,
            todo.title = this.beforeEditCache
        },
        removeCompleted: function() {
            this.todos = filters.active( this.todos )
        }
    },
    directives: {
        'todo-focus': function( el, binding ) {
            if( binding.value ) el.focus()
        }
    }
}
</script>

<style lang="css">
</style>
