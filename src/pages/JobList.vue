<template>
  <div>
    <div class="title"><h1>Find Job</h1> 
      <input class="search-input" type="text" v-model="searchKey" v-on:input="search" placeholder="Search by any keyword"/>
    </div>

    <div class="row list-row">
      <card v-bind:item="item" v-for="item in filteredList" class="m-2 col-3" :key="item.jobId"></card>
      <span v-if="filteredList.length === 0">0 jobs found. Please make another search</span>
    </div>
  </div>
</template>

<script>
import JobResource from '@/resource/resource'
import Card from '@/components/Card'

export default {
  name: 'joblist',
  components:{ Card },
  data(){
      return {
          filteredList: [],
          searchKey: null
      }
    },
  methods:{
    search(){
      const resource = new JobResource(); // Service creation
      this.filteredList = resource.findByKey(this.searchKey, this.list);
    }
  },
 
 created(){
   const resource = new JobResource();
   this.list = resource.getList();
   this.filteredList = this.list;
 }
 
}
</script>


<style lang="scss">

  .list-row {
    justify-content: center;
  }

  .title {
    padding: 4rem;
    
    background-color: #0AA;  
    h1{
      text-transform: uppercase;
    text-shadow: 1px 1px black;
    margin-bottom: 3rem;     
    color: white;
    font-family: monospace;
    }
    
    .search-input {
    padding: .5rem 2rem;
    font-size: 1.2rem;
    width: 30rem;
    box-shadow: 1px 4px 11px 0px rgba(0,0,0,.16);
    border: none;
    margin-bottom:2rem;
   }
  }


</style>
