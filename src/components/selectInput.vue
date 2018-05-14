<template>
  <div>
    <input type="text" :value="title" @click="listShowHandle">
    <input type="button" value="GO">
  </div>
</template>
<script type='text/ecmascript-6'>
  export default{
    props: ['listShow'],
    computed: {
      title(){
        return this.$store.state.title;
      },
      listShowFlag(){
        return this.listShow
      }
    },
    methods: {
      listShowHandle(){
        this.$emit('update:listShow', !this.listShowFlag);
      }
    }
  }
</script>
<style lang='scss' rel="stylesheet/scss">

</style>
