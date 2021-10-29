<template>
  <div id="tab-bar-item" @click="itemClick()" :class="{active:isActive}">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
  name: "TabbarItem",
  data(){
    return{
      isActive() {
        return false;
      }
    }
  },
  props:{
    path:String
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !==-1
    }
  }
}
</script>

<style scoped>
  #tab-bar-item{

    flex: 1;
    text-align: center;
    background-color: #eee;
    font-size: 14px;
  }

  .active{
    fill: #f00;
    color: #f00;
    -webkit-transition: color .7s;
  }
</style>
