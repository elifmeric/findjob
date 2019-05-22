<template>
 <div class="">
   <button class="button" v-on:click="goSearchPage">Turn Back</button>
   <div v-if="job" class="detail-card card m-10">
     <div class="row m-1">
        <img v-bind:src="job.imageUrl" class="col-4"/>   
 <span class="col-8 company-position-info company"> {{job.companyName}}</span>
 <hr>
  <span class="col-12 company-position-info position">Position: {{job.positionName}}</span>

 <div class="col-8"></div>
 <div class="col-4">
   <small class="city-code-info col-12"> {{job.cityName}} - {{job.countryCode}}</small>

   <small class="duration">Open for {{job.durationDay}} days
    {{job.durationDayText}}</small>
    </div>
    <b>Description:</b>
    <span>
    {{job.description}}
    </span>
    <div class="col-12">
      <span class="address">{{job.address}} - {{job.postalCode}}</span>
      <span class="phone">
           Phone:  {{getPhoneNumber(job.contactPhone)}} 
      </span>
      
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
    console.log(this.job);
  }

 
}
</script>

<style lang="scss">

button{
  float:left;
  border:none;
  box-shadow: 1px 0px 5px rgba(0,0,0,.16)
}
.detail-card{
  height:90vh;
}
.duration{
  display: flex;
    justify-content: flex-end;
}
.address, .phone{
  display: flex;
}
.city-code-info{
      margin-top: 2rem;
    display: flex;
    justify-content: flex-end;
}
.company-position-info{
    font-size: 2rem;
    vertical-align: middle;
    display: flex;
    justify-content: center;
    align-items: center;
    &.company{
          justify-content: flex-end;
    }

    &.position {
      font-size:1.5rem;
      justify-content: unset;
    align-items: unset;
    margin-top: 2rem;
    }
}
</style>

