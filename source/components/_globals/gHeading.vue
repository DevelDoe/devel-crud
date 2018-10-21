<template lang="html">
    <div class="row heading">
        <div class="col-12">
            <i class="fa fa-angle-left" aria-hidden="true" @click="$router.go(-1)"></i>
            <i class="fa fa-angle-right" aria-hidden="true" @click="$router.go(1)"></i>
            <h2 class="display-6">{{heading}}</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'gHeading',
    props: [ 'heading' ]
}
</script>

<style lang="css">
</style>
