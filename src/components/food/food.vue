<template>
	<transition name="slideleft">
		<div v-show="isshow" class="food" ref="food">
			<div class="food_container">
				<div class="img_head">
					<img :src="food.image" alt="">
					<div class="black_to" @click="slideHide()"><em class="icon_arrow">&lt;</em></div>
				</div>
				<div class="foods_info">
					<p>{{food.name}}</p><p>月售{{food.sellCount}}份&nbsp;好评率{{food.rating}}%</p><p>￥{{food.price}}</p>
					<button type="button">加入购物车</button>
				</div>
				<!--  商品信息 -->
				<div class="foods_jieshao" v-show="food.info">
					<h2>商品信息</h2>
					<p>{{food.info}}</p>
				</div>
				<!-- 商品评价 -->
				<div class="rating">
					<h2>商品评价</h2>
					<ratingselect :select-type="selectType" :only-contaier="onlyContent" :dese="desc" :ratings="food.ratings">
					</ratingselect>
				</div>
				<!-- 评价列表 -->
				<div class="rating_warp">
					<ul v-show="food.ratings && food.ratings.length">
						<li v-for="rating in food.ratings" v-show="nedShow(rating.rataType,rating.text)">
							<div class="times">
								<span>{{rating.rateTime | setDate(times)}}</span>
								<div class="proseon"><span>{{rating.username}}</span><img :src="rating.avatar" alt="" width="12" height="12"></div>
							</div>
							<div class="list_text">{{rating.text}}</div>
						</li>
					</ul>
					<!-- <div class="no_rating" v-show="!food.ratings || food.ratings.length">暂无评价</div> -->
				</div>
			</div>
		</div>
	</transition>
</template>
<script>
import BScroll from 'better-scroll'
import ratingselect from 'components/ratingselect/ratingselect'
// import {setDate} from 'common/data.js'
// const positive = 0
// const negative = 1
const all = 2
export default {
  props: {
    food: {
      type: Object
    }
  },
  data () {
    return {
      isshow: false,
      selectType: all,
      onlyContent: true,
      desc: {
        all: '全部',
        positive: '满意',
        negative: '不满意'
      }
    }
  },
  components: {
    ratingselect
  },
 //  filter: {
 //  setDate (time) {
 // let date = new Date(time)
// return setDate(date,'yyyy-mm-dd hh:mm')

 //    }
 //  },
  methods: {
    slideShow () {
      this.isshow = true
      this.selectType = all
      this.onlyContent = true
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.food, {
            click: true
          })
        } else {
          this.scroll.refresf()
        }
      })
    },
    slideHide () {
      this.isshow = false
    },
    nedShow (type, text) {
      if (this.onlyContent && !text) {
        return false
      }
      if (this.selectType === all) {
        return true
      } else {
        return type === this.selectType
      }
    },
    events: {
      'ratingtype.tabs' (type) {
        this.selectType = type
        this.$nextTick(() => {
          this.scroll.refresf()
        })
      },
      'content.toggle' (onlyContent) {
        this.$nextTick(() => {
          this.onlyContent = onlyContent
        })
      }
    }
  }
}
</script>
<style>
	.food{position: fixed;left: 0;top:0;bottom: 2.048rem;z-index: 2;width: 100%;background: #fff;}
	.img_head{width: 100%;height: 0;position: relative;padding-top:100%;  /*-------*/}
	.img_head > img{position: absolute;left: 0;top:0;width:100%;height: 100%;}
	.foods_info{background: #fff;margin-bottom: 0.6826rem;position: relative;padding-left:0.768rem ;padding-bottom:0.768rem;border-bottom: solid 1px #e6e7e8;box-shadow: 0 0.6826rem 0 #f3f5f7;}
	.foods_info p:first-child{font-size: 0.5973rem;color: #000;font-family: "微软雅黑";margin-bottom: 0.3413rem;margin-top:0.768rem; font-weight: 700;}
	.foods_info p:nth-of-type(2){font-size: 0.512rem;color: #93999f;font-family: "微软雅黑";margin-bottom: 0.768rem;}
	.foods_info p:nth-of-type(3){ font-size: 0.5973rem;font-family: "微软雅黑"; font-weight: 700; color: red; }
	.foods_info button{ background: #00a0dc; border: none; outline: none; border-radius: 24px; font-size:0.4266rem; color: #fff;font-family: "微软雅黑"; height: 1.024rem; width: 3.1573rem; position: absolute;right: 0.768rem; top:2.016rem; }
	.foods_jieshao{ border-top:solid 1px #e6e7e8; font-family: "微软雅黑"; padding-left:0.768rem ;}
	.foods_jieshao p{ font-size:0.512rem; line-height: 1.024rem; color: #4d555d  }
	.foods_jieshao h2,.rating h2{ font-size: 0.5973rem; padding-top:0.768rem ;  font-weight: 700;}
	.slideleft-enter-active, .slideleft-leave-active {transition: all .35s ease-out;}
	.slideleft-enter, .slideleft-leave-active {transform: translate3d(100%,0,0); opacity: 0;}
	.black_to{ position: absolute; left: 0.768rem; top:0.64rem;}
	.black_to .icon_arrow{ display: block; padding: 8px 10px; color: #fff; font-size: 24px; font-weight: 700; font-style: inherit; background:rgba(0,0,0,.4);}
	.rating{ padding-left: 0.768rem; padding-right: 0.768rem; }
	.rating h2,.foods_jieshao h2{ font-family: "微软雅黑";margin-bottom: 0.768rem; }
	.rating_warp{ padding-left: 0.768rem;padding-right: 0.768rem; font-family: "微软雅黑" }
	.rating_warp li{ border-bottom: solid 1px rgba(7,17,27,.1);padding-bottom: 0.6826rem; }
	.times{ overflow: hidden; }
	.times span{ font-size: 0.4266rem; display: inline-block;margin-bottom: 0.256rem; color: #93999f; }
	.times .proseon{ float: right; }
	.proseon span{ margin-right: 15px; }
	.list_text{ font-size: 0.512rem;  }
</style>