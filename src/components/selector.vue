<template>
  <div>
    <selectinput :list-show.sync="showFlag"></selectinput>
    <list v-show="showFlag"></list>
  </div>
</template>
<script type='text/ecmascript-6'>
  import selectinput from '@/components/selectInput';
  import list from '@/components/list';
  export default{
    components: {selectinput, list},
    data(){
      return {
        showFlag: false
      }
    }
  }
</script>
<style lang='scss' rel="stylesheet/scss">

</style>
