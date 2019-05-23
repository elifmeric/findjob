<template>
<div class="container">
<h1>404 Not Found</h1>
<button class="button" v-on:click="goSearchPage">Go Home</button>

</div>

</template>

<script>

export default {
  name: "notfound",
  methods:{
    goSearchPage(){
        this.$router.push({ name: 'joblist'});
    }
  }
}
</script>