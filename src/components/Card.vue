<template>
   <div class="card">
        <div class="card-body row" v-on:click="goDetail(item.jobId)">
          <div class="logo-duration col-5">
            <img class="logo" v-bind:src="item.imageUrl"/>
            <span class="duration">Open since {{item.durationDay}} days</span>
          </div>
          <div class="details col-7">
          <span class="position-name">{{item.positionName}}</span>
          <span class="company-name">{{item.companyName}}</span>
          <br>
          <span class="location">({{item.distance}})</span>
          <span class="location">{{item.townName}}/{{item.cityName}}</span>
          </div>
        </div>
      </div>
</template>

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

  .card {
    height: 11rem;
    cursor: pointer;

    // States
    &:hover {
      box-shadow: 1px 1px 8px rgba(0,0,0,.16);
    }

    span {
      display: block;
    } 

    .logo-duration{
      .logo{
        height: 6rem;
        width: 6rem;
      }

      .duration{
        font-size:.5rem;
      }
    }
    .position-name {
      font-weight: bolder;
      height: 3rem;
    }
    .company-name{
      font-size:.8rem;
    }

    .location{
      font-size: .7rem;
    }
}
</style>
