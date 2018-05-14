<template>
  <div>
    <selectinput :list-show.sync="showFlag"></selectinput>
    <list :listData="listData" v-show="showFlag"></list>
  </div>
</template>
<script type='text/ecmascript-6'>
  import selectinput from '@/components/selectInput';
  import list from '@/components/list';
  let listData = [{
    title: 'es6'
  }, {
    title: 'css3'
  }, {
    title: 'html5'
  }, {
    title: 'vue'
  }, {
    title: 'node'
  }, {
    title: 'koa'
  }, {
    title: 'webpack'
  }];
  export default{
    components: {selectinput, list},
    data(){
      return {
        showFlag: false,
        listData: listData
      }
    }
  }
</script>
<style lang='scss' rel="stylesheet/scss">

</style>
