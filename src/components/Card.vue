<template>
   <div class="card">
        <div class="card-body row" v-on:click="goDetail(item.jobId)">
          <img class="col-5" v-bind:src="item.imageUrl"/>
          <div class="details col-7">
            <span class="position-name">{{item.positionName}}</span>
          <span class="company-name">{{item.companyName}}</span>
          <span class="location">{{item.townName}}/{{item.cityName}}</span>
          </div>
        </div>
      </div></template>

<script>
export default {
  name: 'card',
  props: {
    item : null
  },
  methods:{
      goDetail(jobId){
        this.$router.push({ name: 'jobdetail', query: { id: jobId } });
      }
  }
}
</script>

<style lang="scss">
span{
  display: block;
}
.position-name{
font-weight: bolder;
}
.company-name{
font-size:.8rem;
}

.location{
  font-size: .7rem;
}
</style>
