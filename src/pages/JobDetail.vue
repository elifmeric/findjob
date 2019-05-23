<template>
 <div>
  <button class="button" v-on:click="goSearchPage">Turn Back</button>
  <div v-if="job" class="detail-card card m-10">
     <div class="row m-1">
     <div class="row banner">
        <span class="col-10 company"> {{job.companyName}}</span>
        <img v-bind:src="job.imageUrl" class="col-2"/>   
  </div>

  <div class="job-title">
    <span class="col-8 position">Position: <b>{{job.positionName}}</b></span>
    <div class="col-4">
      <small class="city-code-info col-12"> {{job.cityName}} - {{job.countryCode}}</small>
      <small class="duration">Open for {{job.durationDay}} days {{job.durationDayText}}</small>
    </div>
  </div>

  <div class="description col-12">
    <b>Description:</b>
    <br>
    <span>{{job.description}}</span>
  </div>
  
   <div class="location col-12">
     <b>Address:</b>
    <div class="col-12">
      <span class="address">{{job.address}} - {{job.postalCode}}</span>
      <span class="phone">
           Phone:  {{getPhoneNumber(job.contactPhone)}} 
      </span>
    </div>
   </div>
   </div>
   </div>
 </div>
</template>
<script>

import JobResource from '@/resource/resource'

export default {
  name: "jobdetail",
  data(){
    return{
      job: null
    }
  },
  methods:{
    getPhoneNumber(phone){
      return phone.countryCallingCode + phone.areaCode + phone.number;
    },
    goSearchPage(){
      this.$router.push({ name: 'joblist'});
    }
  },
  created(){
    const resource = new JobResource()
    this.job = resource.getDetail(this.$route.query.id).result;
  }
}
</script>

<style lang="scss">

  button{
    float:left;
    border:none;
    box-shadow: 1px 0px 5px rgba(0,0,0,.16)
  }


  .detail-card {
    height:100%;

    .banner {
      margin:0;
      height: 9rem;
      display: flex;
      width: 100%;
      box-shadow: 1px 0px 8px rgba(0,0,0,.16);

    img {
      padding: 2rem;
    }

      .company{
        font-size: 1.75rem;
        vertical-align: middle;
        display: flex;
        justify-content: center;
        align-items: center;
        justify-content: flex-start;
      }
    }

    .job-title{
      display: flex;
      width: 100%;
      padding: 2rem;
      background: #0000000d;

      .city-code-info{
        display: flex;
        justify-content: flex-end;
      }
    }

    .description{
      text-align: left;
      padding: 2rem;
    }

    .position{
      vertical-align: middle;
      font-size:1.5rem;
      text-align: left;
    }

    .duration{
      display: flex;
      justify-content: flex-end;
    }

    .location{
      padding: 2rem;
      font-size: 1rem;
      background: #0000000d;
      text-align: left;
        .address, .phone{
        display: flex;
        }
    }
}
</style>

