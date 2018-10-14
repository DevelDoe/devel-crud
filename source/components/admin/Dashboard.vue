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
                        <h3>Products</h3>
                        <p>Proper HTML5 structuring and scemantics to indicate clearly what role is played by the content those tags contain. HTML tags are (mostly) used to format content,these tags tell the browser how to display the content on the page.</p>
                        <button type="button" class="btn btn-primary">ADD</button>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="paper">
                        <h3>TODO</h3>
                        <p>Proper HTML5 structuring and scemantics to indicate clearly what role is played by the content those tags contain. HTML tags are (mostly) used to format content,these tags tell the browser how to display the content on the page.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dashboard',
    mounted() {
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
    }
}
</script>

<style lang="css">
</style>
