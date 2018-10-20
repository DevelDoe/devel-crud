<template lang="html">
    <div class="admin" id="notes">

        <div class="container-fluid">
            <div class="row heading">
                <div class="col-12">
                    <i class="fa fa-angle-left" aria-hidden="true" @click="$router.go(-1)"></i>
                    <i class="fa fa-angle-right" aria-hidden="true" @click="$router.go(1)"></i>
                    <h2 class="display-6">Notes</h2>
                </div>
            </div>
            <gForm :schema="'user'" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'notes',
    mounted() {
        this.$store.dispatch( 'setLocation', 'notes' )
    },
    destroyed() {
        this.$store.dispatch( 'setLocation', '' )
    }
}
</script>

<style lang="css">
</style>
