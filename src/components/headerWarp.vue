<template>
  <div class="header">
    <van-row>
      <van-col span="20">
        <van-search
            shape="round"
            background="#ff0000">
        </van-search>
      </van-col>
      <van-col span="4">
        <van-button
            class="btn"
            round>
          +
          <span>发布</span>
        </van-button>
      </van-col>
    </van-row>

  </div>
</template>

<script>
export default {
  name: "headerWarp"
}
</script>

<style scoped>
.header{
  background: red;
}
.btn{
  position: relative;
}
.btn span{
  position: absolute;
  font-size: 0.8rem;
  color: #fff;
  display: block;
  width: 2rem;
  font-style: normal;
  left: -0.05rem;
  margin-top: 1px;
}
</style>
