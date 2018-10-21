<template lang="html">
    <div id="note" class="admin">
        <div class="container-fluid">
            <div class="container-fluid">
                <gHeading heading="Notes"/>

            </div>
            <div class="row">
                <div class="col-12">
                    <section class="todoapp">
                        <header class="header">
                            <input class="new-note" autofocus autocomplete="off" placeholder="Keep a note of this" v-model="newNote" @keyup.enter="addNote">
                        </header>
                        <section class="main" v-show="notes.length" v-cloak>
                            <ul class="todo-list">
                                <li v-for="(note, i) in loggedNotes" class="note todo" :key=" 'note' + i" :class="{ completed: note.completed, editing: note === editedNote }" >
                                    <div class="view">
                                        <label @dblclick="editNote(note)"> {{ note.title }} </label>
                                        <i class="fa fa-times" aria-hidden="true" @click="removeNote(note)"></i>
                                    </div>
                                    <input class="edit" type="text" v-model="note.title" v-todo-focus="note == editedNote" @blur="doneEdit(note)" @keyup.enter="doneEdit(note)" @keyup.esc="cancelEdit(note)">
                                </li>
                            </ul>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
    name: 'note',
    data() {
        return {
            newNote: '',
            editedNote: null,
            visibility: 'active'
        }
    },
    computed: {
        loggedNotes: function() {
            return this.notes.filter( note => {
                return note.user_id === this.logged._id
            })
        },
        ...mapGetters([ 'notes', 'logged' ])
    },
    methods: {
        addNote: function() {
            const value = this.newNote && this.newNote.trim()
            const note = {
                title: value,
                user_id: this.logged._id
            }
            const valid = this.$api.save( 'note', note )
            if( valid === undefined ) {
                this.newNote = ''
            }
        },
        removeNote: function( note ) {
            this.$api.del( 'note', note )
        },
        editNote: function( note ) {
            this.beforeEditCache = note.title
            this.editedNote = note
        },
        doneEdit: function( note ) {
            if( !this.editedNote ) return
            this.editedNote = null

            note.title = note.title.trim()
            if( !note.title ) this.removeNote( note._id )
            if ( this.beforeEditCache === note.title ) return
            else  {
                const valid = this.$api.update( 'note', note )

                if ( !valid && valid !== undefined ) {
                    note.title = this.beforeEditCache
                }
            }
        },
        cancelEdit: function() {
            this.editedNote = null,
            note.title = this.beforeEditCache
        },
        removeCompleted: function() {
            this.notes = filters.active( this.notes )
        }
    },
    directives: {
        'todo-focus': function( el, binding ) {
            if( binding.value ) el.focus()
        }
    },
    mounted() {
        this.$store.dispatch( 'setLocation', 'notes' )
    },
    destroyed() {
        this.$store.dispatch( 'setLocation', '' )
    }
}
</script>

<style lang="scss">
#note {
    .todoapp {
        .new-note{
            padding: 1rem ;
            border: none;
            background: rgba(0, 0, 0, 0.04);
            width: 100%;
            color: #eee;
            font-size: 24px;
        }
        .main {
            border: none;
            .todo-list {
                .editing {
                    .edit {
                        display: block;
                        width: 506px;
                        padding: 8px 8px;
                        margin: 0 0 0 0px !important;
                        background: transparent;
                        color: #eee;
                        border:none;
                        letter-spacing: 1px;
                    }
                }
            }

        }
        .note {
            padding-left: 10px;
            position: relative;
            font-size: 20px;
            border-bottom: none;
        }
        .fa {
            font-size: 17px;
        }
    }
}

</style>
