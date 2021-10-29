<template>
  <Tabbar>
    <TabbarItem path="/home">
      <template v-slot:item-icon>
        <icon-svg icon-class="shouye"></icon-svg>
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </TabbarItem>

    <TabbarItem path="/video">
      <template v-slot:item-icon>
        <icon-svg icon-class="shipin"></icon-svg>
      </template>
      <template v-slot:item-text>
        <div>视频</div>
      </template>
    </TabbarItem>

    <TabbarItem path="/theater">
      <template v-slot:item-icon>
        <icon-svg icon-class="fangyingtingshebei"></icon-svg>
      </template>
      <template v-slot:item-text>
        <div>放映厅</div>
      </template>
    </TabbarItem>

    <TabbarItem path="/user">
      <template v-slot:item-icon>
        <icon-svg icon-class="yonghu"></icon-svg>
      </template>
      <template v-slot:item-text>
        <div>用户</div>
      </template>
    </TabbarItem>
  </Tabbar>
</template>

<script>

import '@/assets/img/icon'
import Tabbar from "../tabbar/Tabbar";
import TabbarItem from "../tabbar/TabbarItem";
import iconSvg from "../iconSvg";


export default {
  name: "MainTabBar",
  components:{Tabbar,TabbarItem,iconSvg}
}
</script>

<style scoped>

</style>
