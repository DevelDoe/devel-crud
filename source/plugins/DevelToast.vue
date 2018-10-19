<!-- <DevelToast :toast="toast"/> -->
<template lang="html">
    <transition name="slide-fade" :duration="{ enter: 500, leave: 800 }" >
    <section id="toast" v-if="toast">
        {{ toast }}
    </section>
    </transition>
</template>

<script>
export default {
    name: 'DevelToast',
    props: [ 'toast' ]
}
</script>

<style media="screen">
    #toast {
        position: fixed;
        bottom:0;
        right:0;
        z-index: 9999;
        background: #313640;
        color: #eee;
        padding: 1rem 2rem;
        border: 1px solid #333;
        margin: 1rem;
        border-radius: 5px;
    }
</style>
