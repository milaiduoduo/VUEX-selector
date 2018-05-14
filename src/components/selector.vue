<template>
  <div>
    <selectinput :list-show.sync="showFlag"></selectinput>
    <list :listData="listData" v-show="showFlag"></list>
  </div>
</template>
<script type='text/ecmascript-6'>
  import selectinput from '@/components/selectInput';
  import list from '@/components/list';
  export default{
    components: {selectinput, list},
    computed: {
      listData(){
        return this.$store.state.list;
      }
    },
    data(){
      return {
        showFlag: false
      }
    },
    created(){
      // 采用提交action的方式获取http异步数据
      this.$store.dispatch('getListAction');
    }
  }
</script>
<style lang='scss' rel="stylesheet/scss">

</style>
