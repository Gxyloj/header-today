<template>
  <div>
    <header-warp></header-warp>
    <nav-warp></nav-warp>
    <list-warp></list-warp>
    <footer-warp></footer-warp>
  </div>
</template>

<script>
import headerWarp from "../components/headerWarp";
import navWarp from "../components/navWarp";
import listWarp from "../components/listWarp";
import footerWarp from "../components/footerWarp";

export default {
  name: "mainIndex",
  components:{headerWarp, navWarp, listWarp, footerWarp}
}
</script>

<style scoped>
 .search{
   padding: 0;
 }
</style>
