<template>
  <div>
      <v-header :seller="seller"></v-header>
      <div class="tabs">
        <ul>
          <li class="tab-items"><router-link to="/goods">商品</router-link></li>
          <li class="tab-items"><router-link to="/ratings">评论</router-link></li>
          <li class="tab-items"><router-link to="/seller">商家</router-link></li>
        </ul>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  const isok = 0
  export default {
    data () {
      return {
        seller: {}
      }
    },
    created () {
      this.$http.get('/api/seller').then((response) => {
        response = response.body
        if (response.errno === isok) {
          this.seller = response.data
        }
      })
    },
    components: {
      'v-header': header
    }
  }
</script>

<style type="text/less">
.tabs ul {
  display: flex;
  width:100%;
  height: 1.7066rem;
  position: relative;
}
.tabs ul::after{
  content: "";
  display: block;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-bottom: solid 1px #dadde2;
}
@media screen and (-webkit-min-device-pixel-ratio:1.5),(min-device-pixel-ratio:1.5){
  .tabs ul::before{
    -webkit-transform: scaleY(.7);
    transform: scaleY(.7);
  }
}
@media screen and (-webkit-min-device-pixel-ratio:2),(min-device-pixel-ratio:2){
  .tabs ul::before{
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
  }
}
.tabs ul li{
  color: #333;
  flex: 1;
  text-align: center;
  font-family: "微软雅黑";
  line-height:1.7066rem;
}
.tabs ul li > a{
  display: block;
  font-size: 0.5973rem;
  color:#4d555d;
  font-weight: 400;
}
.tabs ul li > a.active{
  color: #f54d31;
}
</style>
