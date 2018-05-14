<template>
  <ul>
    <li v-for="(item,index) in listData" :key="index" @click="changeItem(item.title)">{{item.title}}</li>
  </ul>
</template>
<script type='text/ecmascript-6'>
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
    data(){
      return {
        listData
      }
    },
    methods: {
      changeItem(title){
        this.$store.commit('changeListTitle', {title})
      }
    }
  }
</script>
<style lang='scss' rel="stylesheet/scss">
  ul {
    width: 171px;
    margin: 0px;
    padding: 0px;
    list-style: none;
    background: deepskyblue;
    color: #fff;
    cursor: pointer;
    li{
      &:hover{background: #0082AB;}
    }
  }
</style>
