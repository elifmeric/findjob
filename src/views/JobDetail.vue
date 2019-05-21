<template>
 <div class="container">
   <button class="btn" v-on:click="goSearchPage">Turn Back</button>
   <div v-if="job" class="row">
     <div class="col-4">
<img v-bind:src="job.imageUrl"/>   
 </div>
 <div class="col-8">
   {{job.companyName}}
{{job.positionName}} 
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
 goSearchPage(){
        this.$router.push({ name: 'joblist'});

  }
  },
  created(){
    const resource = new JobResource()
    console.log(this.$route.params.id)
    this.job = resource.getDetail()

  }

 
}
</script>