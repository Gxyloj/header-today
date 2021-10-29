<template>
  <div>
    <header-warp></header-warp>
    <nav-warp @indexChange="indexChange"></nav-warp>
    <list-warp :contentList="contentList.list[currentIndex]"></list-warp>
  </div>
</template>

<script>
import headerWarp from "../../components/headerWarp";
import navWarp from "../../components/navWarp";
import listWarp from "../../components/listWarp";
import footerWarp from "../../components/footerWarp";

export default {
  name: "Home",
  data(){
    return{
      contentList:{
        list:[{
          title:'focus',
          msg:'关注页面'
        },
          {
            title:'recommend',
            msg:'推荐页面'
          },
          {
            title:'hotlist',
            msg:'热榜页面'
          },
          {
            title:'antiepidemic',
            msg:'抗疫页面'
          },
          {
            title:'video',
            msg:'视频页面'
          },
          {
            title:'freenovel',
            msg:'免费小说'
          },
        ]
      },
      currentIndex:0
    }
  },
  components:{headerWarp, navWarp, listWarp, footerWarp},
  methods:{
    indexChange(index){
      // console.log(index.name);
      this.currentIndex = index.name
    }
  }
}
</script>

<style scoped>
.search{
  padding: 0;
}
</style>
