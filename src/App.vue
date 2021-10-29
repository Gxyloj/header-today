<template>
  <div>
    <router-view></router-view>
    <footer-warp></footer-warp>
  </div>
</template>


<script>
import footerWarp from "./components/footerWarp";

export default {
  name:"App",
  components:{footerWarp, }
}
</script>
<style>
.van-button__text{
  font-size: 25px;
  color: red;
}
.van-button {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  padding: .55rem;
  width: 2rem;
  height: 2rem;
  display: flex;
  /*flex: 1;*/
  /*margin-top: .4rem;*/
  /*margin-left: 0.9rem;*/
}
.van-col--4{
  padding-top: .4rem;
}
</style>
