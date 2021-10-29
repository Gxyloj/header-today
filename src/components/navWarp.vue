<template>
  <div>
    <van-tabs v-model:active="active"
              :border="true"
              title-active-color="#ff0000"
              @click-tab="tabsChange"
              swipeable>
      <van-tab v-for="index in navList"
               :title="index" >
<!--        {{ index }}-->
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "navWarp",
  data(){
    return{
      navList:['关注','推荐','热榜','抗疫','视频','免费小说','关注','推荐','热榜','抗疫','视频','免费小说'],
      // navList:[
      //   {
      //     path:'/focus',
      //     title:'关注'
      //   },
      //   {
      //     path:'/recommend',
      /*    title:'推荐'*/
      //   },
      //   {
      //     path:'/hotlist',
      //     title:'热榜'
      //   },
      //   {
      //     path:'/antiepidemic',
      //     title:'抗疫'
      //   },
      //   {
      //     path:'/navvideo'
      //   }
      // ]
    }
  },
  methods:{
    tabsChange(index){
      // console.log(index.name);
      this.$emit('indexChange',index)
    }
  }
}
</script>

<style scoped>

</style>
