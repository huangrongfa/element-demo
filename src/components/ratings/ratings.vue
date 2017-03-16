<template>
  <div class="ratings_warp" ref="ratingsWrapper">
      <div class="rating_container">
        <div class="rating_box">
            <div class="reating_view_l">
              <h2>{{seller.score}}</h2>
              <div class="title">综合评分</div>
              <div class="rank">高于周边商家{{seller.rankRate}}</div>
            </div>
            <div class="reating_view_r">
              <ul>
                <li>
                  <span>服务态度：</span>
                  <star :size="24" :score="seller.serviceScore"></star>
                  <span>{{seller.serviceScore}}</span>
                </li>
                <li>
                  <span>商品评分：</span>
                  <star :size="24" :score="seller.foodScore"></star>
                  <span>{{seller.foodScore}}</span></li>
                <li>
                  <span>送达时间：</span>
                  <span style="color:#a4a9ae">{{seller.deliveryTime}}</span>
                </li>
              </ul>
            </div>
        </div>
        <p  style="height:20px;background:#eee; margin-top:10px;"></p>
        <div class="selectContent">
        <ratingselect :select-type="selectType" :only-contaier="onlyContent" :ratings="ratings"></ratingselect>
        <div class="info_items">
            <ul>
              <li v-for="rating in ratings">
                <div class="avatar"><img :src="rating.avatar" alt="" class="img_size"></div>
                <div class="content">
                  <h2 class="name">{{rating.username}}</h2>
                  <div class="star_waper">
                    <star :size="24" :score="seller.serviceScore"></star>
                    <span class="" v-show="rating.deliveryTime"></span>
                    <p>{{rating.text}}</p>
                  </div>
                </div>
              </li>
            </ul>
        </div>
    </div>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import star from '../star/star.vue'
import ratingselect from 'components/ratingselect/ratingselect'
const all = 2
const ok = 0
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      ratings: [],
      selectType: all,
      onlyContent: true
    }
  },
  created () {
    this.$http.get('/api/ratings').then((response) => {
      response = response.body

      if (response.error === ok) {
        this.ratings = response.data
        this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.ratingsWrapper, {
            click: true
          })
        })
      }
    })
  },
  components: {
    star,
    ratingselect
  }
}
</script>

<style>
body{ position: static; }
.ratings_warp{position: absolute;top:202px;left: 0;bottom: 0;width: 100%;overflow: hidden;z-index: 2}
.rating_container{/*padding: 0 15px; */ padding-bottom: 0.768rem; margin-top: 0.768rem;}
.rating_box{ display: flex; /*box-shadow: 0 20px 0 #f3f5f7;*/}
.reating_view_l{flex:0 0 137px;width: 137px;border-right:solid 1px rgba(7,17,27,.3);text-align: center;font-family: "微软雅黑";}
.reating_view_r{flex:1;padding-left: 24px;}
.reating_view_l h2{font-size: 1.024rem; color: #ff9900; margin-bottom: 12px; margin-top: 0.768rem;}
.reating_view_l .title{font-size: 0.512rem; font-weight: 700; margin-bottom: 16px;}
.reating_view_l .rank{ font-size:0.4266rem;color: #a4a9ae }
.reating_view_r ul{ margin-top: 0.32rem; }
.reating_view_r ul li{ margin-bottom: 16px; font-size: 0.512rem; color: #07111b;font-family: "微软雅黑"; }
.reating_view_r ul li > span {vertical-align:super; }
.reating_view_r ul li span:last-child{margin-left: 6px;}
.reating_view_r .star{ margin-bottom: 0; display: inline-block; }
.reating_view_r .star .star_item{ margin-left: 0; width: 24px; height: 24px; }

.info_items ul{ overflow: hidden; }
.info_items li{ border-bottom: solid 1px #eee; padding-bottom: 10px; padding-top: 10px; }
.info_items li:first-child{ margin-top: 18px;  padding-bottom: 10px; padding-top: 0; }
.selectContent{ margin-top: 1.4506rem; margin-left: 0.32rem;margin-right: 0.32rem;}
.img_size{ width: 30px; height: 30px; }
.avatar{ float: left; width: 30px; height: 30px;}
.avatar .img_size{ width: 30px; height: 30px; }
.content{ overflow: hidden; margin-left: 55px; }
.content .name{ font-size: 20px; }
.rating_left{ width: 100px; height: 100px; float: left; }
.rating_right{ overflow: hidden; margin-left: 30px; }
</style>