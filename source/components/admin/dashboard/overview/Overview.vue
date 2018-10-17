<template lang="html">
    <div id="dashboard" class="admin">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <h2 class="display-6">Dashboards</h2>
                </div>
            </div>
            <div class="row padding">
                <div class="col-12">
                    <div class="paper">
                        <h3>Order History</h3>
                        <canvas ref="orderHistoryCanvas" width="400" height="100" ></canvas>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="paper">
                        <h3>Todo</h3>
                        <ul class="todo-list">
                            <li v-for="(todo, index) in filterTodos" class="todo" :key=" 'todo' + index"  >
                                {{ todo.title }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="paper">
                        <h3>Countries</h3>
                        <p>Proper HTML5 structuring and scemantics to indicate clearly what role is played by the content those tags contain. HTML tags are (mostly) used to format content,these tags tell the browser how to display the content on the page.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'dashboard',
    computed: {
        ...mapGetters([ 'todos' ]),
        filterTodos() {
            return this.todos.filter( todo => { return todo.completed === false  })
        }
    },
    mounted() {
        this.$store.dispatch( 'setLocation', 'overview' )
        var chart = new Chart(this.$refs.orderHistoryCanvas, {
            type: 'line',
            data: {
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                datasets: [{
                    label: '# orders',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: 'RGBA(30, 194, 255, 1)',
                    borderColor: 'RGBA(161, 223, 247, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        })
    },
    destroyed() {
        this.$store.dispatch( 'setLocation', '' )
    }
}
</script>

<style lang="css">
</style>
