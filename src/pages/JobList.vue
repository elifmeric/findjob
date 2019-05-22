<template>
  <div>
    <h1 class="title">Find Job</h1>
    <input class="search-input" type="text" v-model="searchKey" @change="search" placeholder="Search by any keyword"/>
    <div class="row list-row">
      <card v-bind:item="item" v-for="item in filteredList" class="m-2 col-3" :key="item.jobId"></card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import JobResource from '@/resource/resource'
import Card from '@/components/Card'

export default {
  name: 'joblist',
  components:{
    Card
  },
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


    .list-row {justify-content: center;}

   .title{
    padding: 4rem;
    text-transform: uppercase;
    text-shadow: 1px 1px black;
    color: #5e80ab;
   }

   .search-input{
     padding: .5rem 2rem;
    font-size: 1.2rem;
    width: 30rem;
    box-shadow: 1px 4px 11px 0px rgba(0,0,0,.16);
    border: none;
    margin-bottom:2rem;
   }
</style>
