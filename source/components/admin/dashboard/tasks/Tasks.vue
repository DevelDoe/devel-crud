<template lang="html">
    <div id="tasks" class="admin">
        <section class="todoapp">
            <header class="header">
                <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?" v-model="newTodo" @keyup.enter="addTodo">
            </header>
            <section class="main" v-show="todos.length" v-cloak>
                <ul class="todo-list">
                    <li v-for="(todo, i) in filteredTodos" class="todo" :key=" 'todo' + i" :class="{ completed: todo.completed, editing: todo === editedTodo }" >
                        <div class="view">
                            <label @dblclick="editTodo(todo)"> {{ todo.title }} </label>
                            <i class="fa fa-check" aria-hidden="true" :class="{ 'fa-check-done': todo.completed }" @click="todo.completed = !todo.completed, $api.update( 'todo', todo )"></i>
                            <i class="fa fa-times" aria-hidden="true" @click="removeTodo(todo)"></i>
                        </div>
                        <input class="edit" type="text" v-model="todo.title" v-todo-focus="todo == editedTodo" @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)" @keyup.esc="cancelEdit(todo)">
                    </li>
                </ul>
            </section>
            <footer class="footer" v-show="filteredTodos.length" v-cloak>
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
        loggedTodos: function() {
            return this.todos.filter( todo => {
                return todo.user_id === this.logged._id
            })
        },
        filteredTodos: function() {
            return filters[this.visibility]( this.loggedTodos )
        },
        remaining: function() {
            return filters.active( this.todos ).length
        },
        ...mapGetters([ 'todos', 'logged' ])
    },
    filters: {
        pluralize: function( n ) {
            return n === 1 ? 'item' : 'items'
        }
    },
    methods: {
        addTodo: function() {
            const value = this.newTodo && this.newTodo.trim()
            const todo = {
                title: value,
                completed: false,
                user_id: this.logged._id
            }
            const valid = this.$api.save( 'todo', todo )
            if( valid === undefined ) {
                this.newTodo = ''
            }
        },
        removeTodo: function( todo ) {
            this.$api.del( 'todo', todo )
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
            if ( this.beforeEditCache === todo.title ) return
            else  {
                const valid = this.$api.update( 'todo', todo )

                if ( !valid && valid !== undefined ) {
                    todo.title = this.beforeEditCache
                }
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
    },
    mounted() {
        this.$store.dispatch( 'setLocation', 'tasks' )
    },
    destroyed() {
        this.$store.dispatch( 'setLocation', '' )
    }
}
</script>

<style lang="scss">
.todoapp {
    .new-todo{
        padding: 1rem ;
        border: none;
        background: rgba(0, 0, 0, 0.04);
        width: 100%;
        color: #eee;
        font-size: 24px;
    }

    .main {
        position: relative;
        z-index: 2;
        border:none;
        .todo-list {
            margin: 0;
            padding: 0;
            list-style: none;
            .todo {
                padding-left: 0px;
                position: relative;
                font-size: 20px;
                border-bottom: none;
                .toggle {
                    text-align: center;
                    width: 40px;
                    height: auto;
                    margin: auto 0;
                    border: none;
                }
                .view {
                    label {
                        margin: .5rem;
                    }
                    .fa {
                        font-size: 17px;
                        color: #333;
                        &:hover {
                            color: #ccc;
                        }
                    }
                    .fa-check-done {
                        color: #eee;
                    }
                }
                .edit {
                    display: none;
                }
            }
            .completed {
                label {
                    text-decoration: line-through;
                    color: #777;
                }
            }
            .editing {
                .view {
                    display: none;
                }
                .edit {
                    display: block;
                    width: 506px;
                    padding: 8px 8px 8px 8px;
                    margin: 0 0 0 0px !important;
                    background: transparent;
                    color: #eee;
                    border:none;
                    letter-spacing: 1px;
                }
            }
        }
    }
    .footer {
        color: #777;
        padding: 10px 15px;
        height: 20px;
        text-align: center;
        background: transparent;
        .todo-count {
            float: left;
            text-align: left;
        }
        .filters {
            margin: 0;
            padding: 0;
            list-style: none;
            position: absolute;
            right: 0;
            left: 0;
            li {
                display: inline;
                color: inherit;
                margin: 3px;
                padding: 3px 7px;
                text-decoration: none;
                border: 1px solid transparent;
                border-radius: 3px;
                cursor: pointer;
            }
            .selected {
                border-color: #1ec2ff;
            }
        }
        button {
            float: right;
            position: relative;
            line-height: 20px;
            text-decoration: none;
            cursor: pointer;
            margin: 0;
            padding: 0;
            border: 0;
            background: none;
            font-size: 100%;
            vertical-align: baseline;
            font-family: inherit;
            font-weight: inherit;
            color: inherit;
            -webkit-appearance: none;
            appearance: none;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
    }
}
</style>
