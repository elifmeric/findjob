<template>
  
  <div>
    <h1>Find Job</h1>
    <input type="text" v-model="searchKey"/><button v-on:click="search"></button>
    <div class="row">
      <div v-for="item in filteredList" class="card col-4" :key="item.jobId">
        <div class="card-body" v-on:click="goDetail(item.jobId)">
          <img v-bind:src="item.imageUrl"/>
{{item.companyName}}
{{item.positionName}}
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import JobResource from '@/resource/resource'

export default {
  name: 'joblist',
  data(){
      return {
          filteredList: [],
          searchKey: null
      }
    },
    methods:{
      search(){
        const resource = new JobResource();
        this.filteredList = resource.findByKey(this.searchKey, this.list);
      },

      goDetail(jobId){
        this.$router.push({ name: 'jobdetail', query: { id: jobId } });
      }
    },
 created(){
   const resource = new JobResource();
   this.list = resource.getList();
   this.filteredList = this.list;
 }
 
}
</script>
